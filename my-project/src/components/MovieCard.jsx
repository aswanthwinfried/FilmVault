import React from 'react'
import WatchList from './WatchList'

function MovieCard({movieObj,poster_path ,name,handleAddtoWatchList,handleRemoveFromWatchList,watchlist}) {

  function doesContain(movieObj) {
    return watchlist.some((movie) => movie.id === movieObj.id);
  }
  
  return (
    <div className='h-[40vh] w-[170px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

      {doesContain(movieObj)?
      ( <div onClick={() => handleRemoveFromWatchList(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'> &#10060; </div> ) :   

     (<div onClick={() => handleAddtoWatchList(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
      &#128525;
    </div>) } 
      

      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60'>
        {name}
      </div>
    </div> 
  )
}



export default MovieCard