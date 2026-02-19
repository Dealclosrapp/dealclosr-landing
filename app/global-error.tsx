'use client'

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="min-h-screen bg-[color:hsl(var(--background))] text-[color:hsl(var(--foreground))] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[color:hsl(var(--primary))] text-[color:hsl(var(--primary-foreground))] rounded-lg font-semibold"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
