import React from 'react'
import { GiLinkedRings } from 'react-icons/gi'

function Footer() {
  return (
    <footer className='flex justify-center backdrop-blur-xl backdrop-brightness-105 bg-black/60'>
    <ul className='p-2 lg:px-0 flex  flex-wrap lg:flex-nowrap gap-y-2 lg:gap-y-0 lg:gap-3 lg:items-center lg:w-[1128px] justify-start text-xs text-slate-400  cursor-default' >
        <li className='flex items-center text-xs text-slate-300 basis-[50%] lg:basis-auto '>
            Linked
            <GiLinkedRings className="mx-[1px] text-[lightsalmon] text-lg" /> &#160;&#xa9;&#160;
            {new Date().getFullYear()}
        </li>
        <li className='basis-[50%] lg:basis-auto hover:underline lg:hidden ' ></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">About</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Accessibility</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">User Agreement</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Privacy Policy</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Cookie Policy</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Copyright Policy</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Brand Policy</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Guest Controls</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Community Guidlines</a></li>
        <li className='basis-[50%] lg:basis-auto hover:underline ' ><a href="#">Language</a></li>
    </ul>
</footer>
  )
}

export default Footer