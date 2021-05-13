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
           <div className="login-container">
                <h1>Login:</h1>
                <div className="login-form">
                    <form onSubmit={handleLogin}> 
                    <label htmlFor="username"><br/>
                        Username: 
                        <br/><input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />{errors.username && <p>{errors.username}</p>}<br/>
                    </label><br/>
                    <label htmlFor="password">
                        Password:
                        <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />{errors.password && <p>{errors.password}</p>}<br/><br/>
                    </label>
                    <p className="forgot-password text-right">
                    No account? <Link to="/register">Register Here</Link>
                    </p>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

    export default FormRegister


 