
import Banner from './Banner'
import MovieCard from './MovieCard'
import { useState } from 'react'
function Movies({handlewatchlist ,handleremove,watchlist}) {
const[search,setsearch]=useState('')


function handlesearch(e){
  setsearch(e.target.value);

}
  return (
    <>
    <div>
        <Banner search={search} handlesearch={handlesearch}/>
      <div className='text-center p-6 text-2xl font-bold' >Trending Movies</div>
      <div>
        <MovieCard handlewatchlist={handlewatchlist} handleremove={handleremove} watchlist={watchlist} search={search}/>
      
          
      </div>
    </div>
    </>
  )
}

export default Movies
