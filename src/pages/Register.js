import React, { Component } from 'react'
import FormRegister from '../components/FormRegister'

export default class Register extends Component {
    render() {
        return (
            <div>
                <FormRegister registerUser={this.props.registerUser}/>
            </div>
        )
    }
}
