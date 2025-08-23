import React, { useContext } from 'react'
import { ThemeContext } from '../ContextAPI/ThemeContext';
import icon from '../assets/video.png'
import {Link} from 'react-router-dom';

function Navbar() {
  const{theme,handlechange}=useContext(ThemeContext);
  return (
    <>
    <div className='w-full w-screen bg-pink-50  gap-2 md:gap-10 items-center flex pl-1 pr-2  md:pl-6 md:pr-6 p-4 shadow   '>
      <img src={icon} alt="react-icon" className='size-10 ' />
      <Link to="/" className='text-2xl text-blue-400 font-bold'>Movies</Link>
       <Link to="/watchlist" className='text-2xl text-blue-400 font-bold'>WatchList</Link>
        <div  onClick= {handlechange} className=" ml-auto  text-black cursor-pointer">
          {theme===true?(
            <span className='bg-gray-400 rounded px-2 py-1 '>🌤️</span>
          ):(
            <span className='bg-black rounded px-2 py-1'>🌙</span>
          )}        </div>
    </div>
    </>
  )
}

export default Navbar
