import React from 'react';

const Cursor = ({ mousePosition, isScrolled }) => {
  return (
    <div
      className="fixed w-6 h-6 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full pointer-events-none z-50 mix-blend-multiply transition-all duration-150 ease-out shadow-[0_0_25px_rgba(16,185,129,0.5)]"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: `scale(${isScrolled ? 0.8 : 1})`,
      }}
    ></div>
  );
};

export default Cursor;
