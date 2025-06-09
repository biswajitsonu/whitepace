import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#003366] w-full flex justify-center sticky top-0 z-50">
      <nav className="custom-nav px-4 sm:px-6 lg:px-8 max-w-[1440px] w-full h-[92px] flex flex-col sm:flex-row items-center justify-between relative">
        {/* Left: Logo and name */}
        <div className="flex items-center space-x-3">
          <img
            alt="Whitepace logo icon with two white angled shapes forming an abstract W"
            className="w-6 h-6"
            height="24"
            src="https://i.postimg.cc/MTFSk0h1/Logo-Icon.png"
            width="24"
          />
          <span className="text-white font-semibold text-lg select-none">whitepace</span>
        </div>

        {/* Middle: Menu items */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white text-sm font-normal w-full sm:w-auto mt-4 sm:mt-0 justify-center`}
          style={{ flexGrow: 1 }}
        >
          <div className="relative group cursor-pointer whitespace-nowrap">
            <span>Products</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
          <div className="relative group cursor-pointer whitespace-nowrap">
            <span>Solutions</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
          <div className="relative group cursor-pointer whitespace-nowrap">
            <span>Resources</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
          <div className="relative group cursor-pointer whitespace-nowrap">
            <span>Pricing</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
        </div>

        {/* Right: Login and Try Whitepace buttons */}
        <div
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0 justify-end`}
        >
          <button
            type="button"
            className="bg-[#FFDD7D] text-[#1A1A1A] rounded-md px-5 py-2 text-sm font-normal hover:bg-[#f9d95a] transition whitespace-nowrap"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-[#4A90E2] text-white rounded-md px-5 py-2 text-sm font-normal hover:bg-[#3a78d1] transition flex items-center space-x-1 whitespace-nowrap"
          >
            <span>Try Whitepace free</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="sm:hidden flex flex-col justify-center items-center space-y-1.5 text-white absolute right-4 top-4"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
          <span className="block w-6 h-0.5 bg-white rounded"></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
