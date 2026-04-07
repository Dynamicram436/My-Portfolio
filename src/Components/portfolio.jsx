import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../Images/Bram8.jpg";
import profile2 from "../Images/Bharagavram.jpeg";
import carmechanics from "../Images/hindustan-mechanics.png";
import diamondpublicschool from "../Images/diamondpublicschool.png";
import ssplusit from "../Images/ssplusit.png";
import ecommerce from "../Images/eccommerce.png";
import Resume from "../pdf/Gvs.Bhargavram Front_End_Developer Resume  1.10 years.pdf";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import redux from "../Images/redux-icon.webp";
import zustandimg from "../Images/zustandimg.webp";
import Nextjsimg from "../Images/Next.js.png";
import Nodejsimg from "../Images/Nodejs.png";
import Expressjsimg from "../Images/Express js.png";
import MongoDBimg from "../Images/MongoDB.png";
import Taskflowimg from "../Images/Taskflow.png";
import SplitText from "../Animations/spilttext.jsx";
import Tailwindcssimg from "../Images/tailwindcss.png";
import CSSimg from "../Images/css.png";
import Finance from "../Images/Finance.png";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const experience = [
  {
    title: "Frontend Developer",
    company: "MB IT SOLUTIONS PVT LTD",
    location: "Guntur",
    duration: "Nov 2023 - Apr 2025",
    description: "Built 3+ projects using React JS, Redux, Tailwind CSS, and Zustand",
    tech: ["React JS", "Redux", "Tailwind CSS", "Zustand"],
  },
  {
    title: "Frontend Developer",
    company: "VIKRASSOFTECH",
    location: "Vijayawada",
    duration: "Sep 2025 - Nov 2025",
    description: "Built dashboard for retail and customers using React JS, Zustand, and Recharts",
    tech: ["React JS", "Zustand", "Recharts"],
  },
  {
    title: "MERN Stack Developer",
    company: "Malineni Lakshmaiah Engg College",
    location: "Prathipadu",
    duration: "Dec 2025 - Apr 2026",
    description: "Built LMS platform for students",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const skills = [
  { name: "HTML5", icon: "html", color: "#E44D26" },
  { name: "CSS3", icon: CSSimg, type: "img", color: "#1572B6" },
  { name: "Tailwind", icon: Tailwindcssimg, type: "img", color: "#38BDF8" },
  { name: "JavaScript", icon: "js", color: "#F0DB4F" },
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Firebase", icon: "firebase", color: "#FFA000" },
  { name: "Redux Toolkit", icon: redux, type: "img", color: "#764ABC" },
  { name: "Zustand", icon: zustandimg, type: "img", color: "#8B5CF6" },
  { name: "Next.js", icon: Nextjsimg, type: "img", color: "#FFFFFF" },
  { name: "Node.js", icon: Nodejsimg, type: "img", color: "#339933" },
  { name: "Express.js", icon: Expressjsimg, type: "img", color: "#FFFFFF" },
  { name: "MongoDB", icon: MongoDBimg, type: "img", color: "#47A248" },
];

const projects = [
  {
    title: "Hindustan Car Mechanics",
    image: carmechanics,
    link: "https://hindustancarmechanics.netlify.app",
    description:
      "Professional automotive service platform featuring modern design and responsive layouts.",
    tech: ["React.js", "Tailwind CSS"],
    features: ["Responsive Design", "Modern UI/UX", "Fast Performance"],
    category: "Web App",
  },
  {
    title: "SS Plus IT Education",
    image: ssplusit,
    link: "https://education-beta-ten.vercel.app",
    description:
      "Interactive educational platform designed for modern learning experiences.",
    tech: ["React.js", "CSS3"],
    features: ["Interactive Learning", "Course Management", "Student Portal"],
    category: "Education",
  },
  {
    title: "Diamond Public School",
    image: diamondpublicschool,
    link: "https://diamondpublicschool.vercel.app",
    description:
      "Comprehensive educational institution website with elegant design and user-friendly navigation.",
    tech: ["HTML/CSS", "JavaScript", "jQuery"],
    features: ["School Management", "Information Portal", "Classic Design"],
    category: "Education",
  },
  {
    title: "E-commerce Platform",
    image: ecommerce,
    link: "https://medium-eccommerce.netlify.app",
    description:
      "Full-stack e-commerce solution with advanced state management and payment integration.",
    tech: ["React.js", "Redux Toolkit", "Zustand"],
    features: ["Shopping Cart", "State Management", "Payment Integration"],
    category: "E-Commerce",
  },
  {
    title: "Task-Flow Project",
    image: Taskflowimg,
    link: "https://nextjstaskflow.netlify.app/Dashboard/dashboard",
    description:
      "Task management application with dashboard, authentication, and state management.",
    tech: ["Next.js", "Node.js", "Zustand"],
    features: ["Dashboard", "State Management", "Authentication"],
    category: "Productivity",
  },
  {
    title: "Finance Dashboard",
    image: Finance,
    link: "https://finance-dashboard-ten-brown.vercel.app/",
    description:
      "Comprehensive financial dashboard with data visualization and analytics tools.",
    tech: ["React.js", "Chart.js", "Zustand"],
    features: ["Data Visualization", "Analytics", "Financial Tools"],
    category: "Finance",
  },
];

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 50,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(
          section === "home" ? "" : section,
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    setTimeout(() => setIsLoading(false), 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = href === "#" ? document.body : document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const SkillIcon = ({ skill }) => {
    if (skill.type === "img") {
      return (
        <img
          src={skill.icon}
          className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 object-contain drop-shadow-lg"
          alt={skill.name}
        />
      );
    }

    const icons = {
      html: (
        <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 drop-shadow-lg">
          <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z" />
          <path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z" />
          <path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z" />
          <path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.270-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z" />
        </svg>
      ),
      js: (
        <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 drop-shadow-lg">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
        </svg>
      ),
      react: (
        <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 drop-shadow-lg">
          <g fill="#61DAFB">
            <circle cx="64" cy="47.5" r="9.3" />
            <path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.5-8.7 1.2-13.4 2.1-.8-1.9-1.3-3.8-1.6-5.7-1.4-8.5-.3-14.6 3-16.6z" />
          </g>
        </svg>
      ),
      firebase: (
        <svg viewBox="0 0 128 128" className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 drop-shadow-lg">
          <path fill="#ffa000" d="M30.916 72.85 42.029 1.736a2.053 2.053 0 0 1 3.838-.652L57.36 22.521l4.581-8.723a2.053 2.053 0 0 1 3.633 0L96.592 72.85Z" />
          <path fill="#f57c00" d="M69.31 45.148 57.356 22.51l-26.44 50.34Z" />
          <path fill="#ffca28" d="m96.592 72.85-8.513-52.674a2.055 2.055 0 0 0-1.399-1.613 2.05 2.05 0 0 0-2.074.504L30.916 72.85l29.708 16.66a6.157 6.157 0 0 0 6.003 0z" />
        </svg>
      ),
    };

    return icons[skill.icon] || null;
  };

  const ProjectCard = ({ project }) => {
    return (
      <div
        className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:-translate-y-2 h-full flex flex-col"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative overflow-hidden h-48 sm:h-56 md:h-60 lg:h-64 flex-shrink-0">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="px-3 py-1 bg-violet-500/20 backdrop-blur-md text-violet-300 text-xs font-semibold rounded-full border border-violet-500/30">
                {project.category}
              </span>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="p-2.5 sm:p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-grow relative">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            {project.features.map((feature, i) => (
              <span key={i} className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {feature}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full group/btn relative overflow-hidden bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] text-center text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>View Live Site</span>
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-transparent border-t-violet-500 border-r-cyan-500 rounded-full animate-spin" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-pink-500 border-l-violet-500 rounded-full animate-spin animation-delay-150" />
          </div>
          <p className="text-slate-400 text-lg font-medium mt-6">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-x-hidden text-slate-100">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/15 rounded-full blur-[128px] animate-pulse animation-delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] bg-pink-600/15 rounded-full blur-[128px] animate-pulse animation-delay-2000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Custom Cursor */}
      <div
        className="fixed w-5 h-5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen transition-all duration-100 ease-out shadow-[0_0_20px_rgba(139,92,246,0.6)] hidden md:block"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isScrolled ? 0.7 : 1})`,
        }}
      />

      {/* Header */}
      <header
        className={`fixed w-full top-0 left-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center items-center gap-2 sm:gap-6 lg:gap-10">
            {menuItems.map((item, index) => (
              <li key={item.name} data-aos="fade-down" data-aos-delay={index * 100}>
                <a
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-violet-400 group py-2 px-3 rounded-lg ${
                    activeSection === (item.href === "#" ? "home" : item.href.slice(1))
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-slate-400 hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <img
                  data-aos="zoom-in-up"
                  src={profile}
                  alt="Bhargav Ram"
                  className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-slate-800 shadow-[0_0_60px_rgba(139,92,246,0.3)] transform hover:scale-105 transition-all duration-500 mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-lg sm:text-xl">👋</span>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <SplitText
                    text="Hi, I'm Bhargav Ram"
                    className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
                    delay={80}
                    duration={0.5}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 30 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </h1>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                  <span className="text-lg sm:text-xl lg:text-2xl text-cyan-400 font-medium">
                    Frontend Developer
                  </span>
                  <div className="h-px w-12 bg-gradient-to-l from-cyan-500 to-transparent" />
                </div>

                <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  I specialize in creating modern, responsive, and user-friendly web applications 
                  that bring ideas to life with cutting-edge technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href={Resume}
                    download="BhargavRam_Resume.pdf"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 rounded-full overflow-hidden shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download CV
                    </span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-slate-300 border-2 border-slate-700 rounded-full hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                  {[
                    { icon: "github", href: "#" },
                    { icon: "linkedin", href: "#" },
                    { icon: "twitter", href: "#" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        {social.icon === "github" && (
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        )}
                        {social.icon === "linkedin" && (
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        )}
                        {social.icon === "twitter" && (
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center lg:justify-end" data-aos="fade-left">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
                <DotLottieReact
                  className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px] rounded-3xl"
                  src="https://lottie.host/e2478295-dc38-491e-999e-d856243072a3/UAcUeuyIcv.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-violet-500/10 text-violet-400 text-sm font-medium rounded-full border border-violet-500/20 mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Know Who <span className="text-cyan-400">I Am</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative group order-2 lg:order-1" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <img
                src={profile2}
                alt="Bhargav Ram"
                className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover rounded-3xl shadow-2xl shadow-violet-500/10 border border-slate-800"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                I'm a passionate <span className="text-violet-400 font-semibold">Front-End Web Developer</span> with 
                <span className="text-cyan-400 font-semibold"> 1.5 years</span> of hands-on experience developing web applications 
                with modern technologies.
              </p>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                I am strongly interested in learning new technologies and implementing them in my projects. 
                I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                {[
                  { number: "1.5+", label: "Years Experience" },
                  { number: "6+", label: "Projects Completed" },
                  { number: "12+", label: "Technologies" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </h4>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 lg:py-32 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/20 mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical <span className="text-violet-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <SkillIcon skill={skill} />
                <h3 className="text-slate-300 font-medium text-center text-sm sm:text-base group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 lg:py-32 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full border border-amber-500/20 mb-4">
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-violet-500 md:-translate-x-1/2 hidden sm:block" />

            {experience.map((job, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full border-4 border-slate-950 md:-translate-x-1/2 z-10 hidden sm:block" />

                <div className={`sm:pl-12 ${index % 2 === 0 ? "md:pr-12 md:pl-0" : "md:pl-12"}`}>
                  <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-violet-500/20 backdrop-blur-md text-violet-300 text-xs font-semibold rounded-full border border-violet-500/30">
                          {job.duration}
                        </span>
                        <span className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-full border border-slate-700/50">
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                        {job.title}
                      </h3>

                      <p className="text-cyan-400 font-semibold mb-4">
                        {job.company}
                      </p>

                      <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 lg:py-32 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-400 text-sm font-medium rounded-full border border-pink-500/20 mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
            <p className="text-slate-400 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
              Discover my latest work showcasing modern web development, innovative design, and cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-24 lg:py-32 relative border-t border-slate-800/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-1.5 bg-violet-500/10 text-violet-400 text-sm font-medium rounded-full border border-violet-500/20 mb-4">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-aos="fade-up">
            {/* Services */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Services
              </h3>
              <div className="space-y-3">
                {["Frontend Development", "Responsive Design", "React Applications"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technologies
              </h3>
              <div className="space-y-3">
                {["HTML & CSS", "JavaScript & React", "Tailwind CSS"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h3>
              <div className="space-y-3">
                <a href="tel:+919014488793" className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (+91) 9014488793
                </a>
                <a href="mailto:bhargavramgomatham@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm break-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  bhargavramgomatham@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Connect
              </h3>
              <p className="text-slate-400 text-sm mb-4">Let's collaborate and create something amazing together!</p>
              <a
                href="mailto:bhargavramgomatham@gmail.com"
                className="w-full px-4 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 text-sm text-center block"
              >
                Send Message
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/50 text-center">
            <p className="text-slate-500 text-sm">
              © 2024 Bhargav Ram. All rights reserved. Built with ❤️ using React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
