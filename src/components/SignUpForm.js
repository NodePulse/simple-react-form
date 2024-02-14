import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function SignUpForm(props) {

    const navigate = useNavigate()
    const [showCreatePassword, setShowCreatePassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        person: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [accountType, setAccountType] = useState("student")

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password doesn't match")
            return 
        }
        props.setIsLoggedIn(true)
        navigate("/dashboard")
        toast.success("Account created Successfully")

        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData, accountType
        }
        console.log(finalData)
    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-3 rounded-full max-w-max'>
                <button
                    className={`${accountType === "student" ?
                        "bg-richblack-900 text-richblack-5" :
                        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")} >
                    Student
                </button>
                <button
                    className={`${accountType === "instructor" ?
                        "bg-richblack-900 text-richblack-5" :
                        "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")} >
                    Instructor
                </button>
            </div>
            <form action="" onSubmit={submitHandler} className='flex flex-col w-full gap-y-3 mt-3'>
                <div className="flex justify-between w-full gap-x-4">
                    <label className='relative w-full'>
                        <p className='text-gray-200 mb-2'>
                            First Name
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            required
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            className='w-full bg-richblack-800 p-2 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                    </label>
                    <label className='relative w-full'>
                        <p className='text-gray-200 mb-2'>
                            Last Name
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            required
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            className='w-full bg-richblack-800 p-2 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                    </label>
                </div>
                <label className=''>
                    <p className='text-gray-200 mb-2'>
                        Email Address
                        <sup className='text-pink-200'>*</sup>
                    </p>
                    <input type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        required
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        className='w-full bg-richblack-800 p-2 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                </label>
                <div className="flex justify-between w-full gap-x-4">
                    <label className='relative w-full'>
                        <p className='text-gray-200 mb-2'>
                            Create Password
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input type={showCreatePassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            required
                            onChange={changeHandler}
                            placeholder='Create Password'
                            className='w-full bg-richblack-800 p-2 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                        <span onClick={() => { setShowCreatePassword(!showCreatePassword) }}
                            className='absolute right-3 top-[42px] cursor-pointer' >
                            {
                                showCreatePassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>
                    <label className='relative w-full'>
                        <p className='text-gray-200 mb-2'>
                            Confirm Password
                            <sup className='text-pink-200'>*</sup>
                        </p>
                        <input type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            required
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            className='w-full bg-richblack-800 p-2 focus:outline-none rounded-md focus:border-b-[0.01rem] focus:border-b-sky-400' />
                        <span onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}
                            className='absolute right-3 top-[42px] cursor-pointer' >
                            {
                                showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>
                </div>
                <button className='bg-yellow-50 rounded-lg font-medium text-richblack-900 px-3 py-2'>
                    Create Account
                </button>
            </form>
        </div>
    )
}
