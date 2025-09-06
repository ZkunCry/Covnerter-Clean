import React from "react";
import Key from "./Key";
import Delete from "../../assets/delete.png";
import { keys } from "../../config/keys";

interface KeypadProps {
  onKeyPress: () => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  return (
    <div className="w-full min-w-[388px] grid grid-cols-3 gap-2">
      <div className="flex w-full col-span-3 gap-2 h-[75px] ">
        <Key onClick={onKeyPress} value="AC" />
        <Key onClick={onKeyPress} imageSrc={Delete} value="CE" />
      </div>

      {keys.map((key) => (
        <Key key={key} onClick={() => onKeyPress(key)} value={key} />
      ))}
      <div className="flex w-full col-span-2 gap-2 h-[75px] ">
        <Key onClick={onKeyPress} value="0" />
      </div>
      <div className="col-span-1 flex w-full gap-2 h-[75px] ">
        <Key onClick={onKeyPress} value="," />
      </div>
    </div>
  );
};

export default Keypad;
