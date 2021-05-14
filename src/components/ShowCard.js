import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormReview2 from './FormReview2'
import FormEditReview from './FormEditReview'
import ReviewCard from './ReviewCard'

export default class ShowCard extends Component {
    state = {
        showForm: false,
        showEditForm: false,
        review: {}
    }

    handleShowForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    hideEditForm = () => {
        this.setState({showEditForm: !this.state.showEditForm})
    }

   

    editClick = (e, review) => {
        e.preventDefault();
        this.setState({showEditForm: !this.state.showEditForm})
        this.setState({review})
    }

    render() {
        return (
        <div className="show-container">
            <div className="main-show">
                <div className="exit-show"><Link to="/movies">x</Link></div>
                <div className="left-show">
                    <img id="show-image" src={this.props.movie.image_url}></img>
                </div>
                <div className="right-show">
                    <h1>{this.props.movie.title} ({this.props.movie.release_date}) </h1>
                    <p>{this.props.movie.original_title} "{this.props.movie.original_title_romanized}"</p>
                    <p>Director: {this.props.movie.director}</p>
                    <p>Producer: {this.props.movie.producer}</p>
                    <p>Runtime: {this.props.movie.run_time} minutes</p>
                    <p>Rotten Tomatoes: {this.props.movie.rt_score}%</p>
                    <p>Description: {this.props.movie.description}</p>
                </div>
                <div hidden={!this.state.showForm} className="review-form">
                    {this.state.showForm === true ? <FormReview2 className="review-pop-up" movie={this.props.movie} user={this.props.user} handleShowForm={this.handleShowForm} submitForm={this.props.submitForm}/> : null}
                </div>
                <div hidden={!this.state.showEditForm} className="review-form">
                    {this.state.showEditForm === true ? <FormEditReview className="review-pop-up" review={this.state.review} movie={this.props.movie} hideEditForm={this.hideEditForm} editSubmit={this.props.editSubmit}/> : null}
                </div>
                <div className="show-review">
                    <button className="show-button" onClick={() => this.handleShowForm()}>Leave A Review</button>
                </div>
                <div className="show-background">
                </div> 
                <div className="reviews-container">
                    <h1>Reviews</h1>
                    {this.props.movie.reviews.map(review => <ReviewCard key={review.id} review={review} editClick={this.editClick} deleteClick={this.props.deleteClick} loggedIn={this.props.loggedIn} user={this.props.user} users={this.props.users}/>)}
                </div>
            </div>
        </div>
        )
    }
}
