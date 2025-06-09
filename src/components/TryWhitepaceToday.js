import React from 'react';

function TryWhitepaceToday() {
  return (
    <div className="bg-[#053a7a] text-white flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="font-extrabold text-5xl text-center leading-tight max-w-md">
        Try Whitepace<br />today
      </h1>
      <p className="mt-4 text-center text-lg max-w-xs">
        Get started for free.<br />
        Add your whole team as your needs grow.
      </p>
      <button
        className="mt-8 bg-[#4a90e2] rounded-lg px-8 py-3 text-white text-base font-normal flex items-center space-x-2 hover:bg-[#3a78d1] transition"
      >
        <span>Try Taskey free</span>
        <i className="fas fa-arrow-right"></i>
      </button>
      <p className="mt-8 text-center text-lg max-w-xs">On a big team? Contact sales</p>
      <div className="mt-6 flex space-x-12">
        <i className="fab fa-apple fa-3x" aria-hidden="true" title="Apple logo"></i>
        <i className="fab fa-windows fa-3x" aria-hidden="true" title="Windows logo"></i>
        <i className="fab fa-android fa-3x" aria-hidden="true" title="Android logo"></i>
      </div>
    </div>
  );
}

export default TryWhitepaceToday;
