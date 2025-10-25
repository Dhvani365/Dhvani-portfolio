import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope, FaStackOverflow } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="relative contact-info-section py-16 px-6 sm:px-12 overflow-hidden">
      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20 blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Contact Information
        </h2>
        <p className="text-gray-300 mb-6">
          You can reach me via email or connect on social media platforms.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl sm:text-4xl mb-6 text-gray-300">
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

        {/* Email */}
        <p className="text-gray-400">Email: dhvani.sde@gmail.com</p>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-white/10 pt-4 relative z-10">
        © {new Date().getFullYear()} Dhvani Maktuporia. All Rights Reserved.
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
