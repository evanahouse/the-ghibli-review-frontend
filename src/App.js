import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
  
  handleSubmitReview = (review) => {
    console.log(review)
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
              console.log(routerProps)
              let movie = this.state.movies.find(movie => routerProps.match.params.id == movie.id)
              return <Show movie={movie} handleSubmit={this.handleSubmitReview}/>
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
