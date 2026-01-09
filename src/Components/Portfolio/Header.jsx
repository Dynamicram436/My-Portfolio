import React from 'react';

const Header = ({ isScrolled, activeSection, menuItems, smoothScroll }) => {
  return (
    <header
      className={`fixed w-full top-0 left-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-amber-50/80 backdrop-blur-xl border-b border-emerald-500/20 py-4 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <ul className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              data-aos="fade-down"
              data-aos-delay={index * 100}
            >
              <a
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 hover:text-emerald-600 group ${
                  activeSection ===
                  (item.href === "#" ? "home" : item.href.slice(1))
                    ? "text-emerald-600"
                    : "text-gray-700"
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
  );
};

export default Header;
