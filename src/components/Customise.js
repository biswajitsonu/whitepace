import React from 'react';

function Customise() {
  return (
    <main className="w-full max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-0 min-h-[350px] bg-white text-gray-900">
      <div
        className="md:w-auto bg-[#c4ddff] mt-20 ml-6 md:ml-8"
        style={{ width: '600px', height: '350px' }}
      ></div>
      <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pl-32 flex flex-col justify-start">
        <h1 className="text-5xl font-extrabold leading-tight max-w-md mb-6">
          Customise it to <br />
          <span className="relative inline-block">
            your needs
            <span
              aria-hidden="true"
              className="absolute left-0 w-full h-3 bg-[#ffe59a] -skew-x-12"
              style={{ bottom: '-8px', clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0% 100%)' }}
            ></span>
          </span>
        </h1>
        <p className="text-gray-700 mt-8 mb-8 text-base leading-relaxed max-w-xl">
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
        </p>
        <button
          type="button"
          className="mt-12 bg-[#4a90e2] text-white text-base font-medium rounded-md px-6 py-3 flex items-center gap-2 hover:bg-[#3a78d1] transition-colors w-max"
        >
          Let’s Go <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </main>
  );
}

export default Customise;
