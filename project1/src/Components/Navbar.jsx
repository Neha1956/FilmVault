import React from 'react'
import icon from '../assets/video.png'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='w-full w-screen bg-pink-50  gap-10 items-center flex pl-6 p-4 shadow   '>
      <img src={icon} alt="react-icon" className='size-10 ' />
      <Link to="/" className='text-2xl text-blue-400 font-bold'>Movies</Link>
       <Link to="/watchlist" className='text-2xl text-blue-400 font-bold'>WatchList</Link>
    </div>
    </>
  )
}

export default Navbar
