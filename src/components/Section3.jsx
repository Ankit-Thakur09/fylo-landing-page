import React, { useState } from 'react'

const Section3 = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailRegex.test(email));
    if (!emailRegex.test(email)) {
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="bg-[hsl(238,22%,44%)] text-white px-6 py-12 md:px-20 md:py-16">
      <div className=" mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get early access today
          </h2>
          <p className="font-opensans text-base text-[#e0e0e0] ">
            It only takes a minute to sign up and our free starter tier is{" "}
            <br className="hidden lg:block" />
            extremely generous. If you have any questions, our support team{" "}
            <br className="hidden lg:block" />
            would be happy to help you.
          </p>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full max-w-md flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johnappleseed@mail.com"
            className={`py-3 px-4 rounded-sm outline-none border ${
              error
                ? "border-red-400 shadow-red-300 shadow-sm"
                : "border-gray-200"
            }`}
          />
          {error && (
            <span className="text-sm text-red-300">
              Please check your email
            </span>
          )}
          <button
            onClick={handleSubmit}
            className="bg-[#6c9eff] hover:bg-[#5a86d4] text-white font-semibold py-3 px-4 rounded-md mt-1"
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3