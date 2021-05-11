import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieCard extends Component {
    
    render() {
        return (
            <div  className="movie-card" id={this.props.movie.id} onClick={(e) => this.props.selectMovie(e)}>
                <img src={this.props.movie.image_url}></img>
                <h2>{this.props.movie.title} ({this.props.movie.release_date}) </h2>
            </div>  
        )
    }
}
