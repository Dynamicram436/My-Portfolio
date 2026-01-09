import React from 'react';
import profile2 from "../../Images/Bharagavram.jpeg";

const About = () => {
  return (
    <section
      className="py-16 lg:py-20 relative bg-gradient-to-b from-amber-50 via-orange-50 to-red-50"
      id="about"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">
              Me
            </span>
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
                I'm a passionate Front-End Web Developer with 1.5 years of
                hands-on experience developing web applications with HTML,
                CSS, Tailwind CSS, JavaScript, and React JS technologies.
              </p>

              <p
                data-aos="fade-right"
                className="text-base sm:text-lg leading-relaxed mt-4 text-gray-600"
              >
                I am strongly interested in learning new technologies and
                implementing them in my projects. I'm a self-motivated and
                hardworking individual who is always ready to learn new things
                and work in a team.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-8">
              <div
                data-aos="fade-up"
                className="bg-emerald-50/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-sm shadow-emerald-500/10"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  1.5
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Years Experience
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="bg-amber-50/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-sm shadow-amber-500/10"
              >
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
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
  );
};

export default About;
