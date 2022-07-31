import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { db } from '../pages/firebase'
import "./postcreation.css"
import firebase from 'firebase/compat/app';

function PostCreation() {
  // const [input, setInput] = useState("")

  
  
  const sendpost = ()=>{
    const spost = document.getElementById("write")

        const msage = spost.textContent

    db.collection("posts").add({
        name:"Dark knight",
        description:"test this",
        message:msage ,
        photo:"",
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      }
    );
    spost.textContent = ''
    msage = ''

  }
  
  
  return (
    <>
      <div className=' items-center justify-center hidden px-1 bg-black/60 absolute w-full h-full top-0 z-20 left-0' id="postcr">
        <div className='bg-gray-400 mx-2 w-full sm:w-[70%] md:w-[50%] md:h-1/2 rounded-md'>
          <div className='flex items-center justify-between rounded-t-md shadow-xl px-4'>
            <h2 className='text-xl pl-6 py-2'>Create Post</h2>
            <div className='p-1 cursor-pointer hover:bg-gray-500/60 rounded-lg'>

              <MdOutlineClose className='text-xl ' onClick={() => { document.getElementById("postcr").style.display = "none" }} />
            </div>
          </div>
          <div className='py-2 px-5 text-base flex gap-2'>

            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" alt="" className=' h-12 w-12 rounded-full  shadow-xl  shadow-white/50' />
            <div className='-space-y-1'>
              <h2 className=' '>Dark knight</h2>
              <p className=' pl-1'>Everyone</p>
            </div>
          </div>
          <div className="px-5 w-full text-base sm:max-w-[40rem] h-32 overflow-y-scroll  " id="scroll" >
            <div contentEditable placeholder='Write something here..' className=' mt-1 text-start sm:text-lg'  id='write'>

            </div>
          </div>
          <div>
          {/* <input type="file"  /> */}


            <button className='my-2 mx-3 py-[2px] float-right px-6 lg:px-10 lg:py-1  self-center flex-1 bg-gradient-to-tl to-violet-700 from-gray-700 hover:from-violet-800 hover:to-gray-700 rounded-full text-blue-400 hover:brightness-200 brightness-150' onClick={sendpost} >Post</button>

          
          </div>
        </div>
      </div>


      <div className='fixed  w-full bg-gray-400 left-0 top-0 hidden sm:hidden z-50' id="mpost">
        <div className='bg-gray-400 h-[100vh]  w-full  '>
          <div className='flex items-center justify-between rounded-t-md shadow-xl px-4'>
            <h2 className='text-xl pl-6 py-2'>Create Post</h2>
            <div className='p-1 cursor-pointer hover:bg-gray-500/60 rounded-lg'>

              <MdOutlineClose className='text-xl ' onClick={() => { document.getElementById("mpost").style.display = "none" }} />
            </div>
          </div>
          <div className='py-2 px-5 text-base flex gap-2'>

            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" alt="" className=' h-12 w-12 rounded-full  shadow-xl  shadow-white/50' />
            <div className='-space-y-1'>
              <h2 className=' '>Dark knight</h2>
              <p className=' pl-1'>Everyone</p>
            </div>
          </div>
          <div className="px-5 w-full text-base sm:max-w-[40rem] h-40 overflow-y-scroll  " id="scroll" >
            <div contentEditable placeholder='Write something here..' className=' mt-1 text-start sm:text-lg' id='write'>

            </div>
          </div>
          <div>
            {/* <input type="file" /> */}

            <button className='my-2 mx-3 py-[2px] float-right px-6 lg:px-5  self-center flex-1 bg-gradient-to-tl to-violet-700 from-gray-700 hover:from-violet-800 hover:to-gray-700 rounded-full text-blue-400 hover:brightness-200 brightness-150' >Post</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCreation