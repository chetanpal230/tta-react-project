import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col h-full max-w-[1020px] mx-auto'>

        <div className={`flex items-center justify-start flex-row xl:px-0 sm:px-16 px-6 py-[120px] gap-20`}>

         <div className='max-w-[480px] '>

           <h1 className='md:text-[48px] text-[38px] font-bold mb-6 leading-tight'>Be The Fastest In <br className='sm:block hidden'/> Delivering Your  <span className='text-[#FFCB45]'>Food</span></h1>

          <div className='max-w-[370px] font-normal'>
           <p className='text-[18px] mb-6  font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet</p>
           </div>

           <button className='flex items-center gap-5 px-4 rounded-3xl py-2 bg-[#FFCB45]'>
            <div>
              <p className='text-[14px] font-bold'>Get Started</p>
            </div>
           </button>

         </div>

         <div></div>

         </div>

    </div>
  )
}

export default Hero
