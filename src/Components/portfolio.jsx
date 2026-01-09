import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../Images/Bram8.jpg";
import profile2 from "../Images/Bharagavram.jpeg";
import carmechanics from "../Images/hindustan-mechanics.png";
import diamondpublicschool from "../Images/diamondpublicschool.png";
import ssplusit from "../Images/ssplusit.png";
import ecommerce from "../Images/eccommerce.png";
import Resume from "../pdf/Bhargavram-FrontEndDeveloper-Resume-Nov.pdf";
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
import CSSimg from "../Images/css.png"

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  { name: "HTML5", icon: "html", color: "orange" },
  { name: "CSS3", icon: CSSimg, type: "img", color: "blue" },
  { name: "Tailwind", icon: Tailwindcssimg, type: "img", color: "teal" },
  { name: "JavaScript", icon: "js", color: "yellow" },
  { name: "React", icon: "react", color: "cyan" },
  { name: "Firebase", icon: "firebase", color: "amber" },
  { name: "Redux Toolkit", icon: redux, type: "img", color: "purple" },
  { name: "Zustand", icon: zustandimg, type: "img", color: "indigo" },
  { name: "Next.js", icon: Nextjsimg, type: "img", color: "gray" },
  { name: "Node.js", icon: Nodejsimg, type: "img", color: "emerald" },
  { name: "Express.js", icon: Expressjsimg, type: "img", color: "slate" },
  { name: "MongoDB", icon: MongoDBimg, type: "img", color: "green" },
];

