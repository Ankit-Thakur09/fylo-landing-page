import React from "react";

const Section2 = () => {
  return (
    <div className="relative bg-[#f8f8fe] mt-10">
      <div className="bg-white">
        <div className="">
          <img
            src="/images/bg-curve-desktop.svg"
            alt=""
            className="curve-desktop"
          />
        </div>
      </div>

      {/* Section content */}
      <div className="px-5 py-16 md:px-20 flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0">
        {/* Left: Text */}
        <div className="md:w-[50%] flex flex-col gap-5 text-center md:text-left">
          <h1 className="font-raleway font-bold text-2xl md:text-4xl leading-snug">
            Stay productive, wherever you are
          </h1>
          <p className="font-opensans text-base text-gray-700">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="font-opensans text-base text-gray-700">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a
            href="#"
            className="text-[hsl(170,45%,43%)] underline text-sm font-opensans flex items-center gap-1"
          >
            See how Fylo works
            <img src="/images/icon-arrow.svg" alt="arrow" className="w-3" />
          </a>

          {/* Testimonial */}
          <div className="bg-white shadow-md p-5 rounded-md mt-6 text-left max-w-[400px] mx-auto md:mx-0">
            <p className="text-sm font-opensans text-[16px] mb-4 text-gray-500 leading-[]">
              <img src="/images/icon-quotes.svg" alt="quote" className="py-4" />
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.”
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/images/avatar-testimonial.jpg"
                alt="Kyle Burton"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold">Kyle Burton</p>
                <p className="text-xs text-gray-500">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-[50%]">
          <img
            src="/images/illustration-2.svg"
            alt="illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
