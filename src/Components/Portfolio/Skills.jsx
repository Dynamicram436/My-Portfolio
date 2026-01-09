import React from 'react';
import redux from "../../Images/redux-icon.webp";
import zustandimg from "../../Images/zustandimg.webp";
import Nextjsimg from "../../Images/Next.js.png";
import Nodejsimg from "../../Images/Nodejs.png";
import Expressjsimg from "../../Images/Express js.png";
import MongoDBimg from "../../Images/MongoDB.png";

const Skills = () => {
  return (
    <section
      className="py-16 lg:py-20 relative bg-gradient-to-r from-amber-50 via-orange-50 to-red-50"
      id="skills"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div
          data-aos="fade-left"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 bg-white/60 border border-emerald-500/10 rounded-3xl p-4 sm:p-6 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.8)]"
        >
          {/* HTML */}
          <div className="group relative bg-orange-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25">
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
          <div className="group relative bg-blue-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25">
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
          <div className="group relative bg-teal-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-teal-200/50 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-teal-500/25">
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
                d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5... [truncated]"
              ></path>
            </svg>
            <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
              Tailwind
            </h3>
          </div>

          {/* JavaScript */}
          <div className="group relative bg-yellow-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-yellow-200/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/25">
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
          <div className="group relative bg-cyan-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cyan-200/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg
              viewBox="0 0 128 128"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 relative z-10"
            >
              <g fill="#61DAFB">
                <circle cx="64" cy="47.5" r="9.3"></circle>
                <path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.... [truncated]"
              ></g>
            </svg>
            <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
              React
            </h3>
          </div>

          {/* Firebase */}
          <div className="group relative bg-amber-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-200/50 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="group relative bg-purple-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-purple-200/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src={redux} className="h-20 mx-auto" alt="Redux Toolkit" />
            <h3 className="text-gray-800 font-semibold text-center text-sm sm:text-base">
              Redux Toolkit
            </h3>
          </div>

          {/* Zustand */}
          <div className="group relative bg-indigo-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-indigo-200/50 hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="group relative bg-gray-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200/50 hover:border-gray-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-slate-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="group relative bg-emerald-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-200/50 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/25">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="group relative bg-slate-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/50 hover:border-slate-400/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-slate-400/25">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300/10 to-slate-600/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <div className="group relative bg-green-50/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-green-200/50 hover:border-green-600/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-green-600/25">
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
  );
};

export default Skills;
