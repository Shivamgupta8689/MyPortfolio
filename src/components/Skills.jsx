/**
 * Skills Section Component
 * Animated skill badges organized by categories
 */
function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap'],
      color: 'from-primary to-cyan-500',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express'],
      color: 'from-secondary to-purple-500',
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase',],
      color: 'from-accent to-yellow-500',
    },
    {
      category: 'Other',
      skills: ['Python', 'Java', 'Git & Github'],
      color: 'from-pink-500 to-red-500',
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-5 sm:px-10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass p-6 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3
                className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 border border-transparent rounded-full text-sm font-medium hover:scale-110 hover:bg-opacity-20 hover:shadow-lg hover:animate-pulse transition-all duration-300 cursor-pointer animate-scale-in`}
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Representation */}
        <div className="flex justify-center animate-float">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Rotating Rings */}
            <div className="absolute w-48 h-48 border-4 border-primary/30 rounded-full animate-rotate-ring"></div>
            <div className="absolute w-56 h-56 border-4 border-secondary/30 rounded-full animate-rotate-ring" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
            <div className="absolute w-64 h-64 border-4 border-accent/30 rounded-full animate-rotate-ring" style={{ animationDuration: '4s' }}></div>
            
            {/* Center */}
            <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg shadow-primary/50">
              Tech Stack
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
