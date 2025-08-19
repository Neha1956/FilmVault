import React from "react";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;
import  { useEffect, useState } from 'react'
import Pagination from './Pagination'
function MovieCard({handlewatchlist,handleremove,watchlist,search}) {
  const [data,setData]=useState([]);
  const [count,setcount]=useState(1);
  const [loading,setloading]=useState(true);
  useEffect(()=>{
     setloading(true); 
     const searchitem=search.trim()===""?"Batman":search;
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchitem}&page=${count}`
     )
      .then((res) => res.json())
      .then((json) => {
       // console.log('api response',json.Search);
        setData(json.Search||[]);
       
           setTimeout(() => {
          setloading(false);
        }, 1000); 
      
        
      })
      .catch((err) => console.error(err));

  },[search,count]);
 // console.log (" Data",data);

  function increment(){
    setcount(count+1);
  }
    function decrement(){
      if(count>1)
   {
     setcount(count-1);
   }
  }



function doesContain(movieObj){
for(let i=0; i<watchlist.length; i++){
  if(watchlist[i].imdbID===movieObj.imdbID){
    return true;
  }
 
}
 return false;
}
  return (
    <>
    {loading?(
       <div className="grid place-items-center py-12">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
  </div>
    ):(
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8  gap-6 ml-4 ">
        {data.filter((item)=>item.Title.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
          
          <div
            key={index}
            className="  hover:scale-105 duration-300 hover:cursor-pointer shadow relative  "
          >
            <img
              src={item.Poster}
              className=" bg-center bg-cover rounded-t-lg "
              alt={item.title}
            />
            {doesContain(item)?(<div className="absolute top-0 right-0"  onClick={()=>handleremove(item)}>❌</div>):(
                          <div className="absolute top-0 right-0" onClick={()=>handlewatchlist(item)}>😍</div>

            )}

             <div className=" text-white font-bold  text-center bg-gray-900/60 italic">{item.Title}</div>
            
            <div className=" text-black font-bold  text-center bg-gray-900/60 ">{item.overview}</div>
          </div>
          
        ))}
        
      </div>
      )}

      <div>
          <Pagination count={count} onIncrement={increment} ondecrement={decrement}/>
      </div>
    </>
  );
}

export  default MovieCard;
