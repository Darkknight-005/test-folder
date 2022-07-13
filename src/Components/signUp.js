import React from 'react'
import "./form.css"
import { Link } from 'react-router-dom'
import Footer from './tools/Footer'
import { GiLinkedRings } from 'react-icons/gi'
import { MdFaceRetouchingOff } from 'react-icons/md'
import {FcGoogle} from "react-icons/fc"

function SignUp() {
  return (
    <div>        <main className=' flex flex-col gap items-center justify-center text-slate-300 bg-black '>
            <form action="" method="post" className='lg:w-[30vw] flex-none md:w-[40vw] sm:w-[70vw] xs:w-[90vw]  flex flex-col justify-start text-center px-10 pt-5 pb-10 gap-y-2 backdrop-blur-md bg-white/20 cursor-default rounded  mx-10'>
                <h3 className='text-2xl my-5  text-white brightness-200 '>Make the most of your professional life</h3>
                    <div className="w-60 flex bg-black/30 rounded-sm px-2   self-center py-2">
                    <input className='flex-1 bg-transparent placeholder-gray-200 text-sm outline-none  ' type="email" placeholder='E-mail or Phone number'  /> <br />
                    </div>
                    <div className="w-60 flex bg-black/30 rounded-sm self-center px-3 py-2">
                    <input  className='placeholder-gray-300 text-sm flex-1 bg-transparent outline-none ' type="passWord" placeholder='Password' /> <br />
                    </div>
                    <p className=' text-xs w-56 self-center text-gray-300'>By clicking Agree & Join, you agree to the Linkedin
                        <Link to="/User Agreement" className='text-black/40 font-bold ml-1'>User Agreement</Link>,
                        <Link to="Privacy Policy" className='text-black/40 font-bold ml-1'>Privacy Policy</Link>, and
                        <Link to="Privacy Policy" className='text-black/40 font-bold ml-1'>Cookie Policy</Link>.
                    </p>
                    <button className='mt-3 mb-2 py-1 px-2 w-52 self-center bg-gradient-to-tl to-violet-700 from-gray-700 hover:from-violet-800 hover:to-gray-700 rounded-full text-gray-400 hover:brightness-200 brightness-150'>Sign-up</button> 
                    <button className='rounded-full py-1 w-52 self-center bg-gradient-to-tl to-violet-700 from-gray-700 hover:from-violet-800 hover:to-gray-700  text-gray-400 hover:brightness-200 brightness-150 flex items-center gap-2 px-3 '><FcGoogle /> Continue with Google</button> 

                    <span> Already on Linkedin? <Link to="/signIn" className='text-black/40 font-bold'>Sign in</Link> </span>

            </form>

        </main>
            <div className='bg-black '>
                <Footer />
            </div>
        </div>
  )
}

export default SignUp