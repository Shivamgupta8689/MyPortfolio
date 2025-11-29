import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

/**
 * Projects Section Component
 * Interactive project cards with hover animations
 */
function Projects() {
  const projects = [
    {
      id: 2,
      title: 'Chat Application',
      description: 'Real-time messaging application with multiple chat rooms, user presence, and file sharing capabilities using Socket.io.',
      tech: ['MERN', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Shivamgupta8689/Chat_application',
      demo: 'https://demo.com',
      emoji: '💬',
    },
    {
      id: 3,
      title: 'Blog App',
      description: 'A modern blog platform with rich text editing, user authentication, and real-time updates using MERN stack and Material UI.',
      tech: ['MERN', 'Material UI', 'React', 'Node.js'],
      github: 'https://github.com/Shivamgupta8689/blog_website2',
      demo: 'https://ltce-blog.vercel.app',
      emoji: '✍️',
    },
    {
      id: 5,
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, grades, and academic information with admin and student portals.',
      tech: ['Java', 'MySQL', 'Swing', 'JDBC'],
      github: 'https://github.com/Shivamgupta8689/Student-management-system-master',
      emoji: '🎓',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-5 sm:px-10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass overflow-hidden group cursor-pointer animate-scale-in hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Emoji */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <span className="text-7xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {project.emoji}
                </span>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-gray-900 text-xl hover:scale-110 transition-transform shadow-lg shadow-primary/50"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform shadow-lg shadow-secondary/50"
                      aria-label="Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 rounded-full text-primary hover:bg-primary hover:text-gray-900 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
