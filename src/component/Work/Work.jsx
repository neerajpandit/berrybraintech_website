import React from 'react';
import what from '../../assets/what.webp';
const Work = () => {
  return (
    <div>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  What We Do ?
                </h2>

                <p>
                At BerryBrainTech, we empower entrepreneurs and business leaders to transform their ideas into cutting-edge software solutions tailored to diverse industries. Our team specializes in turning your vision into reality, whether you need a Minimum Viable Product (MVP), exceptional UX/UI design, comprehensive custom software development, or strategies to scale your business. Partner with us to innovate and elevate your market presence.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 sm:ml-20 lg:w-full lg:h-full"
            src={what}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
