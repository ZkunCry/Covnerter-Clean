import React from "react";

interface KeyProps {
  value: string;
  onClick: () => void;
  imageSrc?: string;
}

const Key: React.FC<KeyProps> = ({ value, onClick, imageSrc }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center text-[1.875rem] 
      w-full p-4 bg-white  rounded-lg text-lg font-medium hover:bg-gray-100  shadow-[0_0_35px_2px_#0C28361F]"
    >
      {imageSrc ? <img className="" src={imageSrc} alt={value} /> : value}
    </button>
  );
};

export default Key;
