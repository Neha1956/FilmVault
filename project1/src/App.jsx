import Movies from "./Components/Movies"
import { useState } from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import WatchList from "./Components/WatchList"
function App() {
const [watchlist,setwatchalist]=useState(()=>{
 try {
    const saved = localStorage.getItem("new_watchlist");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Invalid JSON in localStorage:", error);
    return [];
  }
});


let handlewatchlist=(movieObj)=>{
  const newwatchlist=[...watchlist,movieObj];
localStorage.setItem('new_watchlist',JSON.stringify(newwatchlist));
  setwatchalist(newwatchlist);
//  console.log(watchlist);
}

let handleremove=(movieObj)=>{
  const filterwatchlist=watchlist.filter((movie)=>{
    return movie.imdbID!==movieObj.imdbID;
   
   
  })
   localStorage.setItem('new_watchlist',JSON.stringify(filterwatchlist));
   setwatchalist(filterwatchlist)
}

  return (
    <>
      <BrowserRouter>
       <Navbar/>
     
      
        <Routes>
          <Route path="/" element={<Movies handlewatchlist={handlewatchlist} handleremove={handleremove} watchlist={watchlist}/>}/>
           <Route path="/watchlist" element={<WatchList watchlist={watchlist} handleremove={handleremove}/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
