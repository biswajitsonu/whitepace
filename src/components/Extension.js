import React from 'react';

function Extension() {
  return (
    <div className="w-full min-h-screen bg-[#053970] flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 px-6 py-20 relative overflow-hidden">
      <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-20">
        <h1
          className="text-white font-extrabold text-5xl md:text-6xl leading-tight max-w-xl"
          style={{ whiteSpace: 'nowrap', letterSpacing: '0.05em' }}
        >
          Use as Extension
        </h1>
        <div className="relative max-w-xl mt-4 mb-6">
          <div className="absolute bottom-2 left-0 w-48 h-2 bg-[#f7d87c] rounded-full"></div>
        </div>
        <p className="text-white text-sm max-w-xl mb-8">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button
          type="button"
          className="bg-[#4a90e2] text-white rounded-md px-6 py-3 w-36 text-center text-base font-normal hover:bg-[#3a78d1] transition"
        >
          Let’s Go <span className="inline-block ml-1">→</span>
        </button>
      </div>
      <div
        className="w-full max-w-md md:w-auto bg-[#b9d7ff] mt-10 md:mt-20 mx-auto md:mx-0 rounded-md shadow-lg flex justify-center items-center"
        style={{ height: '250px', maxWidth: '600px' }}
      >
        <img
          src="https://i.postimg.cc/pd1Zxf9n/9594694.jpg"
          alt="Extension Illustration"
          className="rounded-md"
          style={{ width: '600px', height: '350px' }}
        />
      </div>
    </div>
  );
}

export default Extension;
