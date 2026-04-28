
import './MovieCard.css'
function MovieCard({ movie, onClick }) {
    const poster = movie.Poster !== "N/A"
        ? movie.Poster
        : "https://placehold.co/300x450/png";

    return (
        <div className="movie-card" onClick={onClick} style={{ cursor: "pointer" }}>
                <img src={poster} alt={movie.Title} />

            <div className="movie-card-content">
                <h3>{movie.Title || "Sin título"}</h3>
                <p>Año: {movie.Year || "No disponible"}</p>
                <p>Tipo: {movie.Type || "No especificado"}</p>
            </div>
        </div>
    );
}

export default MovieCard;
