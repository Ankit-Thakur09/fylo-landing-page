import React from 'react'

const Navbar = () => {
  return (
    <div className="flex px-5 py-5 md:px-20 md:py-10 font-raleway  justify-between items-center">
      <div className="w-20 md:w-32">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex gap-5 md:gap-10 text-gray-500">
        <div>Feature</div>
        <div>Team</div>
        <div> Sign In</div>
      </div>
    </div>
  );
}

export default Navbar