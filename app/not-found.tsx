export default function NotFound() {
  return (
    <div className="min-h-screen bg-[color:hsl(var(--background))] text-[color:hsl(var(--foreground))] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-xl text-[color:hsl(var(--muted-foreground))]">Page not found</p>
      </div>
    </div>
  )
}
