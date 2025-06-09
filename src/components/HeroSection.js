import React from 'react';

function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-[#053a75] flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 px-6 py-20 relative overflow-hidden">
      <div className="md:w-7/12 relative text-white z-10">
        <h1 className="font-extrabold text-5xl sm:text-6xl leading-tight max-w-lg mb-6 relative z-10">
          Get More Done with
          <br />
          whitepace
        </h1>
        <p className="text-lg sm:text-xl max-w-lg mb-8 relative z-10">
          Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
        </p>
        <button
          type="button"
          className="mt-4 bg-[#4a90e2] hover:bg-[#3a78d1] text-white text-lg font-medium rounded-lg px-8 py-4 flex items-center gap-3 w-max relative z-10"
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
      <div className="w-full md:w-5/12 h-48 md:h-[350px] bg-[#c2dbfc] relative z-10 border border-red-500 max-w-md mx-auto md:mx-0"></div>
    </section>
  );
}

export default HeroSection;
