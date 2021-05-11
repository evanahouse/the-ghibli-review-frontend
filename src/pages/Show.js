import React, { Component } from 'react'
import ShowCard from '../components/ShowCard'

export default class Show extends Component {
    render() {
        return (
            <div>
                <ShowCard movie={this.props.movie} hide={this.props.hide}/> 
            </div>
        )
    }
}
