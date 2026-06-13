import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants/data';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

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
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-16 md:py-28 z-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Featured
            <span className="block text-white">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-[#B8C1BC] mt-4 max-w-2xl">
            Click a project to explore details.
          </p>
        </div>

        {selected ? (
          <DetailView project={selected} onClose={() => setSelected(null)} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                layout
                onClick={() => setSelected(project)}
                className="relative rounded-xl overflow-hidden border border-white/10 bg-[#111715] group cursor-pointer text-left w-full"
                style={{ aspectRatio: '4/3' }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
              >
                {projectImages[project.id] ? (
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">📁</div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D]/90 via-[#0B0F0D]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-white/50 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">{project.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const DetailView = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      className="bg-[#111715] rounded-2xl border border-white/10 overflow-hidden"
    >
      {/* Image */}
      <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
        {projectImages[project.id] ? (
          <img
            src={projectImages[project.id]}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">📁</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0D] to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition cursor-pointer"
        >
          <FiX size={20} />
        </button>
        <div className="absolute bottom-4 left-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-8 space-y-6">
        <p className="text-[#B8C1BC] leading-relaxed">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#0B0F0D]/60 rounded-lg border-l-2 border-white">
            <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Problem</p>
            <p className="text-sm text-[#B8C1BC] leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-4 bg-[#0B0F0D]/60 rounded-lg border-l-2 border-white">
            <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Solution</p>
            <p className="text-sm text-[#B8C1BC] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold text-white mb-3 uppercase tracking-wider">Key Achievements</p>
          <ul className="space-y-2">
            {project.achievements.map((a) => (
              <li key={a} className="text-sm text-[#B8C1BC] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B0F0D] font-semibold rounded-lg hover:shadow-lg hover:shadow-white/30 transition text-sm"
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
            className="flex items-center gap-2 px-5 py-2.5 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition text-sm"
          >
            <FiExternalLink size={16} />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
