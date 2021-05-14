import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const FormRegister = ({loginUser}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    let loginSubmission = {
            username: username,
            password: password,
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setErrors(validateLogin(loginSubmission))
        setIsSubmitting(true)
    }

    const validateLogin = (loginSubmission) => {
        let errors = {}
        //Username
        if(!loginSubmission.username.trim()) {
            errors.username = "Username required"
        }

        //Password
        if(!loginSubmission.password) {
            errors.password = 'Password is required'
        } 
        return errors
    }

    useEffect(() => {
        // console.log(errors)
        if(Object.keys(errors).length === 0 && isSubmitting){
          loginUser(loginSubmission)  
        }
        
    }, [errors, isSubmitting])
  
    
    
        return (
           <div className="register-container">
                <div><h3>Login:</h3>
                    <form className="validate-form" onSubmit={handleLogin}> 
                    <label htmlFor="username">Username: {errors.username && <span className="error-message">{errors.username}</span>}</label>
                        <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    <label htmlFor="password">Password: {errors.password && <span className="error-message">{errors.password}</span>}</label>
                        <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    <p className="forgot-password text-right">
                    No account? <Link to="/register">Register Here</Link>
                    </p>
                    <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        );
    }

    export default FormRegister


 