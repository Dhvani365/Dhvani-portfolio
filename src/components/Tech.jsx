import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const educationData = [
  {
    period: "2023 - 2026",
    degree: "B.Tech in Computer Engineering",
    institution: "Sarvajanik College of Engineering & Technology",
    details: "CGPA: 10 (Till Sem 6)",
  },
  {
    period: "2020 - 2023",
    degree: "Diploma in Computer Engineering",
    institution: "Govt. Polytechnic For Girls, Surat",
    details: "CGPA: 10 (ACPC Rank: 2)",
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Express.js", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Python", level: 80 },
    ],
  },
  {
    title: "Database Management",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "MySQL", level: 90 },
      { name: "Oracle", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "WordPress", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Linux / Windows CLI", level: 80 },
    ],
  },
];

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const SkillRing = ({ level }) => (
  <div className="relative w-20 h-20">
    <svg className="transform -rotate-90 w-20 h-20">
      <circle
        cx="40"
        cy="40"
        r="36"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="6"
        fill="none"
      />
      <circle
        cx="40"
        cy="40"
        r="36"
        stroke="url(#grad)"
        strokeWidth="6"
        strokeDasharray={`${(level / 100) * 226} 226`}
        fill="none"
        strokeLinecap="round"
        className="transition-all duration-700 ease-out"
      />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white text-sm font-semibold">{level}%</span>
    </div>
  </div>
);

const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-gradient-to-br from-[#1d1836]/80 to-[#2A2740]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all"
  >
    <SkillRing level={skill.level} />
    <h6 className="mt-3 text-gray-200 text-[14px] font-medium">{skill.name}</h6>
  </motion.div>
);

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn(index * 0.2)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative bg-gradient-to-br from-[#1d1836]/80 to-[#2A2740]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-6 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300"
  >
    <span className="absolute -top-3 right-4 text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
      {edu.period}
    </span>
    <h4 className="text-white text-lg font-bold mb-2">{edu.degree}</h4>
    <p className="text-gray-300 text-[14px] mb-1">{edu.institution}</p>
    <p className="text-gray-400 text-[13px]">{edu.details}</p>
  </motion.div>
);

const Tech = () => {
  return (
    <section className="py-20" id="skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn()}
      >
        <p
          className={`${styles.sectionSubText} text-center uppercase tracking-wider text-gray-400`}
        >
          Technologies I Work With
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400`}
        >
          My Skills & Expertise
        </h2>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-2 sm:grid-cols-1 gap-12 px-6 md:px-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            variants={fadeIn(idx * 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col bg-[#1d1836]/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-white text-lg font-bold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {category.skills.map((skill, i) => (
                <SkillCard skill={skill} key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn()}
      >
        <p
          className={`${styles.sectionSubText} mt-12 text-center uppercase tracking-wider text-gray-400`}
        >
          Academic Achievements
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400`}
        >
          My Education
        </h2>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-2 sm:grid-cols-1 gap-12 px-6 md:px-12">
        {educationData.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "tech");
