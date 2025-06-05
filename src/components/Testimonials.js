import React from 'react';

function Testimonials() {
  return (
    <div className="bg-white min-h-screen text-[#0B2F6A]">
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <h2 className="text-center text-3xl font-bold mb-8">
          What Our Clients{' '}
          <span className="font-extrabold underline decoration-[#FFD966] decoration-2 underline-offset-4">
            Says
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col">
            <i className="fas fa-quote-left text-[#3B82F6] text-3xl mb-4"></i>
            <p className="text-sm text-gray-700 flex-1 mb-4">
              Whitepace has transformed the way our team collaborates. The intuitive interface and powerful features make project management a breeze.
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Photo of John Doe, a client"
                className="w-12 h-12 rounded-full"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/087129ac-13df-4c8d-1f4e-0ebd90bc86df.jpg"
                width="48"
              />
              <div>
                <p className="font-semibold text-[#0B2F6A]">John Doe, CEO</p>
                <p className="text-xs text-gray-500">Acme Corp</p>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[#3B82F6] text-white rounded-lg p-6 shadow-lg flex flex-col">
            <i className="fas fa-quote-left text-white text-3xl mb-4"></i>
            <p className="text-sm flex-1 mb-4">
              The collaboration tools in Whitepace have helped our remote team stay connected and productive. Highly recommend!
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Photo of Jane Smith, a client"
                className="w-12 h-12 rounded-full"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/2acba3b6-bc77-4d1c-db43-ceb615839f96.jpg"
                width="48"
              />
              <div>
                <p className="font-semibold">Jane Smith, CTO</p>
                <p className="text-xs">Tech Solutions</p>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[#3B82F6] text-white rounded-lg p-6 shadow-lg flex flex-col">
            <i className="fas fa-quote-left text-white text-3xl mb-4"></i>
            <p className="text-sm flex-1 mb-4">
              Whitepace's customization options allowed us to tailor the platform to our unique workflow. It's been a game changer.
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Photo of Mark Brown, a client"
                className="w-12 h-12 rounded-full"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/d6a141a7-22ec-4cee-6e0f-ce97291d684a.jpg"
                width="48"
              />
              <div>
                <p className="font-semibold">Mark Brown, PM</p>
                <p className="text-xs">Creative Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
