import React from 'react';
import profile from "../../Images/Bram8.jpg";
import Resume from "../../pdf/Bhargavram-FrontEndDeveloper-Resume-Nov.pdf";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SplitText from "../../Animations/spilttext.jsx";

const Hero = ({ smoothScroll }) => {

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/60 backdrop-blur-2xl border border-emerald-500/10 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.8)] rounded-3xl p-6 sm:p-10">
          {/* Bio-Data Section */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fadeInUp">
            <div className="relative inline-block mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                data-aos="zoom-in-up"
                src={profile}
                alt="Bhargav Ram"
                className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full object-cover border-4 border-white shadow-2xl shadow-emerald-500/30 transform hover:scale-105 transition-all duration-500 hover:rotate-3 mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-lg sm:text-xl lg:text-2xl">
                  👋
                </span>
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
                I specialize in creating modern, responsive, and user-friendly
                web applications that bring ideas to life with cutting-edge
                technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href={Resume}
                  download="BhargavRam_Resume.pdf"
                  className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-600 rounded-full overflow-hidden shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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

          {/* Animation Section */}
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
  );
};

export default Hero;
