import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm(props) {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        })
        )
    }

    function submitHandler(event) {
        event.preventDefault()
        props.setIsLoggedIn(true)
        toast.success("Login Successfully")
        navigate("/dashboard")
    }

    return (
        <div>
            <form action=""
                onSubmit={submitHandler}
                className='flex flex-col w-full gap-y-4 mt-6' >
                <label>
                    <p className='text-gray-200 mb-2'>Email Address
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input type="email"
                        name="email"
                        value={formData.email}
                        required
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        className='w-full bg-richblack-800 p-3 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                </label>

                <label className='relative'>
                    <p>
                        Password
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        required
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        className='w-full bg-richblack-800 p-3 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                    <span onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-[38px] cursor-pointer' >
                        {
                            showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                        }
                    </span>
                    <Link to="#">
                        <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                            Forgot Password
                        </p>
                    </Link>
                </label>
                <button className='bg-yellow-50 rounded-lg font-medium text-richblack-900 px-3 py-2'>
                    Sign In
                </button>
            </form>
        </div>
    )
}
