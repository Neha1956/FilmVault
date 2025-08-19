import React from 'react'

function Banner({handlesearch,search}) {
  return (
    <>
    <div className="flex flex-col items-center relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRALOMXtDfbofzPVA-w_tdgo7gKf4A6HqlEw&s"
        alt="Banner"
        className="w-full w-full h-[20vh] sm:h-[35vh] md:h-[45vh] lg:h-[55vh] bg-contain bg-no-repeat bg-center flex items-end"
      />
       <div className="absolute bottom-0 text-center p-4">
         <div className="flex justify-center mb-6  text-black font-bold ">
        <input
        onChange={handlesearch}
        value={search}
          type="text"
          placeholder="Search Movies"
          className="bg-gray-400/80 shadow rounded-lg  w-[12rem] md:w-[17rem] p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
       <div className="absolute bottom-0 w-full  bg-gray-400/20 text-white text-2xl font-bold text-center  mt-2">
         Piculiar Children
       </div>
       
        
      </div>
       </div>
    </>
    
  )
}

export default Banner
