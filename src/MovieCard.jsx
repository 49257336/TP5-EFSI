function MovieCard({ movie, onClick }) {
    const poster = movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450";

    return (
        <div onClick={onClick} style={{ cursor: "pointer" }}>
            <img src={poster} alt={movie.Title} />

            <h3>{movie.Title || "Sin título"}</h3>
            <p>Año: {movie.Year || "No disponible"}</p>
            <p>Tipo: {movie.Type || "No especificado"}</p>
        </div>
    );
}

export default MovieCard;