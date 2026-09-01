"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Loader2 } from "lucide-react"

type PdfPreviewProps = {
  /** Path to the PDF, e.g. "/reports/report.pdf" */
  file: string
  /** 1-based page number to render */
  page?: number
  /** Rendered width in CSS pixels. The canvas is drawn at 2x for sharpness. */
  width?: number
  /** Accessible label for the rendered page */
  label?: string
  className?: string
}

/**
 * Renders a single PDF page to a canvas with pdf.js.
 *
 * We render to a canvas rather than embedding the PDF in an <iframe> because
 * mobile browsers refuse to display inline PDFs, which would leave the preview
 * blank on phones. The worker is served from /pdfjs so it survives static export.
 */
export function PdfPreview({ file, page = 1, width = 640, label, className = "" }: PdfPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let cancelled = false
    let renderTask: { cancel: () => void } | null = null
    let loadingTask: { destroy: () => Promise<void> } | null = null

    async function render() {
      try {
        const pdfjs = await import("pdfjs-dist")
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs"

        const task = pdfjs.getDocument({ url: file })
        loadingTask = task
        const pdf = await task.promise
        if (cancelled) return

        const pdfPage = await pdf.getPage(Math.min(page, pdf.numPages))
        const canvas = canvasRef.current
        if (cancelled || !canvas) return

        const base = pdfPage.getViewport({ scale: 1 })
        // Draw at 2x for crisp text on high-density displays.
        const viewport = pdfPage.getViewport({ scale: (width * 2) / base.width })

        canvas.width = viewport.width
        canvas.height = viewport.height
        canvas.style.aspectRatio = `${base.width} / ${base.height}`

        const context = canvas.getContext("2d")
        if (!context) return

        renderTask = pdfPage.render({ canvas, canvasContext: context, viewport })
        await (renderTask as unknown as { promise: Promise<void> }).promise

        if (!cancelled) setStatus("ready")
      } catch (error) {
        // A cancelled render throws; only surface genuine failures.
        if (!cancelled) {
          console.error(`[PdfPreview] Failed to render ${file}`, error)
          setStatus("error")
        }
      }
    }

    render()

    return () => {
      cancelled = true
      renderTask?.cancel()
      loadingTask?.destroy().catch(() => {})
    }
  }, [file, page, width])

  return (
    <div className={`relative h-full w-full overflow-hidden bg-muted ${className}`}>
      <canvas
        ref={canvasRef}
        aria-label={label ?? `Page ${page} preview`}
        role="img"
        className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
          status === "ready" ? "opacity-100" : "opacity-0"
        }`}
      />

      {status === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Loading preview…</span>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted px-4 text-center">
          <FileText className="h-7 w-7 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            Preview unavailable — open or download the PDF below
          </span>
        </div>
      )}
    </div>
  )
}
