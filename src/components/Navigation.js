import React from 'react'
import { Link, Redirect } from 'react-router-dom'

class Navigation extends React.Component {
    render(){
        return(
            <div className="navbar">
                    <div>
                    </div>
                    <div className="nav-logo">
                        <h1>ghibli gab</h1>
                    </div>
                
                    <div className="nav-links">
                        <Link to="/movies" className="nav-link">browse</Link>
                        <Link to="/register" className="nav-link">register</Link>
                        <Link to="/" className="nav-link">login</Link>
                    </div>
                  
                
                
              </div>
        )
    }
}

export default Navigation