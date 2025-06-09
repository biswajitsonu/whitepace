import React from 'react';

function YourData() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="lg:max-w-xl text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          <span>100% </span>
          <span className="relative inline-block">
            your data
            <span
              aria-hidden="true"
              className="absolute bottom-1 left-0 w-full h-5 bg-[#F9E29B] -skew-x-12 -z-10 rounded-sm"
            ></span>
          </span>
        </h2>
        <p className="mt-6 text-gray-800 text-base max-w-5xl">
          The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        </p>
        <button
          aria-label="Read more"
          className="mt-10 bg-blue-500 hover:bg-blue-600 text-white text-base font-normal py-3 px-8 rounded-md flex items-center gap-2"
        >
          Read more
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="relative w-full max-w-lg aspect-[1.3/1]">
        <img
          alt="Diagram with connected icons and dotted lines on white background"
          className="absolute inset-0 w-full h-full object-contain"
          src="https://i.postimg.cc/kGJ3Q8Hh/Element.png"
        />
      </div>
    </div>
  );
}

export default YourData;
