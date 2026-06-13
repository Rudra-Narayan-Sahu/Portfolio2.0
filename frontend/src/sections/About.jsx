import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { stats } from '../constants/data';
import { containerVariants, itemVariants } from '../utils/animationVariants';

const About = () => {
  const [ref, isInView] = useScrollAnimation(0.2);

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-32 z-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              About
              <span className="block text-white">Me</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#B8C1BC] leading-relaxed">
              I'm <strong className="text-white">Rudra Narayan Sahu</strong>, a 3rd year B.Tech student
              at <strong className="text-white">GIET University, Gunupur</strong>, specializing in
              Computer Science Engineering with <strong className="text-white">AI & Machine Learning</strong>.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-[#B8C1BC] leading-relaxed">
            <p>
              My coding journey started with Java fundamentals and has evolved into a comprehensive skill set
              spanning full-stack development, Machine Learning, Deep Learning, Generative AI, and Agentic AI.
              I believe in building impactful software that solves real-world problems.
            </p>
            <p>
              From building an AI-powered resume screener to developing autonomous agent frameworks, I've worked
              across 8+ projects that combine modern web technologies with cutting-edge AI. I'm driven by curiosity
              and a commitment to consistent, disciplined learning.
            </p>
            <p>
              Based in <strong className="text-white">Berhampur, Odisha</strong>, I'm always open to collaborating
              on innovative projects that make a difference. Let's build something great together.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isInView }) => {
  const count = useCounterAnimation(stat.value, isInView, 2);

  return (
    <motion.div
      variants={itemVariants}
      className="p-6 bg-[#111715]/50 backdrop-blur-sm border border-theme-color/20 rounded-lg hover:border-theme-color/50 transition"
    >
      <p className="text-4xl font-bold text-white mb-2">{count}+</p>
      <p className="text-sm text-[#B8C1BC]">{stat.label}</p>
    </motion.div>
  );
};

export default About;
