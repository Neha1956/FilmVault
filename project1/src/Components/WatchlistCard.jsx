import React from 'react'

function WatchlistCard({finalList, handleremove,search}) {
  return (
    <>
     <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6">
        {finalList.filter((movies)=>movies.Title.toLowerCase().includes(search.toLowerCase())).map((movies, index) => (
          <div
            key={index}
            className="border-gray-200  rounded-lg  p-4 shadow transition"
          >
             <div className="mb-">
             
              <div>
                <img
                  className="w-[15rem] h-[10rem]"
                  src={movies.Poster}
                  alt="poster"
                />
              </div>
            </div>
            <div className="flex">
              <span className="font-semibold">Name:</span>
              <div className="text-gray-700 pl-4">{movies.Title}</div>
            </div>

            <div className="flex">
              <span className="font-semibold">Year:</span>
              <div className="text-gray-700 pl-4">{movies.Year}</div>
            </div>

           

            <div className="flex">
              <span className="font-semibold">Type:</span>
              <div className="text-gray-700 pl-4">{movies.Type}</div>
            </div>

           

            <div>
             
              <div className='flex justify-center'>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-1" onClick={()=>handleremove(movies)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default WatchlistCard
