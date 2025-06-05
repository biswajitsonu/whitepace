import React from 'react';

function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 bg-white text-[#0B2F6A] text-center">
      <h2 className="text-3xl font-bold mb-4">
        Choose <span className="font-extrabold">Your Plan</span>
      </h2>
      <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12 text-[#6B7280]">
        Select the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <p className="text-4xl font-extrabold mb-4">$0</p>
          <ul className="flex-1 space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ 3 project templates</li>
            <li>✔ 5 team members</li>
            <li>✔ Basic task management</li>
            <li>✔ Email support</li>
            <li>✔ Community access</li>
          </ul>
          <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 w-full hover:bg-[#2563eb] transition">
            Get Started
          </button>
        </div>
        {/* Pro Plan */}
        <div className="flex-1 bg-[#0B2F6A] text-white rounded-lg p-6 flex flex-col shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
          <p className="text-4xl font-extrabold mb-4">$11.99</p>
          <p className="text-sm mb-4">Billed annually</p>
          <ul className="flex-1 space-y-2 text-sm mb-6">
            <li>✔ Unlimited projects</li>
            <li>✔ 50 team members</li>
            <li>✔ Advanced task management</li>
            <li>✔ Priority email support</li>
            <li>✔ Custom integrations</li>
            <li>✔ Access to beta features</li>
          </ul>
          <button className="bg-[#FFD966] text-[#0B2F6A] font-semibold rounded-md px-6 py-2 w-full hover:bg-[#e6c85a] transition">
            Get Started
          </button>
        </div>
        {/* Organization Plan */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Organization</h3>
          <p className="text-4xl font-extrabold mb-4">$49.99</p>
          <ul className="flex-1 space-y-2 text-sm text-gray-700 mb-6">
            <li>✔ Unlimited projects</li>
            <li>✔ Unlimited team members</li>
            <li>✔ Enterprise-grade security</li>
            <li>✔ Dedicated account manager</li>
            <li>✔ Custom SLAs</li>
            <li>✔ Onboarding &amp; training</li>
          </ul>
          <button className="bg-[#3B82F6] text-white font-semibold rounded-md px-6 py-2 w-full hover:bg-[#2563eb] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
