import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoIcon from '../assets/icons/LogoIcon.svg';
import LogoText from '../assets/icons/LogoText.svg';

import { RiCalendarEventFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaRegUser, FaTiktok, FaFacebook, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home', icon: <GoHomeFill /> },
    { to: '/teams', label: 'Teams', icon: <HiOutlineUserGroup /> },
    { to: '/events', label: 'Events', icon: <RiCalendarEventFill /> },
    { to: '/profile', label: 'Profile', icon: <FaRegUser /> },
    { to: '/quests', label: 'Quests', icon: <AiOutlineThunderbolt /> },
  ];

  const extras = [
    { to: '/questions-and-answers', label: 'Q&A', icon: <TbMessageCircleQuestion /> },
    { to: '/help-center', label: 'Help Center', icon: <FaRegQuestionCircle /> },
    { to: '/policies', label: 'Policies', icon: <LuShieldCheck /> }
  ];

  return (
    <>

      {/* ──────────────────────────────── */}
      {/*          MOBILE SIDEBAR         */}
      {/* ──────────────────────────────── */}
  
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
        onClick={() => setOpen(true)}
      >
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black"></div>
      </button>


      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-40 p-6 transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-3xl text-black font-bold"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        {/* Sidebar content  */}
        <div className="flex flex-col h-full justify-between">
          {/* Logo */}
          <div>
          <div className="flex items-center gap-2 mb-10">
            <img src={LogoIcon} alt="Logo" className="size-8" />
            <img src={LogoText} alt="Logo Text" className="h-7" />
          </div>

          {/* Links */}
          <div>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-4 text-lg font-[ApercuPro] text-[#707070] mb-6 hover:text-black  active:text-black"
                onClick={() => setOpen(false)}
              >
                {l.icon}
                {l.label}
              </Link>
            ))}
          </div>
          </div>

          {/* Extras */}
          <div>
          <div className="pt-6 border-t border-gray-300">
            {extras.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-4 text-lg font-[ApercuPro] text-[#707070] mb-6 hover:text-black  active:text-black"
                onClick={() => setOpen(false)}
              >
                {l.icon}
                {l.label}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto text-gray-400">
            <button className="bg-transparent border rounded-lg w-full mb-4 hover:text-black hover:border-black active:text-black active:border-black">
              Log Out
            </button>
            <div className="flex justify-between text-2xl mb-4">
              <FaTiktok />
              <FaFacebook />
              <FaYoutube />
              <FaInstagram />
              <FaDiscord />
            </div>
            <p className=" text-sm">© 2025 ITC. All rights reserved.</p>
          </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────── */}
      {/*         DESKTOP SIDEBAR         */}
      {/* ──────────────────────────────── */}
      <div className="hidden md:flex flex-col items-center justify-between w-[20%] h-full py-10 px-5 bg-white">
        {/* Content  */}
        <div className="w-full flex flex-col items-center  gap-4">
          <div className="flex items-center gap-2">
            <img src={LogoIcon} alt="Logo" className="size-8" />
            <img src={LogoText} alt="Logo Text" className="h-7" />
            <p className="text-gray-400 text-2xl">by ITC</p>
          </div>
          <div className='border-b border-[#ababab] py-8 w-[80%]'>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-2 font-[ApercuPro] text-lg text-[#707070] mb-4 hover:text-black hover:underline underline-offset-4"
              >
                {l.icon}
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      <div className='flex flex-col items-center'>
        <div className="w-[80%] pt-8  border-t border-[#ababab]">
          {extras.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="flex items-center gap-2 text-lg font-[ApercuPro] text-[#707070] mb-4 hover:text-black hover:underline underline-offset-4"
            >
              {l.icon}
              {l.label}
            </Link>
          ))}
        </div>

        <div className=' flex flex-col text-lg text-gray-400 font-[ApercuPro]'>
          <button className='bg-transparent border rounded-lg hover:text-black hover:border-black'>Log Out</button>
          <div className='flex gap-auto mt-2 mb-2 space-x-4 text-lg'>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className='border rounded-full p-2 hover:text-black hover:border-black'> <FaTiktok /> </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='border rounded-full p-2 hover:text-black hover:border-black'> <FaFacebook /> </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='border rounded-full p-2 hover:text-black hover:border-black'> <FaYoutube /> </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='border rounded-full p-2 hover:text-black hover:border-black'> <FaInstagram /> </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className='border rounded-full p-2 hover:text-black hover:border-black'> <FaDiscord /> </a>
          </div>
        </div>
        
        <p className='text-xs text-[#707070]'>© 2025 ITC. All rights reserved.</p>
      </div>
      </div>
    </>
  );
};

export default SideBar;
