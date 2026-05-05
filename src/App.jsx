import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'
import Loader from './Loader.jsx'
import ErrorMessage from './ErrorMessage.jsx'
import { searchMovies } from './api.js'
import './App.css'

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(null);
        setHasSearched(true);

        try {
            const data = await searchMovies(query);

            if (data.Response === "False") {
                setMovies([]);
            } else {
                setMovies(data.Search);
            }
        } catch (err) {
            setError("Error al buscar películas");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="app">
        <header className="header">
            <h1>Buscador de Películas</h1>
            <SearchBar onSearch={handleSearch} />
        </header>

        <div className="container">
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}

            {hasSearched && !loading && !error && movies.length === 0 && (
                <p className="no-results">Sin resultados</p>
            )}

            <MovieList movies={movies} onSelect={setSelectedId} />

            {selectedId && <MovieDetail imdbID={selectedId} />}
        </div>
    </div>
    );
}

export default App;
