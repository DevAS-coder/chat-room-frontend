import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center h-16 w-full bg-red-800 text-white font-bold text-2xl fixed top-0'>
        <div className='p-5'><i className="fa-solid fa-bars"></i></div>
        <div>ChatRoom</div>
        <div className='p-5'><i className="fa-solid fa-question"></i></div>
    </div>
  )
}

export default Header