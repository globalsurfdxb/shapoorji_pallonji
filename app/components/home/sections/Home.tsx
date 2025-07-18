import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <section className="h-[100dvh] overflow-x-hidden relative scroll-area">
      <div className='h-full absolute top-0 left-0  w-full bg-amber-50'>
        <video src="../assets/videos/home.mp4" autoPlay loop muted className='w-full h-full object-cover'></video>
      </div>
      <div className='relative z-[1] h-full'>
        <div className='flex flex-col justify-end   h-full'>
          <div className='w-[79%] ml-[auto]  text-white  '>
            <h1 className='text-70 font-light max-w-[20ch] leading-[80px]'>Trusted Legacy of Engineering Excellence</h1>
          </div>
          <div className='my-10 w-full border-t border-white/30'></div>
          <div className='w-[44%] ml-[auto]   text-white mb-19 flex justify-between items-center mr-38'>
            <div className='flex items-center gap-2'>
              <h2 className='text-32 font-light   max-w-[14ch]'>Changing Skylines Since 1865</h2>
              <Image src="../assets/images/arrowbl.svg" alt="Logo" width={71} height={71} />
            </div>
            <div className='flex flex-col items-center gap-3'>
              <p className='text-13 uppercase font-light'>Stay Connected</p>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center border border-[#30B6F9] cursor-pointer w-[34px] h-[34px] bg-[#00000030] rounded-full'>
                  <Image src="../assets/images/ln.svg" alt="Logo" width={15} height={14} />
                </div>
                <div className='flex items-center justify-center border border-[#30B6F9] cursor-pointer w-[34px] h-[34px] bg-[#00000030] rounded-full'>
                  <Image src="../assets/images/fb.svg" alt="Logo" width={8} height={14} />
                </div>
                <div className='flex items-center justify-center border border-[#30B6F9] cursor-pointer w-[34px] h-[34px] bg-[#00000030] rounded-full'>
                  <Image src="../assets/images/ytube.svg" alt="Logo" width={16} height={11} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[#0000008C] h-[100dvh]"></div>

    </section>
  )
}

export default Home 