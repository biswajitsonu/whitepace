import React from 'react';

function TryWhitepaceToday() {
  return (
    <div className="bg-[#0B2F6A] min-h-screen text-white text-center">
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <h2 className="text-3xl font-bold mb-2">
          Try Whitepace
          <br />
          today
        </h2>
        <p className="text-sm sm:text-base max-w-md mx-auto mb-8 text-[#D1D5DB]">
          Create your free account and start managing projects effortlessly.
        </p>
        <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 mb-8 hover:bg-[#2563eb] transition">
          Get Started
        </button>
        <div className="flex justify-center space-x-6 text-white text-2xl">
          <i className="fab fa-apple cursor-pointer hover:text-[#FFD966] transition"></i>
          <i className="fab fa-windows cursor-pointer hover:text-[#FFD966] transition"></i>
          <i className="fab fa-android cursor-pointer hover:text-[#FFD966] transition"></i>
        </div>
      </section>
    </div>
  );
}

export default TryWhitepaceToday;
