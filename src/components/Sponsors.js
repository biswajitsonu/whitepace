import React from 'react';

function Sponsors() {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen p-6">
      <h1
        className="relative text-4xl font-extrabold text-gray-900 font-['Inter'] mb-28"
        style={{ lineHeight: 1 }}
      >
        Our sponsors
        <span
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 w-[160px] h-3 bg-yellow-300 rounded-sm"
          style={{ bottom: -8, filter: 'drop-shadow(0 0 2px rgb(252 211 77))' }}
        ></span>
      </h1>
      <div className="flex justify-center w-full max-w-7xl px-6 sm:px-12">
        <img
          alt="Sponsor logos combined in a single image including Microsoft, Slack, and Google logos"
          className="object-contain w-full max-w-[900px] h-auto"
          src="https://i.postimg.cc/qvT1F0w2/sponsors.png"
          width={900}
          height="auto"
        />
      </div>
    </div>
  );
}

export default Sponsors;
