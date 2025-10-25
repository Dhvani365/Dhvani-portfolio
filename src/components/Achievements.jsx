import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : -50,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      variants={fadeIn(index % 2 === 0 ? "left" : "right", index * 0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 group"
    >
      {/* Left Icon Bubble */}
      <div
        className="flex justify-center items-center w-14 h-14 rounded-full shadow-lg z-10 flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${achievement?.iconBg}, #6B5B95)`,
          boxShadow: "0 0 20px rgba(255,255,255,0.15)",
        }}
      >
        <span className="text-white text-xl font-bold">
          {achievement.title?.charAt(0)}
        </span>
      </div>

      {/* Connecting Line */}
      <div className="absolute left-[27px] top-[70px] w-[2px] h-[calc(100%-50px)] bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 opacity-50"></div>

      {/* Card */}
      <div className="relative bg-gradient-to-br from-[#1d1836]/80 to-[#2A2740]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full sm:w-[85%] hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300">
        <h3 className="text-[22px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          {achievement?.title}
        </h3>
        <p className="text-gray-300 text-sm font-medium mb-2">
          {achievement?.organization}
        </p>
        <p className="text-indigo-300 text-[13px] mb-4">{achievement?.date}</p>

        <p className="text-gray-200 text-[15px] leading-relaxed mb-4">
          {achievement?.description}
        </p>

        {achievement.highlights && (
          <ul className="list-disc ml-6 space-y-2">
            {achievement?.highlights?.map((point, idx) => (
              <li
                key={idx}
                className="text-gray-300 text-[14px] leading-relaxed"
              >
                {/* Detect Markdown-style [text](url) links and convert */}
                {point.split(/(\[.*?\]\(.*?\))/g).map((segment, i) => {
                  const match = segment.match(/\[(.*?)\]\((.*?)\)/);
                  return match ? (
                    <a
                      key={i}
                      href={match[2]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-pink-400 underline underline-offset-2 transition-colors"
                    >
                      {match[1]}
                    </a>
                  ) : (
                    segment
                  );
                })}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center uppercase tracking-wider text-gray-400`}
        >
          Milestones and Recognitions
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400`}
        >
          Achievements & Contributions
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col items-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 opacity-30"></div>
        <div className="w-full md:w-5/6 lg:w-4/6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Achievements, "achievements");
