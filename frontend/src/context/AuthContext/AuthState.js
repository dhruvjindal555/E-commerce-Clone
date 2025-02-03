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
    const fetchUserDetails = async () => {
        try {
          const response = await fetch('http://localhost:8888/user', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'authToken': window.localStorage.getItem('authToken')
            }
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
      
          const data = await response.json();
          if (data.success) {
            return data.user;
          }else{
            console.log(data.message);            
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };
      
  
      const updateUserDetails = async (userData) => {
        try {
            const response = await fetch('http://localhost:8888/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': window.localStorage.getItem('authToken')
                },
                body: JSON.stringify({
                    fullName: userData.fullName,
                    email: userData.email,
                    phoneNumber: userData.phoneNumber,
                    address: {
                      street: userData.address.street,
                      city: userData.address.city,
                      state: userData.address.state || '', // Optional
                      pinCode: userData.address.pinCode,
                      country: userData.address.country
                    }
                  })
            });
    
            const responseData = await response.json(); // Always parse the response first
    
            if (!response.ok) {
                throw new Error(responseData.message || 'Update failed'); // Throw an error with the server message
            }
    
            return responseData;
        } catch (error) {
            console.error('Error updating user details:', error);
            throw error; // Re-throw the error so that handleSubmit can process it
        }
    };
    
      
    return (
        <AuthContext.Provider value={{
            credentials,
            setCredentials,
            handleLogIn,
            handleSignUp,
            fetchUserDetails,
            updateUserDetails
        }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
