import React from 'react';

function Customise() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 bg-white text-[#0B2F6A]">
      <div className="md:w-1/2">
        <img
          alt="Illustration showing customization options with sliders and settings"
          className="rounded-lg shadow-lg"
          height="280"
          src="https://storage.googleapis.com/a1aa/image/4a9acedb-703f-49fc-9847-740536972802.jpg"
          width="480"
        />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold max-w-md">
          Customise it to{' '}
          <span className="font-extrabold">your needs</span>
        </h2>
        <p className="text-sm sm:text-base max-w-md text-[#374151]">
          Tailor Whitepace to fit your workflow with flexible settings and personalized features.
        </p>
        <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 w-max hover:bg-[#2563eb] transition">
          Customize
        </button>
      </div>
    </section>
  );
}

export default Customise;
