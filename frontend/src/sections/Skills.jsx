import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../constants/data';
import { containerVariants, itemVariants, scaleVariants } from '../utils/animationVariants';
import {
  FaJava,
  FaPython,
  FaJs,
  FaGlobe,
  FaBrain,
  FaCode,
  FaTrophy,
} from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdAutoAwesome, MdSmartToy } from 'react-icons/md';
import { VscSymbolRuler } from 'react-icons/vsc';

const skillIcons = {
  java: FaJava,
  python: FaPython,
  javascript: FaJs,
  globe: FaGlobe,
  brain: FaBrain,
  deeplearning: GiArtificialIntelligence,
  sparkles: MdAutoAwesome,
  robot: MdSmartToy,
  code: VscSymbolRuler,
  trophy: FaTrophy,
};

const Skills = () => {
  const [ref, isInView] = useScrollAnimation(0.2);

  const skillCategories = [
    { name: 'Programming Languages', items: skills.programming },
    { name: 'Domains of Interest', items: skills.domains },
    { name: 'Problem Solving', items: skills.problemsolving },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-16 md:py-32 z-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Skills &
            <span className="block text-white">Expertise</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div key={category.name} custom={catIndex} variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-6 text-white">{category.name}</h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <SkillItem key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, index }) => {
  const IconComponent = skillIcons[skill.icon] || FaCode;

  return (
    <motion.div
      custom={index}
      variants={scaleVariants}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-4 p-4 rounded-lg bg-[#111715]/50 backdrop-blur-sm border border-theme-color/20 hover:border-theme-color/50 transition group cursor-pointer"
    >
      <div className="text-2xl text-white group-hover:scale-110 transition">
        <IconComponent />
      </div>
      <span className="text-[#B8C1BC] font-medium group-hover:text-white transition">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default Skills;
