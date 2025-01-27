import React, { useState } from "react";
import { Heart, MessageCircle, Share2, Send } from "lucide-react";
import { FaMobileAlt, FaTabletAlt, FaDesktop } from "react-icons/fa";
import DeviceIcon from "./DeviceIcon";

const PostPreview = ({ content }) => {
  const [selectedDevice, setSelectedDevice] = useState("desktop");

  const cardButtonStyle = `mobile:hidden md:block ${
    selectedDevice === "mobile" ? "xl:hidden" : "xl:block"
  }`;

  const Button = ({ children, className, ...props }) => (
    <button
      className={`py-2 px-4 rounded-lg shadow-sm text-sm font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const Avatar = ({ className }) => (
    <div className={`h-12 w-12 rounded-full bg-gray-300 ${className}`} />
  );

  const Card = ({ children, className }) => (
    <div className={`bg-white shadow-md rounded-lg ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children, className }) => (
    <div className={`p-4 border-b ${className}`}>{children}</div>
  );

  const CardContent = ({ children, className }) => (
    <div className={`p-4 ${className}`}>{children}</div>
  );

  const previewStyles = {
    mobile: "w-[360px]",
    tablet: "w-[490px]",
    desktop: "w-[590px]",
  };

  console.log("selectedDevice", previewStyles[selectedDevice]);

  return (
    <div className="w-[42%] flex flex-col items-center h-screen bg-gray-100 space-y-4 mobile:w-[100%] xl:w-[42%]">
      <div className="w-full flex justify-between items-center bg-white px-4 py-[22px]">
        <h2 className="text-lg font-semibold">Post Preview</h2>

        <div className="flex items-center space-x-4 mobile:hidden lg:block lg:flex lg:items-center lg:space-x-4">
          <p>Devices: </p>
          <DeviceIcon
            icon={<FaMobileAlt />}
            label="Mobile"
            selected={selectedDevice === "mobile"}
            onClick={() => setSelectedDevice("mobile")}
          />
          <DeviceIcon
            icon={<FaTabletAlt />}
            label="Tablet"
            selected={selectedDevice === "tablet"}
            onClick={() => setSelectedDevice("tablet")}
          />
          <DeviceIcon
            icon={<FaDesktop />}
            label="Desktop"
            selected={selectedDevice === "desktop"}
            onClick={() => setSelectedDevice("desktop")}
          />
        </div>
      </div>

      <div className={`flex justify-center items-center`}>
        <Card className={`w-full ${previewStyles[selectedDevice]}`}>
          <CardHeader>
            <h3 className="text-lg font-bold">Post Preview</h3>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-6">
              <Avatar />
              <div>
                <h4 className="text-sm font-bold">Cody Fisher</h4>
                <p className="text-xs text-gray-500">
                  UI/UX Design | Web & Mobile Design | Front-end | UI Developer
                </p>
                <p className="text-xs text-gray-400">Now • </p>
              </div>
            </div>

            <div
              className="text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="text-sm font-bold text-gray-700">88</span>
                <Heart className="w-4 h-4 text-red-500 ml-1" />
              </div>
              <span className="text-xs text-gray-500">4 comments</span>
              <span className="text-xs text-gray-500">1 repost</span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <Button className="flex items-center space-x-2 text-gray-700">
                <Heart className="w-4 h-4" />
                <span className={cardButtonStyle}>Like</span>
              </Button>
              <Button className="flex items-center space-x-2 text-gray-700">
                <MessageCircle className="w-4 h-4" />
                <span className={cardButtonStyle}>Comment</span>
              </Button>
              <Button className="flex items-center space-x-2 text-gray-700">
                <Share2 className="w-4 h-4" />
                <span className={cardButtonStyle}>Share</span>
              </Button>
              <Button className="flex items-center space-x-2 text-gray-700">
                <Send className="w-4 h-4" />
                <span className={cardButtonStyle}>Send</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostPreview;
