import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Show from './pages/Show'
import Navigation from './components/Navigation'

import './App.css';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount = () => {
    // this.getUsers()
    this.getMovies()
  }

  // getUsers = () => {
  //   fetch("http://localhost:3000/users")
  //   .then(res => res.json())
  //   .then(users => console.log(users))
  //   //this.setState({ users })
  // }

  getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies => this.setState({ movies }))    
  }
  

  submitForm = (review) => {
      fetch(`http://localhost:3000/reviews`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(this.getMovies())
  }
 
  editSubmit = (review, e) => {
    e.stopPropagation();
    fetch(`http://localhost:3000/reviews/${review.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(() => this.getMovies())
  }
  
  deleteClick = (e, review) => {
    // e.stopPropagation()
    console.log(review)
    fetch(`http://localhost:3000/reviews/${review.id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => this.getMovies())
    
  }
  
  render () {
    
    return (
      <div>
        <div>
            <Navigation />
        </div>

        <Switch>
            <Route exact path="/movies">
                <Home movies={this.state.movies} />
            </Route>
            
            <Route path="/movies/:id" render={(routerProps)=>{
              let movie = this.state.movies.find(movie => routerProps.match.params.id == movie.id)
              return <Show movie={movie} submitForm={this.submitForm} editSubmit={this.editSubmit} deleteClick={this.deleteClick}/>
            }}/>
            
            <Route exact path="/register">
                <Register />
            </Route>
            
            <Route exact path="/user">
                <Profile />
            </Route>

            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    </div>
    )
  }
}

export default App;
