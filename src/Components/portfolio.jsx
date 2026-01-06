import React, { useState, useEffect } from "react";
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
import Taskflowimg from "../Images/Taskflow.png"

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(
          section === "home" ? "" : section
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

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Smooth scroll function
  const smoothScroll = (e, href) => {
    e.preventDefault();
    const target = href === "#" ? document.body : document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-transparent border-t-blue-500 border-r-indigo-500 rounded-full animate-spin mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-purple-400 border-l-pink-400 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <p className="text-gray-700 text-xl font-light">
            Loading Portfolio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-multiply transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isScrolled ? 0.8 : 1})`,
        }}
      ></div>

      {/* Header */}
      <header
        className={`fixed w-full top-0 left-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <ul className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-blue-600 group ${
                    activeSection ===
                    (item.href === "#" ? "home" : item.href.slice(1))
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-100 rounded-3xl p-6 sm:p-10">
            {/* Bio-Data Section */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fadeInUp">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src={profile}
                  alt="Bhargav Ram"
                  className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-500 hover:rotate-3 mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">
                    👋
                  </span>
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-gray-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Hi, I'm
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Bhargav Ram
                  </span>
                </h1>

                <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light">
                  <span className="typing-animation">Frontend Developer</span>
                </div>

                <p className="text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  I specialize in creating modern, responsive, and user-friendly
                  web applications that bring ideas to life with cutting-edge
                  technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href={Resume}
                    download="BhargavRam_Resume.pdf"
                    className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download CV
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>

                  <a
                    href="#contact"
                    onClick={(e) => smoothScroll(e, "#contact")}
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>

            {/* Animation Section */}
            <div className="flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-md lg:max-w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
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
      <section
        className="py-16 lg:py-20 relative bg-white/60 backdrop-blur-sm"
        id="about"
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white/70 border border-gray-200/60 rounded-3xl shadow-xl shadow-blue-50 p-6 sm:p-10">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src={profile2}
                alt="Bhargav Ram"
                className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[400px] xl:w-[500px] object-fill rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 mx-auto"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="prose prose-lg text-gray-600">
                <p className="text-lg sm:text-xl leading-relaxed first-letter:text-4xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  I'm a passionate Front-End Web Developer with 1.5 years of
                  hands-on experience developing web applications with HTML,
                  CSS, Tailwind CSS, JavaScript, and React JS technologies.
                </p>

                <p className="text-base sm:text-lg leading-relaxed mt-4">
                  I am strongly interested in learning new technologies and
                  implementing them in my projects. I'm a self-motivated and
                  hardworking individual who is always ready to learn new things
                  and work in a team.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 shadow-sm">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    1.5
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Years Experience
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 shadow-sm">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    4 +
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="py-16 lg:py-20 relative bg-gradient-to-r from-blue-50/70 to-purple-50/70"
        id="skills"
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 bg-white/70 border border-gray-200/70 rounded-3xl p-4 sm:p-6 shadow-lg shadow-blue-50">
            {/* HTML */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                viewBox="0 0 128 128"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
              >
                <path
                  fill="#E44D26"
                  d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 118.704l29.244-8.108 6.881-77.076H64z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.270-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
                ></path>
              </svg>
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                HTML5
              </h3>
            </div>

            {/* CSS */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                viewBox="0 0 128 128"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
              >
                <path
                  fill="#1572B6"
                  d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"
                ></path>
                <path
                  fill="#33A9DC"
                  d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"
                ></path>
                <path
                  fill="#fff"
                  d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"
                ></path>
                <path
                  fill="#fff"
                  d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"
                ></path>
              </svg>
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                CSS3
              </h3>
            </div>

            {/* Tailwind */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-teal-200/50 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-teal-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                viewBox="0 0 128 128"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
              >
                <path
                  fill="#38bdf8"
                  d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0"
                ></path>
                <path
                  fill="#fff"
                  d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0"
                ></path>
              </svg>
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Tailwind
              </h3>
            </div>

            {/* JavaScript */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-yellow-200/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                viewBox="0 0 128 128"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
              >
                <path
                  fill="#F0DB4F"
                  d="M1.408 1.408h125.184v125.185H1.408z"
                ></path>
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                ></path>
              </svg>
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                JavaScript
              </h3>
            </div>

            {/* React */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cyan-200/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                viewBox="0 0 128 128"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
              >
                <g fill="#61DAFB">
                  <circle cx="64" cy="47.5" r="9.3"></circle>
                  <path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6z"></path>
                </g>
              </svg>
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                React
              </h3>
            </div>

            {/* Firebase */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                viewBox="0 0 128 128"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
              >
                <path
                  fill="#ffa000"
                  d="M30.916 72.85 42.029 1.736a2.053 2.053 0 0 1 3.838-.652L57.36 22.521l4.581-8.723a2.053 2.053 0 0 1 3.633 0L96.592 72.85Z"
                ></path>
                <path
                  fill="#f57c00"
                  d="M69.31 45.148 57.356 22.51l-26.44 50.34Z"
                ></path>
                <path
                  fill="#ffca28"
                  d="m96.592 72.85-8.513-52.674a2.055 2.055 0 0 0-1.399-1.613 2.05 2.05 0 0 0-2.074.504L30.916 72.85l29.708 16.66a6.157 6.157 0 0 0 6.003 0z"
                ></path>
              </svg>
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Firebase
              </h3>
            </div>

            {/* Redux Toolkit */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-purple-200/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={redux} className="h-20 mx-auto" alt="Redux Toolkit" />
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Redux Toolkit
              </h3>
            </div>

            {/* Zustand */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-purple-200/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={zustandimg}
                className="h-20 w-40 mx-auto rounded-lg"
                alt="Zustand"
              />
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Zustand
              </h3>
            </div>

            {/* Next.js */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200/50 hover:border-gray-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-white/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={Nextjsimg}
                className="h-20 w-40 mx-auto rounded-lg"
                alt="Next.js"
              />
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Next.js
              </h3>
            </div>

            {/* Node.js */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={Nodejsimg}
                className="h-20 w-40 mx-auto rounded-lg"
                alt="Node.js"
              />
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Node.js
              </h3>
            </div>

            {/* Express.js */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200/50 hover:border-gray-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-gray-400/25">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/10 to-gray-600/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={Expressjsimg}
                className="h-20 w-40 mx-auto rounded-lg"
                alt="Express.js"
              />
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                Express.js
              </h3>
            </div>

            {/* MongoDB */}
            <div className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-green-200/50 hover:border-green-600/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-green-600/25">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-800/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={MongoDBimg}
                className="h-20 w-40 mx-auto rounded-lg"
                alt="MongoDB"
              />
              <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
                MongoDB
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-20 lg:py-32 relative overflow-hidden bg-white/60 backdrop-blur-sm"
        id="projects"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-white/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 mb-6 tracking-tight">
                Featured
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
            <p className="text-gray-600 text-lg sm:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
              Discover my latest work showcasing modern web development,
              innovative design, and cutting-edge technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Project 1 - Hindustan Car Mechanics */}
            <div className="group relative">
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-white/70 to-gray-50/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-700 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Image */}
                <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                  <a
                    href="https://hindustancarmechanics.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={carmechanics}
                      alt="Hindustan Car Mechanics"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Tech Stack Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-blue-400/50">
                        ⚛️ React.js
                      </span>
                      <span className="px-3 py-1.5 bg-purple-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-purple-400/50">
                        🎨 Tailwind CSS
                      </span>
                    </div>

                    {/* Quick View Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-gray-800 transition-all duration-300 hover:scale-110">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      Hindustan Car Mechanics
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      Professional automotive service platform featuring modern
                      design, responsive layouts, and seamless user experience
                      for car maintenance booking.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Responsive Design
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Modern UI/UX
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Fast Performance
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://hindustancarmechanics.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Live Site</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - SS Plus IT Education */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-white/70 to-gray-50/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 transition-all duration-700 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                  <a
                    href="https://education-beta-ten.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={ssplusit}
                      alt="SS Plus IT Education"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-blue-400/50">
                        ⚛️ React.js
                      </span>
                      <span className="px-3 py-1.5 bg-green-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-green-400/50">
                        💫 CSS3
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-gray-800 transition-all duration-300 hover:scale-110">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      SS Plus IT Education
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      Interactive educational platform designed for modern
                      learning experiences with engaging UI and comprehensive
                      course management features.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Interactive Learning
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Course Management
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        Student Portal
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://education-beta-ten.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Live Site</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Diamond Public School */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-700 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                  <a
                    href="https://diamondpublicschool.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={diamondpublicschool}
                      alt="Diamond Public School"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="px-3 py-1.5 bg-orange-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-orange-400/50">
                        🌐 HTML/CSS
                      </span>
                      <span className="px-3 py-1.5 bg-yellow-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-yellow-400/50">
                        ⚡ JavaScript
                      </span>
                      <span className="px-3 py-1.5 bg-teal-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-teal-400/50">
                        📦 jQuery
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      Diamond Public School
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      Comprehensive educational institution website featuring
                      elegant design, detailed information architecture, and
                      user-friendly navigation.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        School Management
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Information Portal
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Classic Design
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://diamondpublicschool.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Live Site</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 - E-commerce Platform */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-700 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                  <a
                    href="https://medium-eccommerce.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={ecommerce}
                      alt="E-commerce Platform"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="px-3 py-1.5 bg-pink-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-pink-400/50">
                        ⚛️ React.js
                      </span>
                      <span className="px-3 py-1.5 bg-purple-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-purple-400/50">
                        🔧 Redux Toolkit
                      </span>
                      <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-blue-400/50">
                        📦 Zustand
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                      E-commerce Platform
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      Full-stack e-commerce solution with advanced state
                      management, shopping cart functionality, and seamless
                      payment integration.
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        Shopping Cart
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        State Management
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Payment Integration
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://medium-eccommerce.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Live Site</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5 - Task Flow Project */}
            <div className="group relative">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 transition-all duration-700 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                  <a
                    href="https://nextjstaskflow.netlify.app/Dashboard/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <img
                      src={Taskflowimg}
                      alt="Task-Flow Project"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <span className="px-3 py-1.5 bg-pink-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-pink-400/50">
                         Next.Js
                      </span>
                      <span className="px-3 py-1.5 bg-purple-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-purple-400/50">
                        🔧 Node.Js
                      </span>
                      <span className="px-3 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-blue-400/50">
                        📦 Zustand
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white transition-all duration-300 hover:scale-110">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                      Task-Flow Project
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      Task-Flow is a full-stack application built with Next.js,
                      React Js, and Node.js. It provides a user-friendly
                      interface for managing tasks, with features such as task
                      creation, editing, and deletion.

                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        Dashboard
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        State Management
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Authentication
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://nextjstaskflow.netlify.app/Dashboard/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>View Live Site</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer
        className="py-16 lg:py-20 relative bg-gradient-to-r from-blue-50/60 to-purple-50/60"
        id="contact"
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 bg-white/70 border border-gray-200/70 rounded-3xl shadow-xl shadow-blue-50 p-6 sm:p-8">
            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Services
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Frontend Web Development
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Responsive Web Design
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  React Applications
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technologies
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  HTML & CSS
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  JavaScript & React JS
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  Tailwind CSS
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Firebase
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Redux Tool Kit
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Zustand
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="tel:+919014488793"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-300 group text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (+91) 9014488793
                </a>
                <a
                  href="mailto:bhargavramgomatham@gmail.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-300 group text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  bhargavramgomatham@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/bhargavram-gomatham-157816225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition-colors duration-300 group text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h5v-5H4v5zM13 13h5l-5 5v-5zM4 13h5V8H4v5zm6-5h5l-5 5V8z"
                  />
                </svg>
                Connect
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Let's collaborate and create something amazing together!
                </p>
                <form className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/70 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                  >
                    Get In Touch
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              © 2024 Bhargav Ram. All rights reserved. Built with ❤️ and React.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
