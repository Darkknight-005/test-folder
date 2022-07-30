import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import "./postcreation.css"

function PostCreation() {
  return (
    <div className=' items-center justify-center hidden px-1 bg-black/60 absolute w-full h-full top-0 z-20 left-0' id="postcr">
      <div className='bg-gray-400  rounded-md'>
        <div className='flex items-center justify-between rounded-t-md shadow-xl px-4'>
          <h2 className='text-xl pl-6 py-2'>Create Post</h2>
          <div className='p-1 cursor-pointer hover:bg-gray-500/60 rounded-lg'>

            <MdOutlineClose className='text-xl ' onClick={() => { document.getElementById("postcr").style.display = "none" }} />
          </div>
        </div>
        <div className='py-2 px-5 flex gap-2'>

          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" alt="" className=' h-12 w-12 rounded-full  shadow-xl  shadow-white/50' />
          <div className='-space-y-1'>
            <h2>Dark knight</h2>
            <p className='text-sm pl-1'>Everyone</p>
          </div>
        </div>
        <div className="px-5 w-full max-w-[23rem] sm:max-w-[40rem] overflow-y-scroll  my-2  " id="scroll" >
          <div contentEditable placeholder='Write something here..' className=' text-start' id='write'>

          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default PostCreation