import React from 'react';

function YourWorkEverywhere() {
  return (
    <div className="relative overflow-hidden py-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-60 bg-[#003b75]">
      <img
        alt="Abstract blue layered contour lines pattern on dark blue background, positioned on left side"
        className="absolute top-0 left-0 w-[600px] max-w-none pointer-events-none select-none"
        height={574}
        src="https://storage.googleapis.com/a1aa/image/5d642c56-dcfa-4fd5-98d8-744a47d67f68.jpg"
        style={{
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight whitespace-nowrap">
          Your work, everywhere you are
          <span className="inline-block relative">
            <img
              alt="Blue brush stroke highlight behind text"
              className="absolute bottom-1 left-0 w-full h-6 object-contain pointer-events-none select-none"
              height={24}
              src="https://storage.googleapis.com/a1aa/image/07703cf7-540c-43ad-bd6a-dd1cc332c6d8.jpg"
              width={180}
            />
          </span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
        <button
          className="mt-10 bg-[#5a9cff] hover:bg-[#4a8ce6] transition-colors duration-300 rounded-md px-8 py-3 text-white text-base font-normal inline-flex items-center justify-center mx-auto"
          type="button"
        >
          Try Taskey
          <svg
            aria-hidden="true"
            className="ml-2 w-4 h-4"
            fill="none"
            focusable="false"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default YourWorkEverywhere;
