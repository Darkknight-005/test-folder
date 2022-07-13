import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiLinkedRings } from 'react-icons/gi'

function Feed() {
  return (
    <div className="cursor-">
        <header className='backdrop-lg bg-black/70 flex py-2 justify-evenly'>
            <div className="flex  items-start">

                <GiLinkedRings  className='text-3xl text-[lightsalmon]'/>
            <div className='flex items-center gap-2 px-2 py-1 bg-gray-400/30 rounded'>
                <BsSearch />
                <input type="Search" className='bg-green-700 flex-1'/>
            </div>
            </div>
            <div>

            </div>
        </header>
    </div>
  )
}

export default Feed