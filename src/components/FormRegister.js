import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const FormRegister = ({registerUser}) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    let registerSubmission = {
            username: username,
            password: password,
            password2: password2
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setErrors(validateRegister(registerSubmission))
        setIsSubmitting(true)
    }

    const validateRegister = (registerSubmission) => {
        let errors = {}
        if(!registerSubmission.username.trim()) {
            errors.username = "Username required"
        }

        //Password
        if(!registerSubmission.password) {
            errors.password = 'Password is required'
        } 
        // else if (password.length < 1) {
        //     errors.password = "Password needs to be 6 characters or more"
        // }

        //Confirm Password
        if(!registerSubmission.password2) {
            errors.password2 = "Password is required"
        } else if (registerSubmission.password2 !== registerSubmission.password)  {
            errors.password2 = 'Passwords do not match'
        }
        // console.log(errors)
        return errors
    }

    useEffect(() => {
        // console.log(errors)
        if(Object.keys(errors).length === 0 && isSubmitting){
          registerUser(registerSubmission)  
        }
        
    }, [errors, isSubmitting])
  
    
    
        return (
           <div className="register-container">
                <h1>Register:</h1>
                <div className="form-container">
                    <form onSubmit={handleRegister}> 
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
                    <label htmlFor="password2">
                        Confirm Password:
                        <br/><input
                        type="password"
                        name="password2"
                        placeholder="Confirm Password Here"
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}
                        />
                    </label>{errors.password2 && <p>{errors.password2}</p>}<br/><br/>
                    <p className="forgot-password text-right">
                    Already registered <Link to="/">sign in?</Link>
                    </p>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

    export default FormRegister


 