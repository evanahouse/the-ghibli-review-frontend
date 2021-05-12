import React, { Component } from "react";


export default class FormLogin extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitLogin}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    }
}