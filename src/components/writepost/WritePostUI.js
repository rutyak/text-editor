import React, { useState, useRef } from "react";
import { Plus } from "lucide-react"; 
import Header from "./Header";
import { GrFormSchedule } from "react-icons/gr";
import { GoPaperAirplane } from "react-icons/go";

const WritePostUI = ({ menuToggle, setMenuToggle, setEditorContent }) => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const editorRef = useRef(null);

  const handleInputChange = (e) => {
    setEditorContent(e.target.innerHTML);
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    if (range && !selection.isCollapsed) {
      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top - 40,
        left: rect.left + rect.width / 2,
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
  };

  const applyFormat = (command) => {
    document.execCommand(command, false, null);
  };

  const addNewLine = () => {
    if (editorRef.current) {
      const newLine = document.createElement("div");
      newLine.innerHTML = "<br/>";
      editorRef.current.appendChild(newLine);
      newLine.focus();
    }
  };

  return (
    <div className="w-[42%] ml-[16%] px-1 h-screen flex flex-col justify-center items-center bg-gray-100 space-y-8 mobile:h-auto mobile:w-[100%] md:h-screen xl:w-[42%]">
      <div className="w-full h-screen mobile:h-auto mobile:mb-2 md:h-screen">
        <Header menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
        <div>
          <div className="relative">
            <div
              contentEditable
              ref={editorRef}
              className="w-full h-[520px] resize-none border text-base mb-1 bg-white pl-[65px] px-4 py-2 mobile:h-[400px] md:h-[515px]"
              onInput={handleInputChange}
              onMouseUp={handleTextSelection}
              onKeyUp={handleTextSelection}
              data-placeholder="Write your post here..."
            ></div>
            <button
              className="absolute top-40 left-2 flex text-[20px] items-center space-x-2 px-2 py-2 text-black rounded-full border hover:bg-gray-300"
              onClick={addNewLine}
            >
              <Plus className="w-6 h-6 text-blue-700" />
            </button>
          </div>
          {showToolbar && (
            <div
              className="absolute bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-4"
              style={{
                position: "absolute",
                top: `${toolbarPosition.top}px`,
                left: `${toolbarPosition.left}px`,
                transform: "translate(-50%, -100%)",
              }}
            >
              <button
                className="flex items-center justify-center w-8 h-8 text-black rounded-full hover:bg-gray-100 focus:outline-none"
                onClick={() => applyFormat("bold")}
                title="Bold"
              >
                <b>B</b>
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 text-black rounded-full hover:bg-gray-100 focus:outline-none"
                onClick={() => applyFormat("italic")}
                title="Italic"
              >
                <i>I</i>
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 text-black rounded-full hover:bg-gray-100 focus:outline-none"
                onClick={() => applyFormat("underline")}
                title="Underline"
              >
                <u>U</u>
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 text-black rounded-full hover:bg-gray-100 focus:outline-none"
                onClick={() => applyFormat("strikeThrough")}
                title="Strikethrough"
              >
                <s>S</s>
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 text-black rounded-full hover:bg-red-100 focus:outline-none"
                onClick={() => setShowToolbar(false)}
                title="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t bg-white px-4 py-3 mobile:px-3 mobile:py-2 md:px-2 md:py-1 lg:px-4 lg:py-3">
            <button className="gap-3 px-4 py-2 border rounded-full mobile:gap-1 mobile:text-sm mobile:px-2 mobile:py-1 md:text-md md:gap-3 md:px-3 md:py-2 lg:px-4 lg:py-2">
              Save As Draft
            </button>
            <div className="flex space-x-2">
              <button className="flex justify-center items-center gap-3 px-4 py-2 border rounded-full mobile:gap-1 mobile:text-sm mobile:px-2 mobile:py-1 md:text-md md:gap-3 md:px-3 md:py-2 lg:px-4 lg:py-2">
                <GrFormSchedule /> Schedule
              </button>
              <button className="flex justify-center items-center gap-3 px-4 py-2 bg-blue-500 text-white rounded-full mobile:gap-1 mobile:text-sm mobile:px-2 mobile:py-1 md:text-md md:gap-3 md:px-3 md:py-2 lg:px-4 lg:py-2">
                Publish <GoPaperAirplane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePostUI;
