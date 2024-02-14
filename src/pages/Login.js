import React from 'react'
import { Template } from '../components/index'
import LoginImage from "../assets/login.png"

export default function Login(props) {

    let setIsLoggedIn = props.setIsLoggedIn

    return (
        <div>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tommorrow and beyond."
                desc2="Education to future-proof your career."
                image={LoginImage}
                formType="login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}
