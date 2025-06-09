import React from 'react';

function Testimonials() {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen py-40 px-4">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-14 max-w-4xl text-center">
        What Our Clients
        <span className="relative font-extrabold ml-1 inline-block">
          Says
          <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 rounded-sm -z-10"></span>
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 max-w-6xl w-full justify-center">
        {/* Card 1 white background with shadow */}
        <div className="bg-white rounded-lg p-8 max-w-sm shadow-[0_0_30px_rgba(0,0,0,0.25)] flex flex-col justify-between">
          <i aria-hidden="true" className="fas fa-quote-left text-[4.5rem] text-[#003a7a] mb-6"></i>
          <p className="text-sm text-gray-900 mb-8 leading-relaxed">
            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
          <hr className="border-gray-300 mb-8" />
          <div className="flex items-center gap-4">
            <img
              alt="Woman in orange sweater relaxing outdoors"
              className="w-14 h-14 rounded-full object-cover"
              height={56}
              src="https://storage.googleapis.com/a1aa/image/75d4eba7-265d-4019-7de3-c101f3085a00.jpg"
              width={56}
            />
            <div>
              <h3 className="font-semibold text-gray-900 text-lg leading-tight">Oberon Shaw, MCH</h3>
              <p className="text-xs text-gray-900 leading-tight">Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
        {/* Card 2 blue background */}
        <div className="bg-[#4a90e2] rounded-lg p-8 max-w-sm flex flex-col justify-between">
          <i aria-hidden="true" className="fas fa-quote-left text-[4.5rem] text-white mb-6"></i>
          <p className="text-sm text-white mb-8 leading-relaxed">
            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
          <hr className="border-white/40 mb-8" />
          <div className="flex items-center gap-4">
            <img
              alt="Smiling man with glasses and blue shirt"
              className="w-14 h-14 rounded-full object-cover"
              height={56}
              src="https://storage.googleapis.com/a1aa/image/4cc176f8-14ab-4306-ef53-32ac3dda4c76.jpg"
              width={56}
            />
            <div>
              <h3 className="font-semibold text-[#003a7a] text-lg leading-tight">Oberon Shaw, MCH</h3>
              <p className="text-xs text-white leading-tight">Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
        {/* Card 3 blue background */}
        <div className="bg-[#4a90e2] rounded-lg p-8 max-w-sm flex flex-col justify-between">
          <i aria-hidden="true" className="fas fa-quote-left text-[4.5rem] text-white mb-6"></i>
          <p className="text-sm text-white mb-8 leading-relaxed">
            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
          </p>
          <hr className="border-white/40 mb-8" />
          <div className="flex items-center gap-4">
            <img
              alt="Man with beard and glasses wearing black shirt"
              className="w-14 h-14 rounded-full object-cover"
              height={56}
              src="https://storage.googleapis.com/a1aa/image/823e7b4f-f98e-4ee8-9393-158d07f3bc66.jpg"
              width={56}
            />
            <div>
              <h3 className="font-semibold text-[#003a7a] text-lg leading-tight">Oberon Shaw, MCH</h3>
              <p className="text-xs text-white leading-tight">Head of Talent Acquisition, North America</p>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination dots */}
      <div className="flex justify-center gap-3 mt-10">
        <span aria-label="Active testimonial" className="w-3.5 h-3.5 rounded-full bg-[#4a90e2] block"></span>
        <span aria-label="Inactive testimonial" className="w-3.5 h-3.5 rounded-full bg-[#4a90e2]/50 block"></span>
        <span aria-label="Inactive testimonial" className="w-3.5 h-3.5 rounded-full bg-[#4a90e2]/50 block"></span>
      </div>
    </div>
  );
}

export default Testimonials;
