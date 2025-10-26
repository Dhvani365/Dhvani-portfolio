import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Works.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile,
}) => {
  const Wrapper = isMobile ? "div" : motion.div;

  return (
    <Wrapper
      {...(!isMobile && { })}
      className="w-full"
      style={isMobile ? { opacity: 1, transform: "none" } : {}}
    >
      <Tilt
        options={{
          max: isMobile ? 0 : 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full card-style'
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </Wrapper>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Wrapper = isMobile ? "div" : motion.div;

  return (
    <>
      {/* Main animation container — ensures visibility on all screen sizes */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Wrapper
          {...(!isMobile && { variants: textVariant() })}
          className="project-title"
          id="projects"
          style={isMobile ? { opacity: 1, transform: "none" } : {}}
        >
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </Wrapper>

        <div className="w-full flex project-desc">
          <Wrapper
            {...(!isMobile && { variants: fadeIn("", "", 0.1, 1) })}
            style={isMobile ? { opacity: 1, transform: "none" } : {}}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through real-world
            examples of my work. Each project is briefly described with links to
            code repositories and live demos. It reflects my ability to solve complex
            problems, work with different technologies, and manage projects effectively.
          </Wrapper>
        </div>

        <div
          className="
            mt-20 
            grid 
            gap-7 
            project-cards
            grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-3
            justify-items-center
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              isMobile={isMobile}
            />
          ))}
        </div>

      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
