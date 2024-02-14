import React from 'react'
import { Template } from '../components/index'
import sigUpImage from "../assets/signup.png"

export default function SignUp(props) {

    let setIsLoggedIn = props.setIsLoggedIn

    return (
        <div>
            <Template
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today, tommorrow and beyond."
                desc2="Education to future-proof your career."
                image={sigUpImage}
                formType="signup"
                setIsLoggedIn={setIsLoggedIn} />
        </div>
    )
}
