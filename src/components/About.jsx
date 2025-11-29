/**
 * About Section Component
 * Tech-focused bio section with profile photo and interests
 */
function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-5 sm:px-10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-slow"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50 group-hover:border-primary transition-colors">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-6 animate-slide-left">
            <div className="glass p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Tech Enthusiast & Developer</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
  I'm Shivam, a passionate full-stack developer focused on building clean, responsive, and 
  user-friendly web applications using the  
  <strong className="text-primary"> MERN Stack</strong>. I enjoy the complete process of 
  development — from designing intuitive interfaces to building efficient backend logic that 
  keeps applications fast and reliable.
</p>

<p>
  I love working with modern JavaScript tools, creating reusable components, structuring 
  scalable APIs, and writing code that is both clean and maintainable. My approach to 
  development is simple: build with clarity, focus on performance, and deliver smooth 
  user experiences.
</p>

<p>
  I'm constantly learning, improving my skills, and exploring better ways to build 
  full-stack applications. For me, coding is not just a skill — it's something I genuinely 
  enjoy and continuously strive to grow in.
</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
