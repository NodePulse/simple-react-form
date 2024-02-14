import React from 'react'
import { SignUpForm, LoginForm } from './index'
import patternImage from "../assets/frame.png"
import { FcGoogle } from 'react-icons/fc'

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
    return (
        <div className='flex text-white w-11/12 max-w-[1160px] py-8 mx-auto gap-x-12 gap-y-0 justify-between'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 className='font-semibold text-[1.875rem] leading-[2.375rem] text-richblack-5'>{title}</h1>
                <p className='flex flex-col mt-2 text-[1.125rem] leading-[1.625rem]'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>

                {
                    formType === "login" ? (<LoginForm setIsLoggedIn={setIsLoggedIn} />) : (<SignUpForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className='flex items-center w-full gap-x-2 my-3'>
                    <div className='bg-richblack-700 w-full h-[1px]'></div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                    <div className='bg-richblack-700 w-full h-[1px]'></div>
                </div>

                <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-richblack-100
                border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-2'>
                    <FcGoogle />
                    Sign Up with google
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450px]'>
                <img src={patternImage} alt="pattern" width={558} height={504} loading='lazy'
                    className='absolute top-4 left-4' />
                <img src={image} alt="students" width={558} height={490} loading='lazy'
                    className='absolute' />
            </div>
        </div>
    )
}

export default Template