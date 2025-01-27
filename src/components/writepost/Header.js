import React from "react";
import {
  FiBold,
  FiItalic,
  FiSmile,
  FiLink,
  FiImage,
  FiPaperclip,
} from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  const iconStyle = "w-5 h-5 mobile:w-4 mobile:h-4 md:w-5 md:h-5";

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-1 bg-white px-4 py-4">
        <h2 className="text-xl font-semibold  mobile:text-sm md:text-lg lg:text-xl">
          Write Post
        </h2>
        <div className="flex gap-10 items-center">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 text-sm font-medium mobile:ml-0.5 mobile:px-1 mobile:py-0.5 md:px-3 md:py-1.5">
            <span className="mobile:text-[10px] md:text-[12px] lg:text-lg">
              Check Score
            </span>
          </button>{" "}
          |
          <div className="flex items-center gap-2">
            <RxAvatar className="w-10 h-10 mobile:w-6 mobile:h-6 md:w-10 md:h-10" />
          </div>
          <GiHamburgerMenu className="mobile:w-6 mobile:h-6 md:w-10 md:h-10 lg:hidden" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-1 bg-white px-4 py-3">
        <div className="flex items-center gap-3 text-gray-600">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiBold className={iconStyle} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiItalic className={iconStyle}  />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiLink className={iconStyle}  />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiSmile className={iconStyle}  />
          </button>{" "}
          |
          <div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <IoIosCopy className={iconStyle}  />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiImage className={iconStyle} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiPaperclip className={iconStyle}  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
