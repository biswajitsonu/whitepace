import React from 'react';

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <header className="text-center max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 relative inline-block">
          Choose <span className="underline-yellow">Your Plan</span>
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-4xl mx-auto">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </header>

      <main className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
        {/* Free Plan */}
        <section
          className="bg-gray-50 rounded-lg border border-yellow-300 max-w-md mx-auto md:max-w-md md:flex-1 p-8 flex flex-col"
        >
          <h2 className="font-semibold text-gray-900 mb-2">Free</h2>
          <p className="text-3xl font-extrabold mb-4">$0</p>
          <p className="text-sm mb-6 text-gray-900">Capture ideas and find them quickly</p>
          <ul className="space-y-4 text-xs text-gray-700">
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Sync unlimited devices</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>10 GB monthly uploads</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>200 MB max. note size</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Customize Home dashboard and access extra widgets</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Connect primary Google Calendar account</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Add due dates, reminders, and notifications to your tasks</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-auto self-start px-5 py-2 rounded border border-yellow-300 text-sm text-gray-900 hover:bg-yellow-50 transition"
          >
            Get Started
          </button>
        </section>

        {/* Personal Plan */}
        <section
          className="bg-[#073b7a] rounded-lg max-w-md mx-auto md:max-w-md md:flex-1 p-8 flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          <h2 className="font-semibold text-white mb-2">Personal</h2>
          <p className="text-yellow-300 text-2xl font-extrabold mb-4">$11.99</p>
          <p className="text-sm mb-6 text-white">Keep home and family on track</p>
          <ul className="space-y-4 text-xs text-white">
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-yellow-300"></i>
              <span>Sync unlimited devices</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-yellow-300"></i>
              <span>10 GB monthly uploads</span>
            </li>
            <li className="flex items-start gap-3 font-semibold">
              <i className="fas fa-check-circle mt-1 text-yellow-300"></i>
              <span>200 MB max. note size</span>
            </li>
            <li className="flex items-start gap-3 font-semibold">
              <i className="fas fa-check-circle mt-1 text-yellow-300"></i>
              <span>Customize Home dashboard and access extra widgets</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-yellow-300"></i>
              <span>Connect primary Google Calendar account</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-yellow-300"></i>
              <span>Add due dates, reminders, and notifications to your tasks</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-auto self-start mt-8 px-5 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </section>

        {/* Organization Plan */}
        <section
          className="bg-gray-50 rounded-lg border border-yellow-300 max-w-md mx-auto md:max-w-md md:flex-1 p-8 flex flex-col"
        >
          <h2 className="font-semibold text-gray-900 mb-2">Organization</h2>
          <p className="text-3xl font-extrabold mb-4">$49.99</p>
          <p className="text-sm mb-6 text-gray-900">Capture ideas and find them quickly</p>
          <ul className="space-y-4 text-xs text-gray-700">
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Sync unlimited devices</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>10 GB monthly uploads</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>200 MB max. note size</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Customize Home dashboard and access extra widgets</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Connect primary Google Calendar account</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fas fa-check-circle mt-1 text-gray-900"></i>
              <span>Add due dates, reminders, and notifications to your tasks</span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-auto self-start px-5 py-2 rounded border border-yellow-300 text-sm text-gray-900 hover:bg-yellow-50 transition"
          >
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
}

export default Pricing;
