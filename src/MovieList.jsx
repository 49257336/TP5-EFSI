import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
    return (
        <div>
            {movies.map(movie => (
                <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onClick={() => onSelect(movie)}
                />
            ))}
        </div>
    );
}

export default MovieList;