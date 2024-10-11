import React from 'react'

function Pagination({pageNo,handlePrev,handleNext}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div className='px-8' onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div className='px-8' onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination