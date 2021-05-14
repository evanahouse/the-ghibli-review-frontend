import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MovieCard extends Component {
    
    render() {
        return (
            
            <div className="movie-card" id={this.props.movie.id}>
                <div className="img_img">
                    <Link  to={`/movies/${this.props.movie.id}`}><img src={this.props.movie.image_url}></img></Link>
                </div>
                <div className="image-description">
                    <h3 >{this.props.movie.title} ({this.props.movie.release_date}) </h3>
                </div>
            </div>

            
            
        )
    }
}
