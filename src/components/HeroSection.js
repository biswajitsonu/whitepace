import React from 'react';

function HeroSection() {
  return (
<section className="w-full min-h-screen bg-[#053a75] flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 px-8 py-24 relative overflow-hidden" style={{ backgroundImage: 'url(https://i.postimg.cc/kMxNqzwn/Elementt.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
<div className="md:w-6/12 relative text-white z-10">
<h1 className="font-extrabold text-5xl sm:text-6xl leading-snug max-w-3xl mb-6 tracking-tight relative z-10">
          Get More Done with
          <br />
          whitepace
        </h1>
<p className="text-lg sm:text-xl max-w-md mb-8 leading-relaxed tracking-wide relative z-10">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
<button
          type="button"
          className="mt-6 bg-[#4a90e2] hover:bg-[#3a78d1] text-white text-lg font-medium rounded-lg px-10 py-5 flex items-center gap-4 w-max relative z-10"
        >
          Try Whitepace free
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      {/* Background pattern image behind text */}
      <img
        alt="Decorative wave lines in light blue behind text"
        className="absolute top-0 left-0 w-7/12 h-full pointer-events-none select-none opacity-15 -z-10 hidden sm:block"
        height="300"
        src="https://storage.googleapis.com/a1aa/image/44745f47-584e-4798-9099-bbe9e2e88b10.jpg"
        width="600"
        style={{ opacity: 0.15, zIndex: -1 }}
      />
      {/* Right side blank image with primary 100 bg */}
<div
        className="w-full md:w-6/12 h-64 md:h-[400px] relative z-10 max-w-lg mx-auto md:mx-0"
        style={{
          backgroundImage: 'url(https://i.postimg.cc/fLw3ZzKX/h.png)',
          backgroundSize: '110% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          border: 'none',
        }}
      ></div>
    </section>
  );
}

export default HeroSection;
