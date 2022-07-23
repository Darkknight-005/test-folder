import React from 'react'
import './css/feed.css'
import { BsBookmarkStarFill, BsJournalRichtext, BsSearch } from 'react-icons/bs'
import { GiLinkedRings } from 'react-icons/gi'
import { SiAirplayvideo, SiHomeassistantcommunitystore } from "react-icons/si"
import { MdPeopleAlt, MdNotificationsActive, MdArrowDropDown, MdOutlineAddCircle, MdOutlinePersonAddAlt1 } from 'react-icons/md'
import { HiBriefcase, HiOutlinePhotograph } from 'react-icons/hi'
import { TbCalendarEvent, TbMessages } from 'react-icons/tb'
import { CgMenuGridO } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Feed() {
  // const sear = document.getElementById("search");


  return (
    <>
      <header className=' py-1 bg-black/60 backdrop-blur-sm flex  items-center text-white/40 justify-center sticky top-0 z-10' >
        <div className='lg:basis-[1028px] lg:flex-none flex-1 flex justify-evenly' >

          <div className="flex basis-[514px] flex-1  items-center gap-2" id="h_main">

            <GiLinkedRings className='text-2xl text-[lightsalmon] hidden ' id="sea_ico" />
            <div className='flex sm:flex-row sm:gap-2 flex-col items-center text-sm sapce-y-1' id="s_me">
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" className='rounded-full' width={29} alt="" />
              {/* <span className='flex items-center'>Me <MdArrowDropDown /> </span> */}
            </div>

            <div className='flex items-center text-white/40 gap-2 px-2 py-1 bg-gray-400/30 outline-1 outline-white/40 outline rounded' id="search">
              <BsSearch />
              <input type="Search" className='bg-transparent  outline-none flex-1 text-sm' placeholder='Search' onFocus={() => { document.getElementById("search").style({ "backgroundColor": "black" }) }} />
            </div>
            <div className='flex flex-col items-center  py-1' id="noti">
              <TbMessages className='text-2xl' />
              {/* <span className='text-sm '>Messaging</span> */}
            </div>
          </div>

          <div className='basis-[514px] flex-1' id="p_flex_i">
            <div className='flex  items-center gap-3 justify-end flex-1' id="flex_icon">
              <div className='flex space-x-3 items-end '>

                <div className='flex flex-col items-center   py-1 '>
                  <SiHomeassistantcommunitystore className='text-2xl' />
                  <span className='text-sm '>Home</span>
                </div>
                <div className='flex flex-col items-center  py-1 '>
                  <MdPeopleAlt className='text-2xl' />
                  <span className='text-sm '>My Network</span>
                </div>
                <div className='flex flex-col items-center  py-1 ' id="post">
                  <MdOutlineAddCircle className='text-2xl' />
                </div>
                <div className='flex flex-col items-center  py-1'>
                  <HiBriefcase className='text-2xl' />
                  <span className='text-sm '>Jobs</span>
                </div>
                <div className='flex flex-col items-center  py-1' id="sms">
                  <TbMessages className='text-2xl' />
                  <span className='text-sm '>Messaging</span>
                </div>
                <div className='flex flex-col items-center  py-1 '>
                  <MdNotificationsActive className='text-2xl' />
                  <span className='text-sm '>Notification</span>
                </div>


              </div>
              <div className='flex flex-col items-center text-sm sapce-y-1 cursor-pointer'>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" className='rounded-full' width={29} alt="" />
                <span className='flex items-center'>Me <MdArrowDropDown /> </span>
              </div>

              <div className='flex flex-col items-center cursor-pointer py-1'>
                <CgMenuGridO className='text-2xl' />
                <MdArrowDropDown className='text-xl' />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className='min-h-[85vh] flex lg:justify-center gap-2  mt-3 lg:mt-0 lg:px-0 px-4'>

        <div className='lg:w-[1028px] w-full flex  justify-evenly ' id="main">

          <div className='flex-[0.3] space-y-10  lg:block rounded-lg text-justify ' id="flex1">
            <div className=' mt-5 bg-top  rounded-lg text-black' id="pfcard">
              <div className='pt-14 cursor-default'>
                <div className='bg-slate-100 hover:bg-slate-300  py-2  '>

                  <div className=' space-y-2 w-full flex flex-col hover:cursor-pointer hover:underline items-center'>

                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" alt="" className=' h-12 w-12 -mt-8 rounded-full shadow-lg shadow-black' />

                    <Link id="us_nam" to="/Profile">Dark knight </Link>
                  </div>
                  <p className='text-[0.70rem] font-sans text-center justify-center flex '>Work at
                    jogendar jehrila Corp., near gumti vale baba, purane shamshan ke
                    piche.</p>
                </div>

              </div>

              <hr className='h-[2px]  bg-gradient-to-r from-red-500 via-violet-700 to-white' />

              <div className='text-xs bg-slate-100 hover:bg-slate-200 px-2 py-2 text-center flex items-center justify-between  rounded-sm'>
                <div><p className='text-gray-600'>Connetctions</p></div>
                <MdOutlinePersonAddAlt1 className='text-sm' />
              </div>

              <hr className='h-[2px]  bg-gradient-to-r from-red-500 via-violet-700 to-white' />


              {/* <div className='text-xs bg-slate-100 hover:bg-slate-300 px-2 py-2 text-center'>
                  <span></span>
                </div>
                <hr className='h-[2px]  bg-transparent ' /> */}
              <div className='rounded-b-lg px-2 gap-2 items-center flex hover:bg-slate-200 bg-slate-100 py-2 text-xs cursor-pointer hover:underline '>
                <BsBookmarkStarFill className='text-sm ' />
                <p>My items</p>
              </div>
            </div>
            <div className=' rounded-lg text-xs '>
              <div className='flex flex-col  bg-slate-100 py-2  rounded-t-md text-[orangered] '>
                <div className='flex justify-between items-center text-xs hover:bg-slate-300 py-1 px-2'>
                  <p className='hover:cursor-pointer hover:underline '>Groups </p>
                </div>
                <div className='flex justify-between items-center text-xs hover:bg-slate-300 py-1 px-2'>
                  <p className='hover:cursor-pointer hover:underline '>Events</p>
                  <MdOutlineAddCircle className='text-gray-900' />
                </div>
                <div className='flex justify-between items-center text-xs hover:bg-slate-300 py-1 px-2'>
                  <p className='hover:cursor-pointer hover:underline '>Followed Hashtags</p>
                </div>
              </div>
              <hr className='h-[2px]  bg-gradient-to-r from-red-500 via-violet-700 to-white' />

              <div className='hover:bg-slate-300 py-2  bg-slate-100   rounded-b-md'>
                <p className='text-sm text-center'>Discover More</p>
              </div>
            </div>
          </div>
          <section className='flex-1  text-justify' id="flex2">
            <div className='bg-black/60 text-white/40 rounded-2xl py-2 space-y-2 ' id="main_post">
              <div className='flex gap-2 items-center px-4 cursor-pointer'>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFqS7SnCri3MA/profile-displayphoto-shrink_100_100/0/1606680593180?e=1663804800&v=beta&t=6TMTBuylelaAsFJ7lgffXLRMfsn_LydJ-L15AlzYxT0" alt="" className=' h-12 w-12 rounded-full  shadow-xl  shadow-white/50' />


                <button className='mt-3 mb-2 py-2 text-start px-2 lg:px-5 w-52 self-center flex-1 bg-gradient-to-tl to-violet-700 from-gray-700 hover:from-violet-800 hover:to-gray-700 rounded-full text-green-400 hover:brightness-200 brightness-150'>Start a post</button>


              </div>
              <div className='flex justify-between px-5'>
                <div className='flex  items-center gap-1  py-1 cursor-pointer '>
                  <HiOutlinePhotograph className='text-2xl' />
                  <span className='text-sm '>Photo</span>
                </div>
                <div className='flex  items-center gap-1  py-1 cursor-pointer '>
                  <SiAirplayvideo className='text-2xl' />
                  <span className='text-sm '>Videos</span>
                </div>
                <div className='flex  items-center gap-1  py-1 cursor-pointer '>
                  <TbCalendarEvent className='text-2xl' />
                  <span className='text-sm '>Event</span>
                </div>
                <div className='flex  items-center gap-1  py-1 cursor-pointer '>
                  <BsJournalRichtext className='text-2xl' />
                  <span className='text-sm '>Write article</span>
                </div>
              </div>
            </div>
            <div></div>
          </section>
          <section className='flex-[0.3] hidden lg:block text-justify'>
            <div></div>
            <div></div>
          </section>
        </div>
      </main>

      <nav id='mobile_nav' className='backdrop-blur-lg w-full bg-black/70 flex-1 flex justify-evenly py-[6px] fixed bottom-0 z-10'>
        <div className='flex space-x-3 flex-1  justify-evenly text-gray-400' id='nav_i'>

          <div className='flex flex-col items-center   py-1 '>
            <SiHomeassistantcommunitystore className='text-2xl' />
            {/* <span className='text-sm '>Home</span> */}
          </div>
          <div className='flex flex-col items-center  py-1 '>
            <MdPeopleAlt className='text-2xl' />
            {/* <span className='text-sm '>My Network</span> */}
          </div>
          <div className='flex flex-col items-center  py-1 ' id="post">
            <MdOutlineAddCircle className='text-2xl' />
          </div>
          <div className='flex flex-col items-center  py-1 '>
            <MdNotificationsActive className='text-2xl' />
            {/* <span className='text-sm '>Notification</span> */}
          </div>
          <div className='flex flex-col items-center  py-1'>
            <HiBriefcase className='text-2xl' />
            {/* <span className='text-sm '>Jobs</span> */}
          </div>


        </div>
      </nav>
    </>
  )
}

export default Feed