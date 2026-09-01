// Next.js only ships declarations for `*.module.css`, so plain global stylesheet
// imports (e.g. `import './globals.css'`) trip TS2882 under
// `noUncheckedSideEffectImports`, which some editors/TS versions enable by default.
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
