import React from 'react';

const Loader = () => {
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
};

export default Loader;
