import React from 'react'
import {Link} from "react-router-dom"
import { GiLinkedRings } from 'react-icons/gi'
import Bar_icons from './bar_icons'
import { AiOutlineLine } from 'react-icons/ai'
import { ImCompass } from 'react-icons/im'
import { MdPeopleAlt } from 'react-icons/md'
import { VscMortarBoard } from 'react-icons/vsc'
import { HiBriefcase } from 'react-icons/hi'

function Header() {
  return (
    <header className='py-2 sticky top-0 lg:flex lg:justify-center backdrop-blur-lg backdrop-brightness-150 bg-black/60 text-slate-100 z-10'>
    <div className='flex lg:w-[1128px]  justify-between gap-2 mx-2 cursor-default '>
        <div >
            <a href="#" target="_blank" rel="noopener noreferrer">

                <span>
                    <p className='flex items-center text-2xl'>Linked
                        <GiLinkedRings className='ml-[2px] -mb-[3px] text-3xl text-[#78706c] font-extralight' />
                        {/* <img src={Linked} className="w-8 backdrop-blur-sm bg-brightness-150 bg-inherit rounded-full" alt="" /> */}
                    </p>
                </span>
            </a>
        </div>
        <div className=' flex items-center     gap-5 text-sm '>
            <div className=' md:flex items-center hidden   gap-5 text-sm'>

                <Bar_icons Icon={<ImCompass className='-mb-1 text-xl py-[2px]  ' />} title='Discover' />
                <Bar_icons Icon={<MdPeopleAlt className='-mb-1 text-xl ' />} title='People' />
                <Bar_icons Icon={<VscMortarBoard className='-mb-1 text-xl ' />} title='Learning' />
                <Bar_icons Icon={<HiBriefcase className='-mb-1 text-xl ' />} title='Jobs' />
                <span className='rotate-90 text-lg -mx-3  flex -space-x-1 justify-center'><AiOutlineLine /><AiOutlineLine /></span>
            </div>
            <span> <Link to="/sign-up" >Join now</Link></span>
            <button className='outline-1 outline-double outline-slate-300  rounded-3xl px-4 pb-1 mt-1'>Sign up</button>
        </div>
    </div>
</header>

  )
}

export default Header