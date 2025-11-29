/**
 * LoadingScreen Component
 * Futuristic loader with rotating ring, glowing dots, pulse animation, and neon circle
 */
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="relative">
        {/* Rotating Ring */}
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-rotate-ring"></div>
          <div className="absolute inset-2 border-4 border-transparent border-r-secondary rounded-full animate-rotate-ring" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-4 border-4 border-transparent border-b-accent rounded-full animate-rotate-ring" style={{ animationDuration: '2s' }}></div>
        </div>

        {/* Neon Circle (Pulsing) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-primary rounded-full animate-neon-pulse opacity-70 blur-sm"></div>
        </div>

        {/* Center Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-full animate-pulse-slow opacity-50"></div>
        </div>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.png" alt="logo" className="w-16 h-16 rounded-full object-cover animate-pulse-slow" />
        </div>
      </div>

      {/* Glowing Dots */}
      <div className="absolute bottom-40 flex gap-3">
        <div className="w-4 h-4 bg-primary rounded-full animate-pulse-slow shadow-lg shadow-primary/50" style={{ animationDelay: '0s' }}></div>
        <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-slow shadow-lg shadow-secondary/50" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-4 h-4 bg-accent rounded-full animate-pulse-slow shadow-lg shadow-accent/50" style={{ animationDelay: '0.6s' }}></div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-24">
        <p className="text-gray-400 animate-pulse text-lg">Loading Portfolio...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