const projects = [
  {
    title: "Hindustan Car Mechanics",
    image: carmechanics,
    link: "https://hindustancarmechanics.netlify.app",
    description: "Professional automotive service platform featuring modern design and responsive layouts.",
    tech: ["⚛️ React.js", "🎨 Tailwind CSS"],
    features: ["Responsive Design", "Modern UI/UX", "Fast Performance"],
    color: "emerald"
  },
  {
    title: "SS Plus IT Education",
    image: ssplusit,
    link: "https://education-beta-ten.vercel.app",
    description: "Interactive educational platform designed for modern learning experiences.",
    tech: ["⚛️ React.js", "💫 CSS3"],
    features: ["Interactive Learning", "Course Management", "Student Portal"],
    color: "blue"
  },
  {
    title: "Diamond Public School",
    image: diamondpublicschool,
    link: "https://diamondpublicschool.vercel.app",
    description: "Comprehensive educational institution website with elegant design and user-friendly navigation.",
    tech: ["🌐 HTML/CSS", "⚡ JavaScript", "📦 jQuery"],
    features: ["School Management", "Information Portal", "Classic Design"],
    color: "green",
    dark: true
  },
  {
    title: "E-commerce Platform",
    image: ecommerce,
    link: "https://medium-eccommerce.netlify.app",
    description: "Full-stack e-commerce solution with advanced state management and payment integration.",
    tech: ["⚛️ React.js", "🔧 Redux Toolkit", "📦 Zustand"],
    features: ["Shopping Cart", "State Management", "Payment Integration"],
    color: "pink",
    dark: true
  },
  {
    title: "Task-Flow Project",
    image: Taskflowimg,
    link: "https://nextjstaskflow.netlify.app/Dashboard/dashboard",
    description: "Task management application with dashboard, authentication, and state management.",
    tech: ["Next.Js", "🔧 Node.Js", "📦 Zustand"],
    features: ["Dashboard", "State Management", "Authentication"],
    color: "pink",
    dark: true
  }
];

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true, mirror: false, offset: 100, delay: 0 });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section === "home" ? "" : section);
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
    setTimeout(() => setIsLoading(false), 2000);

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
      return <img src={skill.icon} className="w-12 h-12 mx-auto mb-3" alt={skill.name} />;
    }
    
    const icons = {
      html: <svg viewBox="0 0 128 128" className="w-12 h-12 mx-auto mb-3"><path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"/><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"/><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"/><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.270-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"/></svg>,
      css: <svg viewBox="0 0 128 128" className="w-12 h-12 mx-auto mb-3"><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"/><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"/><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"/></svg>,
      js: <svg viewBox="0 0 128 128" className="w-12 h-12 mx-auto mb-3"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>,
      react: <svg viewBox="0 0 128 128" className="w-12 h-12 mx-auto mb-3"><g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"/><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-4.5 6.7-9.4 17.9-12.6 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.5-4.9 12.6-1.8-.5-3.6-1.1-5.2-1.7zm8 28.2c-1.1 0-2-.2-2.9-.7-3.3-1.9-4.5-7.9-3.1-16.5.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10z"/></g></svg>,
      firebase: <svg viewBox="0 0 128 128" className="w-12 h-12 mx-auto mb-3"><path fill="#ffa000" d="M30.916 72.85 42.029 1.736a2.053 2.053 0 0 1 3.838-.652L57.36 22.521l4.581-8.723a2.053 2.053 0 0 1 3.633 0L96.592 72.85Z"/><path fill="#f57c00" d="M69.31 45.148 57.356 22.51l-26.44 50.34Z"/><path fill="#ffca28" d="m96.592 72.85-8.513-52.674a2.055 2.055 0 0 0-1.399-1.613 2.05 2.05 0 0 0-2.074.504L30.916 72.85l29.708 16.66a6.157 6.157 0 0 0 6.003 0z"/></svg>
    };
    
    return icons[skill.icon] || null;
  };

  const ProjectCard = ({ project }) => {
    const baseClasses = "group relative bg-gradient-to-br backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-700 hover:border-opacity-50 hover:shadow-2xl hover:-translate-y-2";
    const colorClasses = {
      emerald: "from-white/80 to-emerald-50/80 border-emerald-200/50 hover:border-emerald-400/50 hover:shadow-emerald-500/20",
      blue: "from-white/70 to-blue-50/70 border-blue-200/50 hover:border-blue-400/50 hover:shadow-blue-500/20",
      green: "from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-green-500/50 hover:shadow-green-500/20",
      pink: "from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-pink-500/50 hover:shadow-pink-500/20"
    };

    return (
      <div className={baseClasses + " " + colorClasses[project.color]}>
        <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          project.color === "emerald" ? "from-emerald-500/5 to-amber-500/5" :
          project.color === "blue" ? "from-blue-500/5 to-cyan-500/5" :
          project.color === "green" ? "from-green-500/5 to-teal-500/5" :
          "from-pink-500/5 to-red-500/5"
        }`}></div>

        <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 group-hover:transition-colors duration-300 ${
              project.dark ? "text-white group-hover:text-green-300" : "text-gray-800 group-hover:text-emerald-600"
            }`}>
              {project.title}
            </h3>
            <p className={`${project.dark ? "text-gray-300" : "text-gray-600"} text-base sm:text-lg leading-relaxed`}>
              {project.description}
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 text-sm">
              {project.features.map((feature, i) => (
                <span key={i} className="flex items-center gap-1 text-gray-400">
                  <div className={`w-2 h-2 bg-${project.color === "emerald" ? "emerald" : project.color === "blue" ? "blue" : project.color === "green" ? "green" : "pink"}-500 rounded-full`}></div>
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 group/btn relative overflow-hidden bg-gradient-to-r text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 text-center ${
                project.color === "emerald" ? "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25" :
                project.color === "blue" ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:shadow-blue-500/25" :
                project.color === "green" ? "from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 hover:shadow-green-500/25" :
                "from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 hover:shadow-pink-500/25"
              }`}
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
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-r-indigo-500 rounded-full animate-spin mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-purple-400 border-l-pink-400 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <p className="text-gray-700 text-xl font-light">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 min-h-screen relative overflow-x-hidden text-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/5 left-1/6 w-64 h-64 bg-emerald-500/40 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-amber-500/40 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-500/40 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full pointer-events-none z-50 mix-blend-multiply transition-all duration-150 ease-out shadow-[0_0_25px_rgba(16,185,129,0.5)]"
        style={{ left: mousePosition.x - 12, top: mousePosition.y - 12, transform: `scale(${isScrolled ? 0.8 : 1})` }}
      ></div>

      {/* Header */}
      <header className={`fixed w-full top-0 left-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-amber-50/80 backdrop-blur-xl border-b border-emerald-500/20 py-4 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-transparent py-6"
      }`}>
        <nav className="container mx-auto px-4 sm:px-6">
          <ul className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <li key={item.name} data-aos="fade-down" data-aos-delay={index * 100}>
                <a
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-emerald-600 group ${
                    activeSection === (item.href === "#" ? "home" : item.href.slice(1)) ? "text-emerald-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/60 backdrop-blur-2xl border border-emerald-500/10 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.8)] rounded-3xl p-6 sm:p-10">
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  data-aos="zoom-in-up"
                  src={profile}
                  alt="Bhargav Ram"
                  className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover border-4 border-white shadow-2xl shadow-emerald-500/30 transform hover:scale-105 transition-all duration-500 hover:rotate-3 mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">👋</span>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <SplitText
                    text="Hi, I'm Bhargav Ram"
                    className="bg-gradient-to-r from-emerald-600 via-amber-600 to-rose-600 bg-clip-text text-transparent"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                  />
                </h1>

                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light">
                  <span className="typing-animation">Frontend Developer</span>
                </div>

                <p className="text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  I specialize in creating modern, responsive, and user-friendly web applications that bring ideas to life with cutting-edge technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href={Resume}
                    download="BhargavRam_Resume.pdf"
                    className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-600 rounded-full overflow-hidden shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download CV
                    </span>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-emerald-600 border-2 border-emerald-500 rounded-full hover:bg-emerald-500/90 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-md lg:max-w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                <DotLottieReact
                  className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] xl:h-[500px] rounded-3xl shadow-2xl"
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
      <section className="py-16 lg:py-20 relative bg-gradient-to-b from-amber-50 via-orange-50 to-red-50" id="about">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white/70 border border-emerald-500/10 rounded-3xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.8)] p-6 sm:p-10">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                data-aos="flip-left"
                src={profile2}
                alt="Bhargav Ram"
                className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[400px] xl:w-[500px] object-fill rounded-3xl shadow-2xl shadow-emerald-500/30 transform group-hover:scale-105 transition-all duration-500 mx-auto"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="prose prose-lg text-gray-700">
                <p
                  data-aos="fade-left"
                  className="text-lg sm:text-xl leading-relaxed first-letter:text-4xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-emerald-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                >
                  I'm a passionate Front-End Web Developer with 1.5 years of hands-on experience developing web applications with HTML, CSS, Tailwind CSS, JavaScript, and React JS technologies.
                </p>
                <p data-aos="fade-right" className="text-base sm:text-lg leading-relaxed mt-4 text-gray-600">
                  I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-8">
                <div data-aos="fade-up" className="bg-emerald-50/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-sm shadow-emerald-500/10">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">1.5</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
                </div>
                <div data-aos="fade-down" className="bg-amber-50/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-sm shadow-amber-500/10">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">4 +</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 lg:py-20 relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50" id="skills">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My <span className="bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 bg-white/60 border border-emerald-500/10 rounded-3xl p-4 sm:p-6 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.8)]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative bg-${skill.color}-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-${skill.color}-200/50 hover:border-${skill.color}-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-${skill.color}-500/25`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}-500/10 to-${skill.color === "orange" ? "red" : skill.color === "blue" ? "cyan" : skill.color === "yellow" ? "orange" : skill.color}-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <SkillIcon skill={skill} />
                <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50 to-red-50" id="projects">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-emerald-600 to-amber-600 mb-6 tracking-tight">
                Featured
                <span className="block bg-gradient-to-r from-emerald-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 mx-auto rounded-full shadow-lg shadow-emerald-500/40"></div>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
              Discover my latest work showcasing modern web development, innovative design, and cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-16 lg:py-20 relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50" id="contact">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 bg-white/70 border border-emerald-500/10 rounded-3xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.8)] p-6 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Services
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Frontend Web Development
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  Responsive Web Design
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                  React Applications
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technologies
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  HTML & CSS
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  JavaScript & React JS
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Tailwind CSS
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <a href="tel:+919014488793" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300 group text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (+91) 9014488793
                </a>
                <a href="mailto:bhargavramgomatham@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-amber-600 transition-colors duration-300 group text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  bhargavramgomatham@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h5v-5H4v5zM13 13h5l-5 5v-5zM4 13h5V8H4v5zm6-5h5l-5 5V8z" />
                </svg>
                Connect
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-600 text-xs sm:text-sm">Let's collaborate and create something amazing together!</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/70 border border-emerald-500/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-amber-500 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 text-sm sm:text-base"
                  >
                    Get In Touch
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-emerald-500/20 text-center">
            <p className="text-gray-600 text-sm sm:text-base">© 2024 Bhargav Ram. All rights reserved. Built with ❤️ and React.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;


