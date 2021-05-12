import React from 'react'
import MovieCard from '../components/MovieCard'



class Home extends React.Component {
render(){
        return (
            <div className="main-container">
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