import React from "react";

const DeviceIcon = ({ icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer ${
        selected ? "text-blue-500" : "text-gray-500"
      }`}
    >
      <div className="text-2xl">{icon}</div>
    </div>
  );
};

export default DeviceIcon;
