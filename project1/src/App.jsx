import Movies from "./Components/Movies"
import { ThemeContext } from "./ContextAPI/ThemeContext"
import { useEffect, useState,useContext } from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import WatchList from "./Components/WatchList"
function App() {
//theme
  const{theme}=useContext(ThemeContext);
const [watchlist,setwatchalist]=useState(()=>{
 try {
    const saved = localStorage.getItem("new_watchlist");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    return [];
  }
});
useEffect(()=>{
localStorage.setItem('new_watchlist',JSON.stringify(watchlist));
},[watchlist])

let handlewatchlist=(movieObj)=>{
  const newwatchlist=[...watchlist,movieObj];

  setwatchalist(newwatchlist);
//  console.log(watchlist);
}

let handleremove=(movieObj)=>{
  const filterwatchlist=watchlist.filter((movie)=>{
    // prefer imdbID if available, otherwise fallback to Title
    if (movie.imdbID && movieObj.imdbID) {
      return movie.imdbID !== movieObj.imdbID;
    }
    return movie.Title !== movieObj.Title;
   
  })
   setwatchalist(filterwatchlist)
  // localStorage.setItem('new_watchlist',JSON.stringify(filterwatchlist));
  
}


  return (
    <>
      <BrowserRouter>
      <div className={`min-h-screen ${theme===true?'bg-black text-white':'bg-white text-black'}`}>
            <Navbar/>
     
        <Routes>
          <Route path="/" element={<Movies handlewatchlist={handlewatchlist} handleremove={handleremove} watchlist={watchlist}/>}/>
           <Route path="/watchlist" element={<WatchList watchlist={watchlist} handleremove={handleremove}/>}/>
        </Routes>
        </div>
            </BrowserRouter>
    </>
  )
}

export default App
