import React from 'react';

function WorkWithApps() {
  return (
    <div className="bg-[#0B2F6A] min-h-screen text-white">
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        <div className="md:w-1/2 flex justify-center">
          <img
            alt="Illustration of various app icons connected to whitepace"
            className="rounded-lg shadow-lg"
            height="280"
            src="https://storage.googleapis.com/a1aa/image/61fb5720-f7ea-4b29-80fc-6c4001942a58.jpg"
            width="480"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold max-w-md">
            Work with Your Favorite Apps Using{' '}
            <span className="capitalize">whitepace</span>
          </h2>
          <p className="text-sm sm:text-base max-w-md text-[#D1D5DB]">
            Connect Whitepace with tools you already use to streamline your workflow and save time.
          </p>
          <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 w-max hover:bg-[#2563eb] transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default WorkWithApps;
