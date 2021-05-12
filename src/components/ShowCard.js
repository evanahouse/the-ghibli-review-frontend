import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormReview from './FormReview'

export default class ShowCard extends Component {
    state = {
        showForm: false
    }

    handleShowForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    render() {
        return (
            <div className="main-show">
                <Link to="/movies">x</Link>
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
                <button onClick={() => this.handleShowForm()}>Leave A Review</button>
                {this.state.showForm === true ? <FormReview movieId={this.props.movie.id} handleShowForm={this.handleShowForm} handleSubmit={this.props.handleSubmit}/> : null}
                
                {/* <div>
                    {this.props.movie.reviews.forEach(review => {
                        return <div><p>review.title</p></div>
                    })}
                </div> */}
            </div>
        )
    }
}
