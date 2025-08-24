import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("black");
  const handleClick = (bgColor) => {
    setBgColor(bgColor);
  };

  return (
    <>
      <div style={{ backgroundColor: bgColor }} className="h-screen w-full">
        <div className="flex justify-center items-center inset-x-0 bottom-15 fixed gap-2 bg-white rounded-full py-2 px-4 right-30 left-31">
          <button
            className="bg-red-500 hover:bg-red-600 px-15 py-3 rounded-full border-black text-white text-[18px]  cursor-pointer"
            onClick={() => handleClick("red")}
          >
            Red
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("blue")}
          >
            Blue
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("green")}
          >
            Green
          </button>
          <button
            className="bg-[#10002b] hover:bg-[#10002b] px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("#10002b")}
          >
            Purple
          </button>
          <button
            className="bg-[#640d14] hover:bg-[#640d14] px-15 py-3 rounded-full border-black text-white text-[18px]  cursor-pointer"
            onClick={() => handleClick("#640d14")}
          >
            Red
          </button>
          <button
            className="bg-[#03045e] hover:bg-[#03045e] px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("#03045e")}
          >
            Ocean Blue
          </button>
          <button
            className="bg-[#333d29] hover:bg-[#333d29] px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("#333d29")}
          >
            Wood Green
          </button>
          <button
            className="bg-[#240046] hover:bg-[#240046] px-15 py-3 rounded-full border-black text-white text-[18px] cursor-pointer"
            onClick={() => handleClick("#240046")}
          >
            Violet
          </button>
          
        </div>
      </div>
    </>
  );
}

export default App;
