import React from "react";
import { Settings, Zap } from "lucide-react";
import { BsStars } from "react-icons/bs";
import { VscLightbulb } from "react-icons/vsc";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import { TiSocialDribbbleCircular } from "react-icons/ti";

const Sidebar = ({menuToggle}) => {
  const menuItems = [
    { name: "Post Generator", icon: <BsStars /> },
    { name: "Ideas Generator", icon: <VscLightbulb /> },
    { name: "Carousel Maker", icon: <FaGripLinesVertical /> },
    { name: "Posts", icon: <FaCopy /> },
    { name: "Content Inspiration", icon: <MdOutlineContentPasteSearch /> },
    { name: "Posts for You", icon: <GoGoal /> },
    { name: "Schedule", icon: <SlCalender /> },
  ];

  const Button = ({ children, className, ...props }) => (
    <button
      className={`py-2 px-4 rounded-lg shadow-sm text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const ProgressBar = ({ value, max, className }) => (
    <div className={`relative ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <div className="w-[16%] bg-white h-screen p-4 flex flex-col mobile:hidden xl:block">
      <div>
        <Button className="w-full bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 mt-[66px]">
          <span className="text-sm py-1 flex justify-center items-center gap-3 mobile:text-[10px] md:text-[12px] lg:text-sm">
            <FiEdit /> Write Post
          </span>
        </Button>

        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-gray-100 rounded-md"
            >
              <span>{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 ml-3 fixed bottom-3">
        <button className="flex justify-start items-center gap-3 text-gray-700 text-sm font-medium hover:underline">
        <GiSettingsKnobs /> Preferences
        </button>
        <button className="flex justify-start items-center gap-3 text-gray-700 text-sm font-medium hover:underline">
        <TiSocialDribbbleCircular />  Feature Request
        </button>
        
        <div className="border rounded-lg w-[100%] px-3 py-2">
        <div className="mt-1">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 text-sm font-medium">Words generated</p>
            <p className="text-gray-500 text-sm font-medium">1.25k / 50k</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Monthly usage resets in 29 days
          </p>
        </div>
        <button className="w-full mt-1 border rounded-xl bg-white text-black text-sm font-medium py-2 rounded-lg">
          Upgrade Plan
        </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
