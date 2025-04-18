import React, { useState } from "react";

const Section1 = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleButtonClick = () => {
    if (!email) {
      setErrorMessage("Email cannot be empty.");
      clearErrorAfterDelay();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please check your email.");
      clearErrorAfterDelay();
      return;
    }

    alert(`Submitting email: ${email}`);
    setEmail("");
    setErrorMessage("");
  };

  const clearErrorAfterDelay = () => {
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  return (
    <div className="px-5 py-14 md:py-5 md:px-20 flex items-center flex-col-reverse md:flex-row gap-5">
      <div className="md:w-[50%] flex flex-col gap-5 text-center md:text-left">
        <h1 className="font-raleway font-bold text-2xl md:text-4xl  md:leading-12">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="font-opensans font-normal text-[16px]">
          Fylo stores your most important files in one secure location. Access
          them whenever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="flex flex-col md:flex-row  gap-5">
          <div>
            {" "}
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`py-3 px-2 w-full outline-none border rounded-sm ${
                errorMessage ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errorMessage && (
              <p className="text-red-500 font-opensans font-normal text-sm">
                {errorMessage}
              </p>
            )}
          </div>

          <button
            className="text-white font-semibold font-raleway cursor-pointer  bg-[hsl(224,93%,58%)] px-10 h-[50px] rounded-sm"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="h-[50vh] md:h-full md:w-[50%] ">
        <img src="/images/illustration-1.svg" alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Section1;
