import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col h-full max-w-[1320px] mx-auto">
    <header className="flex justify-between items-center h-16 py-10">
      <h1 className="font-poppins font-semibold text-[24px]">Fresh Bite</h1>
      <button className=' items-center gap-5 px-4 rounded-3xl flex  py-2 bg-[#FFCB45]'>
        <p className='text-[16px] font-bold'>Menu</p>
      </button>
    </header>
    
  </div>
  )
}

export default Header
