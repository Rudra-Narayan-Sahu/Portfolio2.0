// src/sections/Projects.jsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../constants/data';
import { containerVariants, itemVariants, slideInLeftVariants, slideInRightVariants } from '../utils/animationVariants';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import talentlensImg from '../assets/projects/TalntlensAI.png';
import artfusionImg from '../assets/projects/ArtFusion.png';
import intelliclassImg from '../assets/projects/InteliClass.png';
import websageImg from '../assets/projects/WebAge AI.png';
import videomindImg from '../assets/projects/VideoMindAI.png';
import codenationImg from '../assets/projects/Codenation.png';
import genvisionImg from '../assets/projects/GenVision.png';
import agentforgeImg from '../assets/projects/AgentForce.png';

const projectImages = {
  1: talentlensImg,
  2: artfusionImg,
  3: intelliclassImg,
  4: websageImg,
  5: videomindImg,
  6: codenationImg,
  7: genvisionImg,
  8: agentforgeImg,
};

const Projects = () => {
  const [ref, isInView] = useScrollAnimation(0.2);

  return (
    <section id="projects" ref={ref} className="relative py-16 md:py-28 z-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Featured
              <span className="block text-white">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-[#B8C1BC] mt-4 max-w-2xl">
              Showcasing my journey through full-stack development, AI integration, and building impactful solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
      /* On mobile: single column (image first, then text).
         On lg+: two columns side by side, aligned to top */
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
    >
      {/* ── Image ── always first on mobile, alternates on desktop */}
      <motion.div
        variants={isEven ? slideInLeftVariants : slideInRightVariants}
        className={`w-full ${!isEven ? 'lg:order-2' : ''}`}
      >
        <div className="relative w-full rounded-xl overflow-hidden border border-theme-color/20 shadow-lg shadow-black/30"
             style={{ aspectRatio: '16/9' }}>
          {projectImages[project.id] ? (
            <img
              src={projectImages[project.id]}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-theme-color/20 via-theme-color/10 to-transparent flex flex-col items-center justify-center gap-3">
              <span className="text-5xl">📁</span>
              <span className="text-white/50 text-sm font-medium">{project.title}</span>
            </div>
          )}

          {/* Overlay gradient at bottom for aesthetic */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0B0F0D]/60 to-transparent pointer-events-none" />

          {/* Project number badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-theme-color/90 text-[#0B0F0D] text-xs font-bold">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        variants={isEven ? slideInRightVariants : slideInLeftVariants}
        className={`space-y-5 ${!isEven ? 'lg:order-1' : ''}`}
      >
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{project.title}</h3>
          <p className="text-sm md:text-base text-[#B8C1BC] leading-relaxed">{project.description}</p>
        </div>

        {/* Problem & Solution */}
        <div className="space-y-2.5">
          <div className="p-3.5 bg-[#111715]/60 rounded-lg border-l-2 border-theme-color">
            <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Problem</p>
            <p className="text-sm text-[#B8C1BC] leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-3.5 bg-[#111715]/60 rounded-lg border-l-2 border-theme-color">
            <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Solution</p>
            <p className="text-sm text-[#B8C1BC] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-xs font-bold text-white mb-2.5 uppercase tracking-wider">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-theme-color/10 border border-theme-color/30 rounded-full text-xs sm:text-sm text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <p className="text-xs font-bold text-white mb-2.5 uppercase tracking-wider">Key Achievements</p>
          <ul className="space-y-1.5">
            {project.achievements.map((achievement) => (
              <li key={achievement} className="text-sm text-[#B8C1BC] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-color flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-theme-color text-[#0B0F0D] font-semibold rounded-lg hover:shadow-lg hover:shadow-theme-color/50 transition text-sm"
          >
            <FiGithub size={16} />
            GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 border border-theme-color text-white font-semibold rounded-lg hover:bg-theme-color/10 transition text-sm"
          >
            <FiExternalLink size={16} />
            Live Demo
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;

