import React from "react";

const Loader = () => {
  return (
    <div className="relative flex items-center justify-start w-16 h-16">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex items-center justify-start ${
            index % 2 === 0 ? `rotate-[${45 * index}deg]` : `rotate-[${45 * index}deg]`
          }`}
        >
          <div
            className="w-[20%] h-[20%] rounded-full bg-[#183153] opacity-50 animate-pulse shadow-[0_0_20px_rgba(18,31,53,0.3)]"
            style={{
              animationDelay: `-${(0.875 - index * 0.125).toFixed(3)}s`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
