import { links } from "../assets/constants";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import { GiMusicSpell } from "react-icons/gi";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const NavLinks = ({ handleClick, isShrink }) => {
  return (
    <div className="mt-4">
      {links.map((item) => {
        return (
          <NavLink
            key={item.name}
            to={item.to}
            className={`flex flex-row text-slate-700 py-4 text-base smooth-transition ${
              !isShrink || "w-fit"
            }  hover:scale-105 items-center active:bg-black rounded-2xl`}
            onClick={() => handleClick && handleClick()}
          >
            <item.icon className="text-slate-700 mx-4" />
            <span
              className={
                isShrink ? `hidden` : "" + ` smooth-transition md:inline-block`
              }
            >
              {item.name}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};
const Sidebar = () => {
  const [isShrink, setIsShrink] = useState(false);
  const handleShrinkSide = () => {
    setIsShrink(!isShrink);
  };
  return (
    <div
      className={`smooth-transition  flex flex-col bg-white  h-screen pt-8 px-5 gap-8 ${
        isShrink ? `w-1/12` : `w-2/12`
      }`}
    >
      <div className={`flex justify-between items-center`}>
        <div className=" flex gap-2">
          <span className="h-3 w-3 inline-block rounded-full bg-red"></span>
          <span className="h-3 w-3 inline-block rounded-full bg-yellow"></span>
          <span className="h-3 w-3 inline-block rounded-full bg-green"></span>
        </div>

        {isShrink ? (
          <AiOutlineMenuUnfold
            onClick={handleShrinkSide}
            size={22}
            color="gray"
            className="hover:fill-black cursor-pointer"
          />
        ) : (
          <AiOutlineMenuFold
            onClick={handleShrinkSide}
            size={22}
            color="gray"
            className="hover:fill-black cursor-pointer"
          />
        )}
      </div>
      <div className="flex items-center gap-2">
        <GiMusicSpell className=" text-[#EFB35F] " size={24} />
        <span className={`${isShrink ? "hidden" : "text-2xl "} `}>
          <span className="text-2xl text-[#EFB35F]">Moon</span>Music
        </span>
      </div>
      <NavLinks isShrink={isShrink} />
    </div>
  );
};

export default Sidebar;
