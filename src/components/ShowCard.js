import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ShowCard extends Component {
    render() {
        return (
            <div className="main-show">
                <button onClick={(e) => this.props.hide(e)}>x</button>
                <div className="left-show">
                    <img src={this.props.movie.image_url}></img>
                    <h2>{this.props.movie.title} ({this.props.movie.release_date}) </h2>
                </div>
                <div className="right-show">
                    <p>{this.props.movie.original_title} "{this.props.movie.original_title_romanized}"</p>
                    <p>Director: {this.props.movie.director}</p>
                    <p>Producer: {this.props.movie.producer}</p>
                    <p>Runtime: {this.props.movie.run_time} minutes</p>
                    <p>Rotten Tomatoes: {this.props.movie.rt_score}%</p>
                    <p>Description: {this.props.movie.description}</p>
                </div>
                <Link to="/new" >Leave A Review</Link>
            </div>
        )
    }
}
