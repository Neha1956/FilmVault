import React from "react";
function Button({ setfiltertype, filtertype }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 md:gap-8 mb-4 md:mt-6 justify-center">
        <div className="">
          <button
            onClick={() => setfiltertype("all")}
            className={`bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600  w-[6rem] h-[3rem] mt-1 ${
              filtertype === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            All
          </button>
        </div>
        <div className="">
          <button
            onClick={() => setfiltertype("movie")}
            className={`bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600  w-[6rem] h-[3rem] mt-1  ${
              filtertype === "movie"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            Movie
          </button>
        </div>
        <div className="  ">
          <button
            onClick={() => setfiltertype("series")}
            className={`bg-gray-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-1 w-[6rem] h-[3rem]  ${
              filtertype === "series"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            Series
          </button>
        </div>
        <div className="">
          <button
            onClick={() => setfiltertype("game")}
            className={`bg-gray-500 text-white px-3 py-1 rounded hover:bg-blue-600 w-[6rem] h-[3rem] mt-1  ${
              filtertype === "game"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            Game
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
