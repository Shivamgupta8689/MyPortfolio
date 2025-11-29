import { FaFileDownload } from 'react-icons/fa'

/**
 * Hero Section Component
 * Main landing section with animated intro and CTA buttons
 */
function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-5 sm:px-10"
    >
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-gray-400 animate-fade-in">Hi, I'm</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                <span className="gradient-text animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Shivam
                </span>
                <span className="inline-block ml-3 animate-bounce">👋</span>
              </h1>
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
                  Frontend & Backend Developer
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Passionate full-stack developer focused on building fast, reliable, and user-centric web applications. I love turning ideas into clean code using modern web technologies and best practices.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={() => {
                  // Add your resume download link here
                  const link = document.createElement('a')
                  link.href = 'https://drive.google.com/file/d/1IZsRAf6D9NJRjvpwj-U5xHXL57Eu0T_i/view?usp=drive_link' // Update with your resume path
                  link.download = 'Shivam_Resume.pdf'
                  link.click()
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-gray-900 font-semibold rounded-full hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
              >
                <FaFileDownload /> Download Resume
              </button>
            </div>
          </div>

          {/* Visual Card */}
          <div className="hidden md:block animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="glass p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="font-mono text-sm space-y-3">
                  <div className="text-primary">
                    <span className="text-secondary">const</span> developer
                    <span className="text-gray-400"> =</span> <span className="text-accent">'Shivam'</span>
                  </div>
                  <div className="text-primary">
                    <span className="text-secondary">let</span> stack
                    <span className="text-gray-400"> =</span> <span className="text-accent">'MERN'</span>
                  </div>
                  <div className="text-primary">
                    <span className="text-secondary">function</span> build
                    <span className="text-gray-400">(</span>
                    <span className="text-accent">'Web Apps'</span>
                    <span className="text-gray-400">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
