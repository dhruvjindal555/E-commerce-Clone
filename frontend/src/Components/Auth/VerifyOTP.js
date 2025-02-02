import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import {
    Link,
    useNavigate
} from "react-router-dom";


function VerifyOTP() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password === credentials.confirmPassword) {
            const response = await fetch("http://localhost:8888/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            const data = await response.json()
            const { success, message, authToken } = data
            if (success) {
                localStorage.setItem("authToken", authToken)
                navigate('/')
                console.log(message);
            } else {
                console.log(message);
            }
        } else {
            console.log("Passwords are not matching ");
        }
    }
    return (
        <section classNameName=" mt-12">
            <div classNameName="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

                {/* <!-- component --> */}
                <div className="relative flex flex-col justify-center overflow-hidden  py-12">
                    <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                            <div className="flex flex-col items-center justify-center text-center space-y-2">
                                <div className="font-semibold text-3xl">
                                    <p>Email Verification</p>
                                </div>
                                <div className="flex flex-row text-sm font-medium text-gray-400">
                                    <p>We have sent a code to your email ba**@dipainhouse.com</p>
                                </div>
                            </div>

                            <div>
                                <form action="">
                                    <div className="flex flex-col space-y-16">
                                        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                            <OtpInput
                                                 value={otp}
                                                 onChange={setOtp}
                                                 numInputs={4}
                                                 skipDefaultStyles="true"
                                                 renderSeparator={<span>-</span>}
                                                 renderInput={(props) => <input {...props} />}
                                                 shouldAutoFocus="true"
                                                 inputStyle="border w-12 border-1  border-gray-400 p-2  text-center mx-3 bg-gray-50 rounded-lg"
                                                 containerStyle="my-5 "
                                            />
                                        </div>

                                        <div className="flex flex-col space-y-5">
                                            <div>
                                                <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                    Verify Account
                                                </button>
                                            </div>

                                            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VerifyOTP