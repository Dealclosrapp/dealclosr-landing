'use client'

export default function GlobalError() {
  return (
    <html>
      <body className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg font-semibold"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
