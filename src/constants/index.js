import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
  } from "../assets";
  
  import logo from "../assets/logo.png";
  import logo3 from "../assets/logo3.png";
  import logo4 from "../assets/logo4.jpeg";  
  import logo5 from "../assets/logo5.png";
  import logo6 from "../assets/logo6.jpeg";
  import logo7 from "../assets/logo7.png";
  import logo8 from "../assets/logo8.png";
  import project1 from "../assets/Project1.png";
  import project2 from "../assets/Project2.jpeg";
  import project3 from "../assets/Project3.jpeg";
  import project4 from "../assets/Project4.jpeg";
  import project5 from "../assets/Project5.png";
  import project6 from "../assets/project6.png";
  import project7 from "../assets/project7.png";
  import project8 from "../assets/project8.jpeg";
  import project9 from "../assets/project9.png";

  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
       id: "portfolio",
       title: "Portfolio",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const achievements = [
    {
      title: "Open Source Contributions",
      organization: "GitHub",
      iconBg: "#383E56",
      date: "2024 - Present",
      description:
        "Contributed to multiple open-source projects by enhancing UI/UX, resolving bugs, and improving documentation across popular repositories.",
      highlights: [
        "🟢 Chakra UI: [PR #10403](https://github.com/chakra-ui/chakra-ui/pull/10403)",
        "🟢 React Hook Form: [Issue #13102 (Closed)](https://github.com/react-hook-form/react-hook-form/issues/13102)",
        "🟢 ShadCN UI: [PR #8538](https://github.com/shadcn-ui/ui/pull/8538)",
        "🟢 Koodo Reader: [PR #1550 (Merged)](https://github.com/koodo-reader/koodo-reader/pull/1550)",
        "🟢 Axios: [PR #7174 (Closed)](https://github.com/axios/axios/pull/7174), [PR #7175 (Merged)](https://github.com/axios/axios/pull/7175)",
        "🟢 WooCommerce: [PR #61593](https://github.com/woocommerce/woocommerce/pull/61593), [Issue #61595](https://github.com/woocommerce/woocommerce/issues/61595)",
      ],
    },
    {
      title: "GlaucoGuard - IOP Monitoring for Glaucoma",
      organization: "Student Startup & Innovation Policy (SSIP)",
      iconBg: "#383E56",
      date: "Jan 2025 - Sep 2025",
      description:
        "SSIP-funded healthcare innovation for non-invasive intraocular pressure (IOP) monitoring to assist early glaucoma detection using AI and IoT-based integration.",
      highlights: [
        "Developed AI-assisted estimation model using physiological and MEMS sensor features.",
        "Designed real-time monitoring dashboard for continuous patient observation.",
        "Recognized under SSIP Funding for innovation in medical technology.",
      ],
    },
    {
      title: "Research Publications",
      organization: "Multiple Conferences & Journals",
      iconBg: "#E6DEDD",
      date: "2023 - 2025",
      description: "Authored and co-authored several research papers in the domains of Blockchain, Healthcare IoT, and Medical Image Processing.",
      highlights: [
        "BQPD - Paper Leakage Prevention via Blockchain",
        "ElderGuardian - Healthcare for Elderly (IoT Solution)",
        "Ultrasound Image Enhancement using ESRGAN",
        "Transformer-driven framework for Mitosis Detection and Classification in Whole Slide Images",
      ],
    }
  ];

  const experiences = [
    {
      title: "Summer Intern",
      company_name: "Physical Research Laboratory (ISRO, DOS)",
      icon: logo7,
      iconBg: "#E6DEDD",
      date: "May 2025 - July 2025",
      points: [
        "Worked on control algorithm development for embedded systems and automation.",
        "Developed and simulated models using MATLAB and Simulink for system control validation.",
        "Utilized Verilog for FPGA-based implementation and testing of control logic.",
        "Skills: MATLAB, Simulink, FPGA, Verilog, Control Systems.",
      ],
    },
    {
      title: "Web Master | Graphics Team",
      company_name: "IEEE SCET",
      icon: logo8,
      iconBg: "#383E56",
      date: "May 2025 - Present",
      points: [
        "Developing the official SAMPARK 2025 Event and IEEE SCET Student Branch websites.",
        "Collaborating with graphic designers and event coordinators to create engaging and user-friendly web interfaces.",
        "Ensuring cross-browser compatibility and responsive layouts for all devices.",
      ],
    },
    {
      title: "Software Developer | Industry Project",
      company_name: "Girnar Fashion",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Feb 2025 - Apr 2025",
      points: [
        "Developed and deployed a custom billing and admin panel software for a textile enterprise.",
        "Improved bill generation speed by 90% and optimized backend database queries.",
        "Skills: ReactJS, Node.js, Express.js, MongoDB, TailwindCSS, ShadCN UI.",
      ],
    },
    {
      title: "Full Stack Intern",
      company_name: "Sattvabit",
      icon: logo5,
      iconBg: "#383E56",
      date: "Nov 2024 - Jan 2025",
      points: [
        "Enhanced existing web application features using Next.js and Nest.js.",
        "Fixed critical bugs and improved SEO performance of deployed products.",
        "Collaborated with team members to improve product stability and maintainability.",
        "Skills: ReactJS, Next.js, Nest.js, SEO Optimization, Problem Solving.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "GirlScript Summer of Code (GSSoC)",
      icon: logo6,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Nov 2024",
      points: [
        "Contributed to multiple open-source projects by resolving UI/UX issues.",
        "Enhanced website responsiveness and accessibility for diverse screen sizes.",
        "Skills: HTML, CSS, JavaScript, ReactJS, GitHub, Responsive Design.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "GrapplTech",
      icon: logo4,
      iconBg: "#383E56",
      date: "June 2024 - July 2024",
      points: [
        "Developed and optimized the front-end of web applications using ReactJS.",
        "Enhanced UI performance and user engagement by improving responsiveness and loading time.",
        "Skills: ReactJS, TailwindCSS, Documentation, UI Optimization.",
      ],
    },
    {
      title: "Odoo Hackathon 2022",
      company_name: "Odoo",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Aug 2025 - Aug 2025",
      points:[
        "Developed Quora Clone: A dynamic question-answer platform."
      ]
    },
    {
      title: "SSIP Hackathon 2022 Project",
      company_name: "Gujarat Police",
      icon: logo3,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Developed 'Pratibhav' — a QR Code-based Citizen Feedback System.",
        "Designed and deployed a dynamic website integrated with MySQL database and SMTP-based OTP verification.",
        "Skills: HTML, CSS, PHP, Bootstrap, JavaScript, MySQL.",
      ],
    },
  ];

  
  const projects = [
    {
      name: "My Portfolio Website",
      description:
        "As a passionate Computer Engineering student with a keen interest in full-stack development, I designed and developed a comprehensive portfolio website showcasing my educational background, projects, experiences, and skills. This project was aimed at demonstrating both my technical abilities and creative design skills in web development.",
      tags: [
        { name: "React.JS", color: "blue-text-gradient" },
        { name: "Three.JS", color: "green-text-gradient" },
        { name: "Tailwind-CSS", color: "pink-text-gradient" },
      ],
      image: project1,
      source_code_link: "https://dhvani365.github.io/Dhvani-portfolio",
    },
    {
      name: "Tic Tac Toe",
      description:
        "Developed an interactive Tic Tac Toe game using React to demonstrate advanced problem-solving abilities and front-end design skills. Implemented state management to handle game logic, including player turns, win conditions, and draw scenarios. Enabled dynamic game play with real-time updates and immediate feedback for user actions.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "Tailwind CSS", color: "green-text-gradient" },
        { name: "Vite", color: "pink-text-gradient" },
      ],
      image: project4,
      source_code_link: "https://github.com/Dhvani365/React_Projects/tree/main/tictactoe",
    },
    {
      name: "Sudoku Solver",
      description:
        "Developed an advanced Sudoku Solver game using React to showcase problem-solving abilities and logic-building skills. Employed React for a component-based architecture, facilitating a modular and scalable codebase. Designed an intuitive and responsive user interface with CSS, integrated a robust algorithm to solve Sudoku puzzles efficiently.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "Vite", color: "green-text-gradient" },
        { name: "TailwindCSS", color: "pink-text-gradient" },
      ],
      image: project5,
      source_code_link: "https://github.com/Dhvani365/React_Projects/tree/main/sudoku-solver",
    },
    {
      name: "An Ecommerce Shopping Website UI",
      description:
        "Developed UI of shopping ecommerce website using React + ViteJS. Add to Cart Functionality, Creating Custom hooks, Route management using React Router DOM. Implemented state management and various inbuilt hooks of React and developed various re-usable components.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "React-Router-DOM", color: "green-text-gradient" },
        { name: "TailwindCSS", color: "pink-text-gradient" },
      ],
      image: project2,
      source_code_link: "https://github.com/Dhvani365/React_Projects/tree/main/ecommerce-website",
    },
    {
      name: "Pratibhav: QR based Feedback System",
      description:
        "QR code-based citizen feedback system for Gujarat Police developed during SSIP Hackathon 2022. It features OTP generation & verification using JavaScript and SMTP mailer, integrated with MySQL database and admin dashboard for data visualization.",
      tags: [
        { name: "HTML5, CSS3(Bootstrap), Javascript", color: "blue-text-gradient" },
        { name: "PHP", color: "green-text-gradient" },
        { name: "MySQL", color: "pink-text-gradient" },
      ],
      image: project3,
      source_code_link: "https://github.com/Dhvani365/QRBasedFeedbackSystem",
    },
    {
      name: "Admin Panel & Billing System with Redux",
      description:
        "Developed and deployed an admin panel and billing management system for a textile business. Improved invoice generation speed and reliability through optimized Redux state management and efficient MongoDB data operations.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "Redux", color: "green-text-gradient" },
        { name: "MongoDB", color: "pink-text-gradient" },
        { name: "TailwindCSS", color: "orange-text-gradient" },
      ],
      image: project6,
      source_code_link: "https://github.com/Dhvani365/TMC_Billing_System",
    },
    {
      name: "React Task Management System with Chatbox",
      description:
        "Created a dynamic task management system with integrated chat functionality, improving communication and task efficiency by 50%. Implemented CRUD operations and WebSocket-based real-time messaging.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "Redux", color: "green-text-gradient" },
        { name: "MongoDB", color: "pink-text-gradient" },
        { name: "TailwindCSS", color: "orange-text-gradient" },
      ],
      image: project7,
      source_code_link: "https://github.com/Dhvani365/taskmanager_tmc",
    },
    {
      name: "Restaurant Reservation System",
      description:
        "Developed a restaurant reservation platform enabling real-time table booking and management. Improved reservation efficiency by 25% through intuitive UI and streamlined data handling.",
      tags: [
        { name: "ReactJS", color: "blue-text-gradient" },
        { name: "Web Development", color: "green-text-gradient" },
        { name: "Problem Solving", color: "pink-text-gradient" },
      ],
      image: project8,
      source_code_link: "https://github.com/Dhvani365/Restaurant_Reservation",
    },
    {
      name: "Automated Email Alert System",
      description:
        "Built an automated email alert system using Python and Flask that reduced missed deadlines by 30%. Integrated task scheduling and image-based analysis with API-triggered alerts.",
      tags: [
        { name: "Python", color: "blue-text-gradient" },
        { name: "Flask", color: "green-text-gradient" },
        { name: "Automation", color: "pink-text-gradient" },
      ],
      image: project9,
      source_code_link: "https://github.com/MeetJariwala10/Automated-Mail-System",
    },
  ];

  
  export { services, technologies, experiences, projects, achievements };