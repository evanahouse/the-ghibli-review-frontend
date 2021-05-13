import React, { useState } from "react";

const FormReview2 = ({movie, submitForm, handleShowForm, user}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");

   const handleSubmit = (e) => {
    // e.preventDefault()
        let reviewSubmission = {
            title: title,
            content: content,
            score: parseInt(rating),
            movie_id: movie.id,
            user_id: user.id
        }
    submitForm(reviewSubmission, e)
    handleShowForm()
}
  

  return (
    <div className="review-container">
        <h1>Review: {movie.title}</h1>
        <div className="form-container">
            <form onSubmit={handleSubmit}> 
            <label htmlFor="name"><br/>
                Title: 
                <br/><input
                type="text"
                name="name"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                /><br/>
            </label><br/>
            <label htmlFor="content">
                Content:
                <input
                type="textarea"
                name="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                /><br/><br/>
            </label>
            <label htmlFor="rating">
                Rating:
                <br/><input
                type="text"
                name="rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                />
            </label><br/><br/>
            <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  );
}

export default FormReview2;