import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaArrowUp } from 'react-icons/fa'

/**
 * Footer Component
 * Footer with logo, social links, and copyright
 */
function Footer() {


  return (
    <footer>
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-800 text-center mb-8">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} All rights reserved. Made with ❤️
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer

