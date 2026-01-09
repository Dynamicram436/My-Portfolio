import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/5 left-1/6 w-64 h-64 bg-emerald-500/40 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-amber-500/40 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-rose-500/40 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.08),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(244,63,94,0.08),transparent_30%)]"></div>
    </div>
  );
};

export default AnimatedBackground;
