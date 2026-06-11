// src/sections/Contact.jsx
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from '@emailjs/browser';
import { containerVariants, itemVariants } from '../utils/animationVariants';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [ref, isInView] = useScrollAnimation(0.2);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Initialize EmailJS
  emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: FiMail, label: 'Email', value: 'abcd@gmail.com', link: 'mailto:abcd@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/rudrasahu', link: 'https://linkedin.com/in/rudrasahu' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/rudrasahu', link: 'https://github.com/rudrasahu' },
    { icon: FiTwitter, label: 'Twitter', value: '@rudrasahu', link: 'https://twitter.com/rudrasahu' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-16 md:py-32 z-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Let's Build
              <span className="block text-theme-color">Something Great</span>
            </h2>
            <p className="text-lg text-[#B8C1BC] max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-[#111715]/50 backdrop-blur-sm border border-theme-color/20 hover:border-theme-color/50 rounded-lg text-center transition group"
                >
                  <Icon className="text-2xl text-theme-color mx-auto mb-2 group-hover:scale-110 transition" />
                  <p className="text-sm font-semibold text-[#B8C1BC] group-hover:text-theme-color transition">
                    {contact.label}
                  </p>
                  <p className="text-xs text-[#B8C1BC]/60 truncate">{contact.value}</p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="p-5 sm:p-8 bg-[#111715]/50 backdrop-blur-sm border border-theme-color/20 rounded-lg space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="px-4 py-3 bg-[#0B0F0D]/50 border border-theme-color/20 rounded-lg text-[#B8C1BC] placeholder-[#B8C1BC]/50 focus:outline-none focus:border-theme-color/50 transition"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="px-4 py-3 bg-[#0B0F0D]/50 border border-theme-color/20 rounded-lg text-[#B8C1BC] placeholder-[#B8C1BC]/50 focus:outline-none focus:border-theme-color/50 transition"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-[#0B0F0D]/50 border border-theme-color/20 rounded-lg text-[#B8C1BC] placeholder-[#B8C1BC]/50 focus:outline-none focus:border-theme-color/50 transition resize-none"
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-theme-color"
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400"
                >
                  ✗ Failed to send message. Try again.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-theme-color text-[#0B0F0D] font-semibold rounded-lg hover:shadow-lg hover:shadow-theme-color/50 transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
