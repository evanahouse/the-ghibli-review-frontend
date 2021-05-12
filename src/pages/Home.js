import React from 'react'
import MovieCard from '../components/MovieCard'
import Show from '../pages/Show'
import { Route } from 'react-router-dom';


class Home extends React.Component {
render(){
        return (
            <div className="main-container">
                <h1>All Movies</h1>
                <div className="movie-container">
                    {this.props.movies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie} selectMovie={this.props.selectMovie}  />
                    })}
                </div>

            </div>
        )
    }

}
export default Home