// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { containerVariants, itemVariants } from '../utils/animationVariants';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen z-10 overflow-hidden flex items-stretch"
    >
      {/* ── Background warm glow (right side, like reference) ── */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(61,220,132,0.08) 0%, rgba(61,220,132,0.04) 40%, transparent 70%)',
        }}
      />
      {/* Hex / subtle pattern glow in the middle */}
      <div
        className="absolute left-1/2 top-1/3 w-72 h-72 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(61,220,132,0.06) 0%, transparent 70%)',
          transform: 'translateX(-30%)',
        }}
      />

      {/* ── Main layout: text left | image right ── */}
      <div className="relative w-full mx-auto flex flex-col lg:flex-row items-stretch px-4 sm:px-6 lg:px-8 max-w-[1920px]">

        {/* ════ LEFT: Text content ════ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="
            flex flex-col justify-center z-20
            px-6 sm:px-10 lg:px-16
            pt-32 pb-16 lg:pt-24 lg:pb-0
            w-full lg:w-1/2
            text-center lg:text-left
          "
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-theme-color animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-[#B8C1BC]">
              AI &amp; ML Enthusiast • DSA Practitioner • Full Stack Builder
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            <span className="block">Train<span className="text-theme-color">.</span></span>
            <span className="block">Build<span className="text-theme-color">.</span></span>
            <span className="block">Learn<span className="text-theme-color">.</span></span>
            <span className="block text-theme-color">Evolve<span className="text-white">.</span></span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-[#B8C1BC] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
          >
            I'm <strong className="text-white">Rudra Narayan Sahu</strong>, a B.Tech CSE (AI &amp; ML) student
            at GIET University passionate about Data Structures, Full Stack Development, and building
            intelligent AI systems that make a{' '}
            <strong className="text-theme-color">"real-world impact"</strong>{' '}
            through consistent learning and creative engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <Link to="projects" smooth duration={500} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition text-sm sm:text-base"
              >
                View Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </motion.button>
            </Link>

            <Link to="contact" smooth duration={500} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition text-sm sm:text-base"
              >
                Get In Touch
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* ════ RIGHT: Profile image — fills the right column, anchored to bottom ════ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="
            relative
            w-full lg:w-1/2
            flex items-end justify-center lg:justify-end
            /* On mobile: 60vw tall image row below text */
            h-[55vw] sm:h-[45vw] lg:h-auto lg:min-h-screen
            overflow-hidden
          "
        >
          {/* Warm radial glow directly behind the person */}
          <div
            className="absolute bottom-0 right-0 w-full h-4/5 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 90% at 60% 100%, rgba(61,220,132,0.13) 0%, rgba(61,220,132,0.05) 50%, transparent 75%)',
            }}
          />

          {/* Profile image — bottom-anchored, no background, fades to black at bottom */}
          <div
            className="relative h-full w-full flex items-end justify-center lg:justify-end"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, black 55%, transparent 100%)',
              maskImage:
                'linear-gradient(to bottom, black 55%, transparent 100%)',
            }}
          >
            <img
              src={profileImage}
              alt="Rudra Sahu"
              className="
                object-contain object-bottom
                /* Mobile: constrained height */
                h-full
                /* Desktop: full viewport height, flush right */
                lg:h-screen
                w-auto
                max-w-none
                drop-shadow-2xl
                select-none
              "
              draggable={false}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 hidden lg:flex"
      >
        <span className="text-xs text-[#B8C1BC]/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-theme-color/60 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
