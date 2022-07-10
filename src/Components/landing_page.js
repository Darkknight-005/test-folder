import React from 'react'
import "./form.css"
import sec5 from './img/sec5.png'
import Linked from './img/linkedin.svg'
import section_1 from './img/section_1.jpeg'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import Header from './tools/header'
import Footer from './tools/Footer'


function Landing_page() {
    const show = () => {
        let pass = document.getElementById('pass')
        pass.setAttribute('type', 'text')
    }
    const leave = () => {
        let pass = document.getElementById('pass')
        pass.setAttribute('type', 'password')
    }
    const hlist = ()=>{
        let hl = document.getElementById('hlist')
        let fire = (hl.style.display === 'none') ? 'block':'none'
        hl.style.display = fire;
        let show = document.getElementById('show')
        const more = (hl.style.display === 'none') ? `Show more `:`Show less`
        show.innerText = more;
    }
    

    return (
        < >
            <div className='bg-gradient-to-br to-black/80 via-blue-900/90 from-purple-900/80 backdrop-blur-3xl backdrop-brightness-150 bg-black/30 '>
                <Header />
                
                <main className='flex flex-col gap-10 items-center text-slate-300 ' >

                    <section className='space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center lg:py-5 py-3 lg:w-[1128px] ' id="section1">

                        <div className='px-10 lg:px-0 lg:w-1/2   lg:h-auto flex flex-col justify-evenly  lg:items-start  '>
                            <h1 className='text-3xl  text-center lg:text-left lg:pr-12 lg:pt-0 pt-3 font-extralight'>Welcome to your Professional community</h1>
                            <form action="#" className=' flex-col flex  gap-3 mt-10 lg:items-start  py-1 items-center' >
                                <div className='space-y-5  '>

                                    <div className='outline-offset-2 outline-1 outline-gray-500 outline px-2 rounded-sm  flex py-1  backdrop-blur-xl backdrop-brightness-105 bg-black/20'>
                                        <input type="email" placeholder='Email or phone number' className='outline-none flex-1 bg-transparent placeholder-gray-300 text-sm' autoFocus="true" id="email" />
                                    </div>
                                    <div className='outline-offset-2 outline-1 outline-gray-500 outline px-2 py-1 rounded-sm flex backdrop-blur-xl backdrop-brightness-105 bg-black/20'>
                                        <input type="password" placeholder='Password' className='w-52  outline-none flex-shrink-0 flex-1 bg-transparent placeholder-slate-300 text-sm ' id="pass" onFocusCapture={leave} />

                                        <span className=' cursor-pointer' id="click" onClick={show}>show</span>


                                    </div>
                                </div>
                                <a href="#">Forgot Password ?</a>
                                <button className='bg-gradient-to-tl to-violet-700 from-gray-700 hover:from-violet-800 hover:to-gray-700 rounded text-gray-400 hover:brightness-200 brightness-150 w-56 self-center py-1  '>Sign-in</button>
                            </form>
                        </div>
                        <img src={section_1} alt="" className=' h-72 lg:h-auto lg:w-1/2 ' />

                    </section>
                    <section className='space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center lg:w-[1128px]  lg:py-5 py-3 px-5 lg:px-0' id="section2">
                        <div className='  flex-1 self-start'>
                            <h3 className='text-4xl  lg:pr-10'>Explore topics you are intrested in</h3>
                        </div>
                        <div className='flex-1 space-y-5 '>
                            <span>CONTENT TOPICS</span>
                            <ul className='text-lg flex justify-start gap-y-5 gap-x-1 flex-wrap' >
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>See All Topics</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Remote</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Work from Home</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Retirement</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Internship</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Freelancer</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Salary and Compensation</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Starting a job</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className=' space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center lg:w-[1128px]  lg:py-3 py-3 px-5 lg:px-0' id="section3">
                        <div className='flex-1 self-start'>
                            <h3 className='text-4xl lg:pr-10'>Find the right job or internship for you </h3>
                        </div>
                        <div className='flex-1 space-y-5'><span>SUGGESTED SEARCHES</span>
                            <ul className='text-lg flex justify-start gap-y-5 gap-x-1 flex-wrap '>

                                <li>
                                    <a href="#" className='border border-slate-300 bg-black/30 rounded-full py-2 px-3'>Engineering</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Business Development</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Finance</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Administrative Assistant</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Retail Associate</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Customer Service</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Operations</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Information Technology</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Marketing</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Human Resources</a>
                                </li> 
                                <li className='hidden' id="hlist">                                
                                <ul className='flex justify-start gap-y-5 gap-x-2 flex-wrap' >
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Healthcare Service</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Sales</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Program and Project Management</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Accounting</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Art and Design</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Community and Social Service</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Consulting</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Education</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Entreprenurship</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Legal</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Media and Communication</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3 flex-1'>Military and Protective Services</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Product Management</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Purchasing</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Quality Assurance</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Real Estate</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Research</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Support</a>
                                </li>
                                <li>
                                    <a href="#" className='border border-slate-300 rounded-full py-2 px-3'>Administrative</a>
                                </li>
                                </ul>

                                </li>
                            </ul>
                            <span className='flex gap-2 items-center w-fit text-base cursor-pointer' onClick={hlist} id="dshow"> <p >Show more</p> <BsChevronCompactDown className='mt-1 font-bold' id='show'/>
                            <BsChevronCompactUp className='hidden mt-1 font-bold' id='show'/></span>
                        </div>
                    </section>
                    <section className=' space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center lg:w-[1128px]  lg:py-5 px-5 lg:px-0 py-3  ' id="section4">
                        <div className="flex-1">
                            <h3 className='text-4xl lg:pr-10'>Post your job for millions of people to see</h3>
                        </div>
                        <div className="flex-1"> <span className='p-3 text-xl outline outline-slate-500 rounded-full'>Post a job</span> </div>
                    </section>
                    <section className=' space-y-5 lg:space-y-0 flex flex-col lg:flex-row items-center lg:w-[1128px]  lg:py-3 py-3 px-5 lg:px-0' id="section5">
                        <div className='flex-1 text-start'>
                            <h3 className='text-4xl lg:pr-10'>
                                Let the right people know you'are open to work
                            </h3>
                            <p className='text-3xl font-thin'>
                            With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.
                            </p>
                        </div>
                        <div className='flex-1 w-full flex justify-center'>
                           <img src={sec5} alt="" className='w-[75%]'/> 
                        </div>
                        </section>
                </main>

                <Footer />

            </div>

        </>
    )
}

export default Landing_page