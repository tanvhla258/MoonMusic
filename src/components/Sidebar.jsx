import { links } from "../assets/constants";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { GiMusicSpell } from "react-icons/gi";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(() => window.location.pathname);
  console.log(activeLink);
  return (
    <div className="mt-4 w-full">
      <div className="flex flex-col gap-3">
        {links.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.to}
              className={`${
                item.to === activeLink ? "bg-black text-white" : ""
              } flex cursor-pointer self-center w-fit md:w-full flex-row text-slate-700 py-4 text-base smooth-transition   hover:scale-105 items-center  rounded-2xl`}
              onClick={() => {
                setActiveLink((current) => item.to);
              }}
            >
              <item.icon
                className={`${
                  item.to === activeLink ? "bg-black text-white" : ""
                }text-slate-700 mx-4`}
              />
              <span className={`hidden smooth-transition md:inline-block`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
const Sidebar = () => {
  return (
    <div
      className={`flex smooth-transition md:px-5 px-2 items-center md:items-start  flex-col bg-white  h-screen pt-8  gap-8 
       w-2/12`}
    >
      <div className={`flex justify-between items-center`}>
        <div className=" flex gap-2">
          <span className="h-3 w-3 inline-block rounded-full bg-red"></span>
          <span className="h-3 w-3 inline-block rounded-full bg-yellow"></span>
          <span className="h-3 w-3 inline-block rounded-full bg-green"></span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <GiMusicSpell
          className="hidden md:inline-block text-[#EFB35F] "
          size={24}
        />
        <span className={`"text-2xl `}>
          <span className="text-2xl text-[#EFB35F]">Moon</span>Music
        </span>
      </div>
      <NavLinks />
    </div>
  );
};

export default Sidebar;
