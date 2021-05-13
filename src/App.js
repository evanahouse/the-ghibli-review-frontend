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
    movies: [],
    user: {},
    loggedIn: false
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
  

  submitForm = (review, e) => {
      e.preventDefault()
      fetch(`http://localhost:3000/reviews`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
    .then(() => this.getMovies())
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

  registerUser = (submission) => {
    let user = {
      username: submission.username,
      password: submission.password
    }
    fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(userResp => {
      let createdUser = {
        username: userResp.username,
        id: userResp.id
      }
      this.setState({
        user: createdUser,
        loggedIn: true
      })
    })
  }
  
  loginUser = (submission) => {
    fetch(`http://localhost:3000/auth`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submission)
    })
    .then(res => res.json())
    .then(userResp => {
        if(userResp.error){
            alert(userResp.error)
        }
        else {
        let createdUser = {
            username: userResp.username,
            id: userResp.id
        }
        this.setState({
            user: createdUser,
            loggedIn: true
        })
        }
    })
  }

  handleLogout = (e) => {
    this.setState({
        loggedIn: false,
        user: {}
    })
  }
  
  render () {
    
    return (
      <div>
        <div>
            <Navigation user={this.state.user} loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}/>
        </div>

        <Switch>
            <Route exact path="/movies">
                <Home movies={this.state.movies} />
            </Route>
            
            <Route path="/movies/:id" render={(routerProps)=>{
              let movie = this.state.movies.find(movie => routerProps.match.params.id == movie.id)
              return <Show movie={movie} submitForm={this.submitForm} editSubmit={this.editSubmit} deleteClick={this.deleteClick} loggedIn={this.state.loggedIn} user={this.state.user}/>
            }}/>
            
            <Route exact path="/register">
                {this.state.loggedIn ? <Redirect to="/movies" /> : <Register registerUser={this.registerUser}/>}
            </Route>
            
            <Route exact path="/user">
                <Profile />
            </Route>

            <Route exact path="/">
                {this.state.loggedIn ? <Redirect to="/movies" /> : <Login loginUser={this.loginUser}/> }
            </Route>
        </Switch>
    </div>
    )
  }
}

export default App;
