import React from 'react';

function DataSecurity() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 bg-white text-[#0B2F6A]">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold max-w-md">
          100% <span className="font-extrabold">your data</span>
        </h2>
        <p className="text-sm sm:text-base max-w-md text-[#374151]">
          Your data is yours alone. We never share or sell your information to third parties.
        </p>
        <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 w-max hover:bg-[#2563eb] transition">
          Learn More
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          alt="Illustration showing data security with locks and connected nodes"
          className="rounded-lg shadow-lg"
          height="280"
          src="https://storage.googleapis.com/a1aa/image/9bce7b02-1792-4a52-b3aa-69531924065d.jpg"
          width="480"
        />
      </div>
    </section>
  );
}

export default DataSecurity;
