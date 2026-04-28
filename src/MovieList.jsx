import MovieCard from "./MovieCard";
import './MovieList.css'

function MovieList({ movies, onSelect }) {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() => onSelect(movie.imdbID)}
                />
            ))}
        </div>
    );
}

export default MovieList;