import React from 'react'

function Pagination({count,onIncrement,ondecrement}) {
  return (
  <>
    <div className='bg-gray-400  flex justify-center font-bold mb-4 mt-3 p-4 gap-8'>
      <div className='hover:cursor-pointer' onClick={ondecrement}>⬅️</div>
       <div>{count}</div>
       <div className='hover:cursor-pointer'onClick={onIncrement}>➡️</div>
    </div>
  </>
  )
}

export default Pagination
