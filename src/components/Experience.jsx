import React, { useRef, useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useAnimation, useInView } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <VerticalTimelineElement
        contentStyle={{
          background:
            "linear-gradient(135deg, rgba(30,27,75,0.95) 0%, rgba(40,40,60,0.95) 100%)",
          boxShadow: "0 6px 25px rgba(0, 0, 0, 0.4)",
          borderRadius: "18px",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "20px 25px",
          marginBottom: "60px",
          color: "#fff",
        }}
        contentArrowStyle={{ display: "none" }}
        position="right"
        date={
          <span className="text-sm font-semibold text-indigo-300">
            {experience.date}
          </span>
        }
        iconStyle={{
          background: `linear-gradient(135deg, ${experience.iconBg}, #7C3AED)`,
          boxShadow: "0 0 20px rgba(125, 95, 255, 0.3)",
        }}
        icon={
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex justify-center items-center w-full h-full"
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[65%] h-[65%] object-contain rounded-full"
            />
          </motion.div>
        }
      >
        <div>
          <h3 className="text-white text-[22px] font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400">
            {experience.title}
          </h3>
          <p className="text-gray-300 text-[15px] font-medium">
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-4 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={`experience-point-${i}`}
              className="text-gray-200 text-[14px] leading-relaxed hover:text-indigo-300 transition-colors duration-200"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  // Line color fill on scroll effect
  const timelineRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleHeight = Math.min(
        windowHeight,
        Math.max(0, windowHeight - rect.top)
      );
      const totalHeight = rect.height + windowHeight;
      const percent = Math.min(1, visibleHeight / totalHeight);
      setScrollPercent(percent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineStyle = {
    background: `linear-gradient(to bottom, #9865f7ff ${scrollPercent * 100}%, rgba(255,255,255,0.15) ${scrollPercent * 100}%)`,
    transition: "background 0.2s ease-out",
    width: "4px",
    borderRadius: "2px",
  };

  return (
    <>
      <div variants={textVariant()} id="portfolio" className="mt-16">
        <p
          className={`${styles.sectionSubText} text-center uppercase tracking-wider text-gray-400`}
        >
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400`}
        >
          Work Experience & Highlighted Projects
        </h2>
      </div>

      <motion.div
        ref={timelineRef}
        className="mt-20 flex flex-col items-end pr-[8%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.25 }}
      >
        <VerticalTimeline
          lineColor="transparent"
          layout="1-column-right"
          className="w-[90%]"
        >
          {/* Custom animated line */}
          <div
            className="absolute left-[calc(100%-2px)] top-0 bottom-0 z-0"
            style={lineStyle}
          ></div>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
