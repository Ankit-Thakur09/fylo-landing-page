import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[hsl(243,87%,12%)] text-white px-6 py-16 md:px-20 flex flex-col gap-5">
      <img src="/images/logo.svg" alt="Fylo logo" className="w-24 " />
      <div className=" flex flex-col gap-10 md:gap-14">
        {/* Fylo Logo + Info */}
        <div className="flex flex-col md:flex-row gap-10 md:justify-between items-center">
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className=" space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <FaPhoneAlt />
                <span>+1-543-123-4567</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <FaEnvelope />
                <span>example@fylo.com</span>
              </div>
            </div>
            <div className="space-y-2">
              <p className="hover:text-[#6c9eff] cursor-pointer">About Us</p>
              <p className="hover:text-[#6c9eff] cursor-pointer">Jobs</p>
              <p className="hover:text-[#6c9eff] cursor-pointer">Press</p>
              <p className="hover:text-[#6c9eff] cursor-pointer">Blog</p>
            </div>
            <div className="space-y-2">
              <p className="hover:text-[#6c9eff] cursor-pointer">Contact Us</p>
              <p className="hover:text-[#6c9eff] cursor-pointer">Terms</p>
              <p className="hover:text-[#6c9eff] cursor-pointer">Privacy</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 justify-start  mt-4 md:mt-0">
              <a href="#">
                <FaFacebookF className="hover:text-[#6c9eff] border h-7 p-1 w-7 rounded-full" />
              </a>
              <a href="#">
                <FaTwitter className="hover:text-[#6c9eff] border h-7 p-1 w-7 rounded-full" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-[#6c9eff]  border h-7 p-1 w-7 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
