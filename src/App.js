import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Show from './pages/Show'

import './App.css';

class App extends React.Component {
  state = {
    movies: [],
    movie: {},
    show: false

  }

  componentDidMount = () => {
    this.getMovies()
  }

  getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then(movies => this.setState({ movies }))    
  }
  
  selectMovie = (e) => {
    let id = e.target.parentElement.id
    this.getMovie(id)
    this.setState({show: true})
  }

  hide = (e) => {
    // e.preventDefault()
    this.setState({show: false})

  }
  
  getMovie = (id) => {
    fetch(`http://localhost:3000/movies/${id}`)
    .then(res => res.json())
    .then(movie => this.setState({ movie }))
  }

  render () {
    
    return (
      <div>
        <div>
            Navigation
        </div>

        <Switch>
            <Route exact path="/">
                <Login />
            </Route>

            <Route path="/movies">
                <Home movie={this.state.movie} movies={this.state.movies} selectMovie={this.selectMovie} show={this.state.show} hide={this.hide}/>
            </Route>
            
            <Route path="/register">
                <Register />
            </Route>
            
            <Route path="/user">
                <Profile />
            </Route>
        </Switch>
    </div>
    )
  }
}

export default App;
