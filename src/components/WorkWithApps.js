import React from 'react';

function WorkWithApps() {
  return (
    <div className="bg-[#053774] min-h-screen py-40">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            alt="Decorative circular pattern with app icons from Whitepace integration"
            className="w-full max-w-md object-contain"
            src="https://i.postimg.cc/3xCFcxKm/Appss.png"
          />
        </div>
        <div className="w-full md:w-1/2 text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Work with Your
            <br />
            Favorite Apps Using
            <br />
            whitepace
          </h1>
          <p className="text-base md:text-lg font-normal mb-8">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <button
            aria-label="Read more about Whitepace apps integration"
            className="bg-[#4A90E2] hover:bg-[#3a78d1] transition-colors duration-300 rounded-md px-6 py-3 text-white text-base flex items-center gap-2"
          >
            Read more
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkWithApps;
