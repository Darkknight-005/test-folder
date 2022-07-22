import React from 'react'
import './css/feed.css'
import { BsSearch } from 'react-icons/bs'
import { GiLinkedRings } from 'react-icons/gi'
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { MdPeopleAlt, MdNotificationsActive, MdArrowDropDown, MdOutlineAddCircle } from 'react-icons/md'
import { HiBriefcase } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb'
import { CgMenuGridO } from 'react-icons/cg'

function Feed() {
  // const sear = document.getElementById("search");


  return (
    <>
      <header className=' py-1 bg-black/60 backdrop-blur-sm flex  items-center text-white/40 justify-center sticky top-0 z-10' >
        <div className='lg:basis-[1028px] lg:flex-none flex-1 flex justify-evenly' >

          <div className="flex basis-[514px] flex-1  items-center gap-2" id="h_main">

            <GiLinkedRings className='text-2xl text-[lightsalmon] hidden ' id="sea_ico" />
            <div className='flex sm:flex-row sm:gap-2 flex-col items-center text-sm sapce-y-1' id="s_me">
              <img src="data:image/jpeg;base64,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" className='rounded-full' width={29} alt="" />
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
                <img src="data:image/jpeg;base64,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" className='rounded-full' width={29} alt="" />
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
      <main className='min-h-[80vh] flex justify-center gap-2 mt-2  lg:px-0 px-4'>

        <div className='lg:w-[1028px] flex justify-evenly '>

        <section className='flex-[0.3] hidden lg:block  text-justify' id="flex1">
          <h1 className='text-2xl text-red-300 font-serif text-center'>
            This is first
          </h1>
          <p className='text-gray-400 font-sans'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quis sunt facilis error quidem earum reiciendis, laboriosam iure minima, maxime iste sequi omnis optio placeat ducimus dolorum vero voluptas! Explicabo consectetur aliquam natus recusandae minus ipsa, ad dicta rem nesciunt unde perferendis amet magni quam molestiae. Repellendus ex facere aliquam velit debitis tenetur quod atque vitae nemo dolores in cumque doloremque excepturi eum at ratione dolore aspernatur beatae ipsa minus voluptatum ducimus, nostrum illo libero. Sed ipsa quae minima incidunt officiis modi aperiam perspiciatis blanditiis consectetur sit qui expedita repellendus ducimus provident adipisci voluptatum, nemo temporibus nisi rerum nam eum!
          </p>
        </section>
        <section className='flex-1  text-justify' id="flex2">
          <h1 className='text-2xl text-green-200 font-serif text-center'>
            This is Second section
          </h1>
          <p className='text-gray-400 font-sans'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quis sunt facilis error quidem earum reiciendis, laboriosam iure minima, maxime iste sequi omnis optio placeat ducimus dolorum vero voluptas! Explicabo consectetur aliquam natus recusandae minus ipsa, ad dicta rem nesciunt unde perferendis amet magni quam molestiae. Repellendus ex facere aliquam velit debitis tenetur quod atque vitae nemo dolores in cumque doloremque excepturi eum at ratione dolore aspernatur beatae ipsa minus voluptatum ducimus, nostrum illo libero. Sed ipsa quae minima incidunt officiis modi aperiam perspiciatis blanditiis consectetur sit qui expedita repellendus ducimus provident adipisci voluptatum, nemo temporibus nisi rerum nam eum!
          </p>
        </section>
        <section className='flex-[0.3] hidden lg:block text-justify'>
          <h1 className='text-2xl text-violet-300 font-serif text-center'>
            This is Third section
          </h1>
          <p className='text-gray-400 font-sans'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quis sunt facilis error quidem earum reiciendis, laboriosam iure minima, maxime iste sequi omnis optio placeat ducimus dolorum vero voluptas! Explicabo consectetur aliquam natus recusandae minus ipsa, ad dicta rem nesciunt unde perferendis amet magni quam molestiae. Repellendus ex facere aliquam velit debitis tenetur quod atque vitae nemo dolores in cumque doloremque excepturi eum at ratione dolore aspernatur beatae ipsa minus voluptatum ducimus, nostrum illo libero. Sed ipsa quae minima incidunt officiis modi aperiam perspiciatis blanditiis consectetur sit qui expedita repellendus ducimus provident adipisci voluptatum, nemo temporibus nisi rerum nam eum!
          </p>
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