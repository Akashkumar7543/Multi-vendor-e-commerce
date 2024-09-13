import React from 'react'
import Template from '../components/core/Auth/Template'
import loginImg from "../assets/login.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Shop for today, tomorrow, and beyond."
      desc2="Shop to groom your fashion."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
