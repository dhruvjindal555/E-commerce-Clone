import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { useNavigate } from 'react-router';

function AuthState(props) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const handleLogIn = async () => {
        const response = await fetch("http://localhost:8888/auth/login", {
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
            setCredentials({
                email: "",
                password: ""
            })
            console.log(message);
        } 
        console.log(message);
        return data
    };
    const handleSignUp = async () => {
        if (credentials.password == credentials.confirmPassword) {
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
                console.log(message);
                setCredentials({
                    email: "",
                    password: ""
                })
            } else {
                console.log(message);
            }
            return data
        }else{
            return {'success':false,'message':'Passwords are not matching!'}
        }

    }
    return (
        <AuthContext.Provider value={{
            credentials,
            setCredentials,
            handleLogIn,
            handleSignUp
        }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
