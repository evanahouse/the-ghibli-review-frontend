import React, { Component } from 'react';

class FormReview extends Component {

  state = {
      review: {
        title: "",
        content: "",
        user_id: "",
        movie_id: this.props.movie_id,
        score: ""
      }
  }

  handleChange=(e)=>{
    this.setState({review: {...this.state.review, [e.target.name]: e.target.value}})
    // console.log(e.target.value)
  }

  render() {
    return (
      <form className="note-editor">
        <label>Title:</label>
        <input type="text" name="title" defaultValue={this.state.review.title} onChange={this.handleChange}/><br/>
        
        <label>Content:</label>
        <textarea name="content" defaultValue={this.state.review.content} onChange={this.handleChange}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={
            (e) => this.props.submitClick(e, this.state.review)
          }/>
          <button onClick={(e) => this.props.handleShowForm(e, this.state.review)} type="button">Cancel</button>
          {/* <button onClick={(e) => this.props.deleteClick(e, this.props.noteToEdit)} type="button">Delete</button> */}
        </div>
      </form>
    );
  }
}

export default FormReview;