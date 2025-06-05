import React from 'react';

function Header() {
  return (
    <header className="bg-[#003366] w-full flex justify-center">
      <nav className="custom-nav px-4 sm:px-6 lg:px-8 max-w-[1440px] w-full h-[92px] flex items-center justify-between">
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
        <div className="hidden md:flex items-center space-x-8 text-white text-sm font-normal">
          <div className="relative group cursor-pointer">
            <span>Products</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
          <div className="relative group cursor-pointer">
            <span>Solutions</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
          <div className="relative group cursor-pointer">
            <span>Resources</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
          <div className="relative group cursor-pointer">
            <span>Pricing</span>
            <i className="fas fa-chevron-down ml-1 text-white text-xs"></i>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="bg-[#FFDD7D] text-[#1A1A1A] rounded-md px-5 py-2 text-sm font-normal hover:bg-[#f9d95a] transition"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-[#4A90E2] text-white rounded-md px-5 py-2 text-sm font-normal hover:bg-[#3a78d1] transition flex items-center space-x-1"
          >
            <span>Try Whitepace free</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
