import React from 'react';
import { useState } from 'react';
import WatchlistCard from './WatchlistCard';
import Button from './Button';
function WatchList({watchlist,handleremove}) {
/*  const movies = [
    {
      name: 'Lagaan',
      rating: 9.5,
      popularity: 8.7,
      genre: 'Drama',
      poster: 'https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg'
    },
    {
      name: '3 Idiots',
      rating: 9.2,
      popularity: 9.0,
      genre: 'Comedy/Drama',
      poster: 'https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg'
    }
  ];*/
   const [sortedList, setSortedList] = useState(watchlist);
  const [search, setsearch]=useState('')
  const[filtertype,setfiltertype]=useState('all');
  function handlesearch(e){
    setsearch(e.target.value);

  }

  function incrementfun(){
    const sorted = [...sortedList].sort((a, b) => a.Year - b.Year); 
      setSortedList(sorted); 
      console.log(sorted)
    }
  
    function decrementfun(){
    const sorted = [...sortedList].sort((a, b) => b.Year - a.Year); 
     console.log(sorted)
      setSortedList(sorted); 
    }


    const filterlist=sortedList.filter((movie)=>
    filtertype==="all"?true:movie.Type===filtertype );
    console.log(filterlist);

    const finalList = filterlist.filter((movie) =>
  movie.Title.toLowerCase().includes(search.toLowerCase())
);
  
  

  return (
    <div className="min-h-screen p-4">

      <Button setfiltertype={setfiltertype} filtertype={filtertype}/>
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
        onChange={handlesearch}
        value={search}
          type="text"
          placeholder="Search Movies"
          className="bg-gray-400 shadow rounded-lg w-[17rem] p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className='flex justify-center'>
        <div   onClick={decrementfun} className='cursor-pointer text-center  rounded-md text-white font-bold w-[35px] bg-blue-900/70  items-center mr-4'>New </div>
 <div onClick={incrementfun} className=' cursor-pointer ml-4 text-center  items-center rounded-md  font-bold text-white w-[30px] bg-blue-900/70'>Old </div>
      </div>

      {/* Responsive Cards */}
      <WatchlistCard search={search} handleremove={handleremove} finalList={finalList}/>
     
    </div>
  );
}

export default WatchList;
