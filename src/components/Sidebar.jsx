import { links } from "../assets/constants";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { NavLink } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { GiMusicSpell } from "react-icons/gi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-4">
    {links.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row text-slate-700 py-4 text-base items-center active:bg-black rounded-2xl"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="text-slate-700 mx-4" />
          {item.name}
        </NavLink>
      );
    })}
  </div>
);
const Sidebar = () => {
  return (
    <div className=" flex flex-col bg-white w-1/5 h-100 pt-8 px-5 gap-8">
      <div className="flex justify-between items-center">
        <div className=" flex gap-2">
          <span className="h-3 w-3 inline-block rounded-full bg-red"></span>
          <span className="h-3 w-3 inline-block rounded-full bg-yellow"></span>
          <span className="h-3 w-3 inline-block rounded-full bg-green"></span>
        </div>
        <MdMenuOpen size={22} color="gray" />
      </div>
      <div className="flex items-center gap-2">
        <GiMusicSpell className=" text-[#EFB35F] " size={24} />
        <span className="text-2xl ">
          <span className="text-2xl text-[#EFB35F]">Moon</span>Music
        </span>
      </div>
      <NavLinks />
    </div>
  );
};

export default Sidebar;
