import { useEffect, useState } from "react";
import { getMovieById } from "../services/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function MovieDetail({ imdbID }) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getMovieById(imdbID);

                if (data.Response === "False") {
                    setError("No se pudo cargar el detalle");
                } else {
                    setMovie(data);
                }
            } catch (err) {
                setError("Error al obtener detalle");
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [imdbID]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;
    if (!movie) return null;

    const poster = movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/300x450";

    return (
        <div>
            <h2>{movie.Title || "Sin título"}</h2>

            <img src={poster} alt={movie.Title} />

            <p><strong>Año:</strong> {movie.Year || "No disponible"}</p>
            <p><strong>Género:</strong> {movie.Genre || "No disponible"}</p>
            <p><strong>Director:</strong> {movie.Director || "No disponible"}</p>
            <p><strong>Actores:</strong> {movie.Actors || "No disponible"}</p>
            <p><strong>Sinopsis:</strong> {movie.Plot || "No disponible"}</p>
            <p><strong>Duración:</strong> {movie.Runtime || "No disponible"}</p>
            <p><strong>Idioma:</strong> {movie.Language || "No disponible"}</p>
            <p><strong>País:</strong> {movie.Country || "No disponible"}</p>
            <p><strong>IMDb:</strong> {movie.imdbRating || "No disponible"}</p>
        </div>
    );
}

export default MovieDetail;