import React from 'react';

function Footer() {
  return (
    <div className="bg-[#0B2F6A] min-h-screen text-white">
      <footer className="max-w-7xl mx-auto px-6 sm:px-10 py-12 grid grid-cols-1 sm:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Whitepace</h3>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li><a className="hover:underline" href="#">About</a></li>
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><a className="hover:underline" href="#">Blog</a></li>
            <li><a className="hover:underline" href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li><a className="hover:underline" href="#">Project Management</a></li>
            <li><a className="hover:underline" href="#">Collaboration</a></li>
            <li><a className="hover:underline" href="#">Integrations</a></li>
            <li><a className="hover:underline" href="#">Customization</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li><a className="hover:underline" href="#">Help Center</a></li>
            <li><a className="hover:underline" href="#">Community</a></li>
            <li><a className="hover:underline" href="#">Developers</a></li>
            <li><a className="hover:underline" href="#">API Docs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-[#D1D5DB]">
            <li><a className="hover:underline" href="#">About Us</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
            <li><a className="hover:underline" href="#">Privacy Policy</a></li>
            <li><a className="hover:underline" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-semibold mb-4">Sign Up Today</h3>
            <button className="bg-[#FFD966] text-[#0B2F6A] font-semibold rounded-md px-6 py-2 w-full hover:bg-[#e6c85a] transition">
              Sign Up
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
