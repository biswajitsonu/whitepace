import React from 'react';

function Footer() {
  return (
<footer className="w-full px-6 sm:px-10 lg:px-16 pt-12 pb-8 bg-[#03407A] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-12 border-b border-[#0B4D8A] pb-10">
        <div className="space-y-4 max-w-[220px]">
          <div className="flex items-center space-x-2">
            <img
              alt="Whitepace logo icon, stylized W in white on blue background"
              className="w-6 h-6"
              height={24}
              src="https://i.postimg.cc/Tw4Hk3Rf/Logo-Icon.png"
              width={24}
            />
            <span className="font-extrabold text-white text-lg select-none">whitepace</span>
          </div>
          <p className="text-sm font-normal leading-6 max-w-[220px]">
            whitepace was created for
            <br />
            the new ways we live and
            <br />
            work. We make a better
            <br />
            workspace around the world
          </p>
        </div>
        <div className="space-y-3 max-w-[140px]">
          <h3 className="font-semibold text-white text-sm">Product</h3>
          <ul className="space-y-2 text-sm font-normal">
            <li>
              <a className="text-[#F9E79F] hover:underline" href="#">
                Overview
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Customer stories
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3 max-w-[160px]">
          <h3 className="font-semibold text-white text-sm">Resources</h3>
          <ul className="space-y-2 text-sm font-normal">
            <li>
              <a className="hover:underline" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Guides &amp; tutorials
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Help center
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3 max-w-[140px]">
          <h3 className="font-semibold text-white text-sm">Company</h3>
          <ul className="space-y-2 text-sm font-normal">
            <li>
              <a className="hover:underline" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Media kit
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-[220px]">
          <h3 className="font-extrabold text-white text-lg mb-3">Try It Today</h3>
          <p className="text-sm font-normal mb-6 max-w-[220px]">
            Get started for free. Add your
            <br />
            whole team as your needs grow.
          </p>
          <button
            className="bg-[#5B9BFF] rounded-lg px-8 py-3 text-white text-sm font-normal flex items-center space-x-2 hover:bg-[#4a7ee6] transition"
            type="button"
          >
            <span>Start today</span>
            <i className="fas fa-arrow-right text-sm"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between text-white text-sm font-normal pt-8">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <i className="fas fa-globe-americas text-base"></i>
          <span className="cursor-pointer select-none flex items-center space-x-1">
            <span>English</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </span>
        </div>
        <div className="flex space-x-8 mb-4 sm:mb-0">
          <a className="hover:underline" href="#">
            Terms &amp; privacy
          </a>
          <a className="hover:underline" href="#">
            Security
          </a>
          <a className="hover:underline" href="#">
            Status
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <span>©2021 Whitepace LLC.</span>
          <a aria-label="Facebook" className="hover:text-[#5B9BFF]" href="#">
            <i className="fab fa-facebook-f text-base"></i>
          </a>
          <a aria-label="Twitter" className="hover:text-[#5B9BFF]" href="#">
            <i className="fab fa-twitter text-base"></i>
          </a>
          <a aria-label="LinkedIn" className="hover:text-[#5B9BFF]" href="#">
            <i className="fab fa-linkedin-in text-base"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
