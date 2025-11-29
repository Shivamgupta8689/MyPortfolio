import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'
import toast from 'react-hot-toast'

/**
 * Contact Section Component
 */
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xpwgneez', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Thank you for your message! I'll get back to you soon.", {
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #3b82f6',
            borderRadius: '0.5rem',
          },
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Oops! Something went wrong. Please try again.', {
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #ef4444',
            borderRadius: '0.5rem',
          },
        })
      }
    } catch (error) {
      toast.error('Network error. Please try again later.', {
        duration: 4000,
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #ef4444',
          borderRadius: '0.5rem',
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Shivamgupta8689', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/shivam-gupta-657005323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <FaTwitter />, url: 'https://x.com/ShivamGupt88513?t=JZwrvtH3NwMfN2ZB4j3vmQ&s=09', label: 'X (Twitter)', color: 'hover:text-blue-400' },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-5 sm:px-10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text animate-slide-up">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-right">
            <div className="glass p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                Feel free to reach out through the form or connect with me on social media.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-xl text-gray-400 ${social.color} hover:scale-110 hover:border-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Contact Detail */}
              <div className="flex items-center gap-4 text-gray-400">
                <FaEnvelope className="text-primary text-xl" />
                <span>devshivam.infinite@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass p-8 space-y-6 animate-slide-left"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/20 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-gray-900 font-semibold rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
