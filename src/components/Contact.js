import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa"

const Contact = ({ darkMode }) => {
  return (
    <motion.section
      id="contact"
      className={`py-24 bg-[var(--background)] text-[var(--text)]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">&lt;Contact&gt;</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-mono">
              name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 font-mono bg-[var(--background)] text-[var(--text)] border-[var(--text)] focus:ring-[var(--primary)]`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-mono">
              email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 font-mono bg-[var(--background)] text-[var(--text)] border-[var(--text)] focus:ring-[var(--primary)]`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-mono">
              message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 font-mono bg-[var(--background)] text-[var(--text)] border-[var(--text)] focus:ring-[var(--primary)]`}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-[var(--primary)] text-[var(--background)] px-4 py-2 rounded-lg hover:bg-[var(--secondary)] transition-colors duration-300 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            sendMessage()
          </motion.button>
        </form>
        <div className="flex justify-center space-x-4 mt-8">
          <SocialLink
            href="https://www.facebook.com/miots.fitia"
            icon={<FaFacebook />}
            title="Facebook"
            color="text-blue-600"
          />
          <SocialLink
            href="https://www.instagram.com/r.miots/"
            icon={<FaInstagram />}
            title="Instagram"
            color="text-pink-600"
          />
          <SocialLink
            href="https://www.linkedin.com/in/miotisoa-randriamihaja-84b88b2bb/"
            icon={<FaLinkedin />}
            title="LinkedIn"
            color="text-blue-700"
          />
          <SocialLink href="https://github.com/Miots" icon={<FaGithub />} title="Github" color="text-gray-800" />
          <SocialLink
            href="https://wa.me/261383032824?text=Bonjour%20je%20souhaite%20vous%20contacter"
            icon={<FaWhatsapp />}
            title="WhatsApp"
            color="text-green-600"
          />
          <SocialLink
            href="mailto:miotsrandriamihaja@gmail.com"
            icon={<FaEnvelope />}
            title="Gmail"
            color="text-red-600"
          />
        </div>
        <h1 className="text-4xl font-bold mt-12 text-center font-mono">&lt;/Contact&gt;</h1>
      </div>
    </motion.section>
  )
}

const SocialLink = ({ href, icon, title, color }) => (
  <motion.a
    href={href}
    className={`${color} text-2xl hover:opacity-80`}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
)

export default Contact

