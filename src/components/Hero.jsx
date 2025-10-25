import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaStackOverflow, FaTelegram, FaEnvelope } from "react-icons/fa";
import HeroImg from "../assets/hero_sticker.png";
import "./Hero.css";

const Hero = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(".typed-text", {
      strings: [
        "Front-End Developer",
        "Researcher",
        "Innovator",
        "Software Developer",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // ✨ Hover glow logic
  useEffect(() => {
    const section = sectionRef.current;

    const createGlow = (x, y) => {
      const glow = document.createElement("div");
      glow.classList.add("glow-spot");

      // random hue for playfulness
      const hue = Math.floor(Math.random() * 360);
      glow.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 70%) 0%, transparent 70%)`;

      glow.style.left = `${x - 60}px`;
      glow.style.top = `${y - 60}px`;

      section.appendChild(glow);

      setTimeout(() => glow.remove(), 1500);
    };

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createGlow(x, y);
    };

    section.addEventListener("mousemove", handleMove);
    return () => section.removeEventListener("mousemove", handleMove);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-20 bg-gradient-to-br from-[#0b032d] via-[#12024f] to-[#1f003d] overflow-hidden"
    >
      {/* ===== Gradient Blobs ===== */}
       <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px] gradient-blob" />
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px] gradient-blob delay-700" />

      {/* ===== Avatar Section ===== */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-20"
      > 
         <div className="relative group"> 
          <img
            src={HeroImg}
            alt="Dhvani avatar"
            className="w-[350px] h-[450px] p-12 rounded-full border-4 border-[#915eff]/50 shadow-[0_0_40px_rgba(145,94,255,0.4)] transition-transform duration-300 group-hover:scale-105"
          /> 
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915eff]/30 to-[#a583ff]/30 blur-[60px] -z-10" />
        </div>
      </motion.div>


      {/* ===== Glass Box with Text ===== */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-box h-[60%] w-[60%] lg:mt-[60px] md:mt-0 md:ml-16 md:p-12 rounded-2xl z-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_60px_rgba(145,94,255,0.2)]"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-[#915eff] to-[#b59dff] text-transparent bg-clip-text">
          Hi, I'm Dhvani
        </h1>

        {/* Typed.js animation */}
        <span className="typed-text text-gray-300 text-2xl font-semibold mb-6 inline-block min-h-[40px]" />

        {/* Buttons */}
        <div className="flex gap-5 mt-4">
          <a
            href="#projects"
            className="px-5 py-2 bg-[#915eff] text-white font-semibold rounded-xl shadow-lg hover:bg-[#7b4fff] transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-[#915eff] text-[#915eff] font-semibold rounded-xl hover:bg-[#915eff]/10 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-start gap-5 mt-8 text-4xl text-gray-300">
          <a
            href="https://github.com/Dhvani365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfd9ff] transition-transform hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dhvani-maktuporia-326565222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfd9ff] transition-transform hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dfd9ff] transition-transform hover:-translate-y-1"
          >
            <FaTelegram />
          </a>
          <a
            href="mailto:dhvani.sde@gmail.com"
            className="hover:text-[#dfd9ff] transition-transform hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://stackexchange.com/users/44375257/dhvani-maktuporia"
            className="hover:text-[#dfd9ff] transition-transform hover:-translate-y-1"
          >
            <FaStackOverflow />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
