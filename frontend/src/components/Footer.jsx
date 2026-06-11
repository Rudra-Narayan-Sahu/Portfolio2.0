// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/rudrasahu', label: 'GitHub' },
    { icon: FiLinkedin, link: 'https://linkedin.com/in/rudrasahu', label: 'LinkedIn' },
    { icon: FiTwitter, link: 'https://twitter.com/rudrasahu', label: 'Twitter' },
    { icon: FiMail, link: 'mailto:abcd@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 z-10 border-t border-theme-color/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              Rudra<span className="text-theme-color">.</span>
            </h3>
            <p className="text-[#B8C1BC]">Building impactful software through consistency and curiosity.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-theme-color mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#B8C1BC]">
              <li><a href="#hero" className="hover:text-theme-color transition">Home</a></li>
              <li><a href="#about" className="hover:text-theme-color transition">About</a></li>
              <li><a href="#projects" className="hover:text-theme-color transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-theme-color transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-theme-color mb-4">Follow</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-[#B8C1BC] hover:text-theme-color transition"
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8 border-t border-theme-color/10 text-center text-[#B8C1BC]"
        >
          <p>© {currentYear} Rudra Sahu. Built with consistency and curiosity.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
