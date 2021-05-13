import React from 'react'

const ReviewCard = ({review, editClick, deleteClick, user, loggedIn}) => {
    
    
    return (
        <div className="review-card">
            <div className="review-left">
                <p>{review.user_id}</p>
                { user.id == review.user_id ? 
                <div>
                    <button onClick={(e) => editClick(e, review)}>Edit</button>
                    <button onClick={(e) => deleteClick(e, review)}>Delete</button>
                </div> : null
                }
            </div>
            <div className="review-right">
                <p>{review.created_at.slice(0,10)}</p>
                <p>{review.title}</p>
                <p>{review.content}</p>
                <p>{review.score}</p>
            </div>
        </div>
    )
}

export default ReviewCard;