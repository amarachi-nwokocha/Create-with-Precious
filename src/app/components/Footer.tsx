'use client';

import Link from 'next/link';
import { FaTiktok } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#5B1E1B] text-white py-10 px-6 md:px-20 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Contact & Socials */}
        <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold mb-2">Reach Out To Me</h3>
          <p className="flex items-center gap-2 text-base">
            <MdOutlineEmail size={20} /> createwithprecious@gmail.com
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.linkedin.com/in/precious-adekola-0809b4102/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/createwithprecious_/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <RiInstagramLine size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@createwithprecious?_t=ZS-8zr5uh8b4Yz&_r=1"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <FaTiktok  size={24} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=2348131911308&text&type=phone_number&app_absent=0&wame_ctl=1&source_surface=23"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>

        {/* Branding */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-2">Create With Precious</h2>
          {/* <p className="text-lg leading-snug">
            Inspiring creativity through content, storytelling, and connection.
          </p> */}
         
        </div>
      </div>

      {/* Divider and Bottom Row */}
      <div className="w-full border-t border-black/30 mt-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base text-white px-2">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Create With Precious. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
