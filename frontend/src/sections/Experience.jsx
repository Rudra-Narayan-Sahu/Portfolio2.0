// src/sections/Experience.jsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../constants/data';
import { containerVariants, itemVariants, fadeUpVariants } from '../utils/animationVariants';

const Experience = () => {
  const [ref, isInView] = useScrollAnimation(0.2);

  return (
    <section id="experience" ref={ref} className="relative py-16 md:py-28 z-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              My
              <span className="block text-theme-color">Journey</span>
            </h2>
          </motion.div>

          {/* ── Mobile Timeline (single column, line on left) ── */}
          <div className="block lg:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 w-0.5 h-full bg-gradient-to-b from-theme-color/60 via-theme-color/30 to-transparent" />

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeUpVariants}
                  className="relative"
                >
                  {/* Dot on the left line */}
                  <div className="absolute -left-[22px] top-5 w-4 h-4 bg-theme-color rounded-full ring-4 ring-[#0B0F0D]" />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-5 bg-[#111715]/50 backdrop-blur-sm border border-theme-color/20 hover:border-theme-color/50 rounded-lg transition"
                  >
                    <h3 className="text-lg font-bold text-theme-color mb-1">{item.milestone}</h3>
                    <p className="text-sm text-[#B8C1BC] mb-2 leading-relaxed">{item.description}</p>
                    <span className="text-xs font-semibold text-theme-color/70 bg-theme-color/10 px-2 py-0.5 rounded-full">
                      {item.year}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Desktop Timeline (alternating two columns) ── */}
          <div className="hidden lg:block relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-theme-color/50 via-theme-color/30 to-transparent" />

            <div className="space-y-12">
              {experience.map((item, index) => (
                <TimelineItemDesktop key={index} item={item} index={index} isEven={index % 2 === 0} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const TimelineItemDesktop = ({ item, index, isEven }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUpVariants}
      className="grid grid-cols-2 gap-8 relative"
    >
      <div className={isEven ? '' : 'col-start-2'}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 bg-[#111715]/50 backdrop-blur-sm border border-theme-color/20 hover:border-theme-color/50 rounded-lg transition"
        >
          <h3 className="text-xl font-bold text-theme-color mb-2">{item.milestone}</h3>
          <p className="text-[#B8C1BC] mb-3">{item.description}</p>
          <span className="text-sm font-semibold text-theme-color/70">{item.year}</span>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 flex items-center justify-center">
        <motion.div
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="w-4 h-4 bg-theme-color rounded-full ring-4 ring-[#0B0F0D]"
        />
      </div>
    </motion.div>
  );
};

export default Experience;

