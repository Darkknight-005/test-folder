import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import "./postcreation.css"

function PostCreation() {
  return (
    <div className=' items-center justify-center hidden bg-black/60 absolute w-full h-full top-0 z-20' id="postcr">
      <div className='bg-gray-400 w-1/3 h-2/3 rounded-md'>
        <div className='flex items-center justify-between rounded-t-md shadow-xl px-4'>
          <h2 className='text-xl pl-6 py-2'>Create Post</h2>
          <div className='p-1 cursor-pointer hover:bg-gray-500/60 rounded-lg'>

          <MdOutlineClose className='text-xl ' onClick={()=>{document.getElementById("postcr").style.display = "none"}}/>
          </div>
        </div>
        <div className='py-2 px-5 flex gap-2'>

        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" alt="" className=' h-12 w-12 rounded-full  shadow-xl  shadow-white/50' />
        <div className='-space-y-1'>
          <h2>Dark knight</h2>
          <p className='text-sm pl-1'>Everyone</p>
        </div>
        </div>
        <div className='px-5 w-full h-2/3  '  >
        {/* <div className=" w-full h-1/2 outline-none px-2 "  contenteditable="true" id="write"><p>haalo ray ?<br/></p></div>       */}
        <textarea name="" id="" cols="40" rows="10" className='pl-5'></textarea>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default PostCreation