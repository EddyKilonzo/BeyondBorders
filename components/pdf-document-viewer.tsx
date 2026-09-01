"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Download, ExternalLink, FileWarning, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

type PdfDocumentViewerProps = {
  file: string
  title: string
  /** Page count from the report metadata, used before the document loads. */
  totalPages?: number
}

/**
 * In-page PDF reader built on pdf.js.
 *
 * Renders one page at a time to a canvas so it works on mobile browsers, which
 * do not display inline PDFs in <iframe>/<embed>. Falls back to the download and
 * open-in-browser actions if pdf.js cannot load the document.
 */
export function PdfDocumentViewer({ file, title, totalPages }: PdfDocumentViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const docRef = useRef<any>(null)
  const loadingTaskRef = useRef<{ destroy: () => Promise<void> } | null>(null)
  const renderTaskRef = useRef<{ cancel: () => void; promise: Promise<void> } | null>(null)

  const [pageNumber, setPageNumber] = useState(1)
  const [pageCount, setPageCount] = useState(totalPages ?? 0)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [rendering, setRendering] = useState(false)

  // Load the document once.
  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const pdfjs = await import("pdfjs-dist")
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs"

        const task = pdfjs.getDocument({ url: file })
        loadingTaskRef.current = task
        const pdf = await task.promise
        if (cancelled) return
        docRef.current = pdf
        setPageCount(pdf.numPages)
        setStatus("ready")
      } catch (error) {
        if (!cancelled) {
          console.error(`[PdfDocumentViewer] Failed to load ${file}`, error)
          setStatus("error")
        }
      }
    }

    load()

    return () => {
      cancelled = true
      renderTaskRef.current?.cancel()
      renderTaskRef.current = null
      loadingTaskRef.current?.destroy().catch(() => {})
      loadingTaskRef.current = null
      docRef.current = null
    }
  }, [file])

  const renderPage = useCallback(async (num: number) => {
    const pdf = docRef.current
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!pdf || !canvas || !container) return

    // Cancel any in-flight render; two tasks drawing onto the same canvas
    // leaves the previous page ghosted underneath the new one.
    renderTaskRef.current?.cancel()
    renderTaskRef.current = null

    setRendering(true)
    try {
      const page = await pdf.getPage(num)
      const base = page.getViewport({ scale: 1 })
      const cssWidth = container.clientWidth || 800
      const dpr = Math.min(typeof window === "undefined" ? 1 : window.devicePixelRatio || 1, 2)
      const viewport = page.getViewport({ scale: (cssWidth * dpr) / base.width })

      const context = canvas.getContext("2d")
      if (!context) return

      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.style.width = "100%"
      canvas.style.aspectRatio = `${base.width} / ${base.height}`
      context.clearRect(0, 0, canvas.width, canvas.height)

      const task = page.render({ canvas, canvasContext: context, viewport })
      renderTaskRef.current = task
      await task.promise
      renderTaskRef.current = null
    } catch (error) {
      // Cancelling a render rejects with a RenderingCancelledException; ignore it.
      if ((error as { name?: string })?.name !== "RenderingCancelledException") {
        console.error(`[PdfDocumentViewer] Failed to render page ${num}`, error)
      }
      return
    } finally {
      setRendering(false)
    }
  }, [])

  // Render whenever the page changes or the document becomes ready.
  useEffect(() => {
    if (status === "ready") renderPage(pageNumber)
  }, [status, pageNumber, renderPage])

  // Re-render at the new width when the container resizes.
  useEffect(() => {
    if (status !== "ready" || typeof ResizeObserver === "undefined") return
    const container = containerRef.current
    if (!container) return

    let timer: ReturnType<typeof setTimeout>
    const observer = new ResizeObserver(() => {
      clearTimeout(timer)
      timer = setTimeout(() => renderPage(pageNumber), 200)
    })
    observer.observe(container)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [status, pageNumber, renderPage])

  if (status === "error") {
    return (
      <div className="rounded-2xl border-2 border-dashed border-border bg-muted/40 p-8 sm:p-12 text-center">
        <FileWarning className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />
        <h3 className="mb-2 text-lg font-bold text-foreground">In-page viewer unavailable</h3>
        <p className="mx-auto mb-6 max-w-md text-sm text-muted-foreground">
          Your browser could not render this document inline. You can still open it in a new tab or
          download the full PDF.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild className="bg-gradient-to-r from-sky-400 to-blue-500 text-white">
            <a href={file} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in Browser
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={file} download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-lg">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 border-b border-border bg-muted/50 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <div className="min-w-0 flex items-center gap-2">
          <span className="truncate text-xs font-medium text-foreground sm:text-sm">{title}</span>
        </div>

        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setPageNumber((n) => Math.max(1, n - 1))}
              disabled={pageNumber <= 1 || status !== "ready"}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[5.5rem] text-center text-xs text-muted-foreground tabular-nums">
              Page {pageNumber} of {pageCount || "—"}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setPageNumber((n) => Math.min(pageCount || n, n + 1))}
              disabled={status !== "ready" || (pageCount > 0 && pageNumber >= pageCount)}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="h-8 text-xs">
              <a href={file} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                <span className="hidden sm:inline">Open</span>
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="h-8 bg-gradient-to-r from-sky-400 to-blue-500 text-xs text-white hover:shadow-lg"
            >
              <a href={file} download>
                <Download className="mr-1.5 h-3.5 w-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Page canvas */}
      <div ref={containerRef} className="relative bg-muted/30 p-2 sm:p-4">
        <canvas
          ref={canvasRef}
          className="mx-auto block w-full rounded-lg bg-white shadow-md"
          aria-label={`${title} — page ${pageNumber}`}
          role="img"
        />
        {(status === "loading" || rendering) && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-muted/60 backdrop-blur-[1px]">
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg">
              <Loader2 className="h-4 w-4 animate-spin text-sky-500" />
              <span className="text-xs text-muted-foreground">
                {status === "loading" ? "Loading document…" : "Rendering page…"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
