import React from 'react';
import WorkTogether from './WorkTogether';

function ProjectManagement() {
  return (
<div className="max-w-[90rem] mx-auto px-12 py-28 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-24 items-center relative">
      {/* Left top section with background pattern */}
<div
        className="md:col-span-5 relative"
        style={{
          backgroundImage: "url('https://i.postimg.cc/SRdDPhRR/BACKGROUND.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top',
          backgroundSize: 'contain',
        }}
      >
<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative z-10 max-w-[320px] leading-snug mb-8 tracking-tight">
          Project
          <br />
          <span className="relative inline-block">
            <span
              className="absolute inset-x-0 bottom-2 h-6 bg-yellow-300/70 rounded -skew-x-12 -z-10"
              aria-hidden="true"
            ></span>
            Management
          </span>
        </h1>
        <p className="text-gray-800 text-sm md:text-base max-w-[440px] leading-relaxed mb-8 tracking-wide">
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
        </p>
<button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium rounded px-10 py-5 flex items-center gap-4 max-w-[200px]"
        >
          Get Started
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </button>
      </div>
      {/* Right top section with replaced image */}
<div className="md:col-span-7 flex justify-end">
        <img
          alt="Project Management Illustration"
          className="rounded"
          src="https://i.postimg.cc/vmt9BQxw/Chatgpt1.png"
          style={{ width: '680px', height: '460px' }}
        />
      </div>
      {/* Left bottom section replaced with image */}
<div className="md:col-span-5 flex justify-center md:justify-start relative">
        <img
          alt="Work Together Image showing colorful circles and collaboration concept"
          className="max-w-[480px] rounded"
          height="480"
          src="https://i.postimg.cc/7YW0B69d/Work-Together-Image.png"
          width="480"
        />
      </div>
      {/* Right bottom section with full "work together" content on right side of image */}
<div className="md:col-span-7 max-w-md md:max-w-none">
<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug max-w-[320px] whitespace-nowrap mb-8 tracking-tight">
          Work{' '}
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-2 h-6 bg-yellow-300/70 rounded -skew-x-12 -z-10"
            ></span>
            together
          </span>
        </h2>
        <p className="text-gray-800 text-sm md:text-base max-w-[440px] leading-relaxed mb-8 tracking-wide">
          With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
        </p>
<button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium rounded px-10 py-5 flex items-center gap-4 max-w-[200px]"
        >
          Try it now
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProjectManagement;
