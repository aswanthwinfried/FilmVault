import './App.css'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'
import Banner from './components/Banner'

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {


  let [watchlist, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]; // Append movieObj to the array
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList); // To verify the updated watchlist
  };


  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchlist))
    // Make sure the array is updated properly without mutation
    setWatchList([...filteredWatchlist]);
  };
  
  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return  
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>

  <BrowserRouter>

    <Navbar/>

<Routes>
  <Route path='/' element={ <> <Banner/> <Movies watchlist={watchlist} handleAddtoWatchList={handleAddtoWatchList}  handleRemoveFromWatchList={handleRemoveFromWatchList} />  </>}/>
  <Route path='/watchlist' element={ <WatchList watchlist={watchlist} setWatchList={setWatchList}  handleRemoveFromWatchList={handleRemoveFromWatchList} />}/>
</Routes>

  </BrowserRouter>


    </>
  )
}

export default App
