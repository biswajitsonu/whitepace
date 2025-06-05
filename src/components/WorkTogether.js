import React from 'react';

function WorkTogether() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 bg-white text-[#0B2F6A]">
      <div className="md:w-1/2 order-2 md:order-1 flex justify-center">
        <img
          alt="Illustration of people collaborating around a central hub with colorful nodes"
          className="rounded-lg shadow-lg"
          height="280"
          src="https://storage.googleapis.com/a1aa/image/2c424084-04b1-4a54-6cac-beb972cfb260.jpg"
          width="480"
        />
      </div>
      <div className="md:w-1/2 order-1 md:order-2 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold max-w-md">
          Work <span className="font-extrabold">together</span>
        </h2>
        <p className="text-sm sm:text-base max-w-md text-[#374151]">
          Collaborate seamlessly with your team in real-time, share updates, and keep everyone on the same page.
        </p>
        <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 w-max hover:bg-[#2563eb] transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default WorkTogether;
