import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard.jsx";

const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3200/movies").then((resp) => {
            setMovies(resp.data.data);            
        });

    }, []);
    return (
        <>
    <main>
        <section className="container py-5">
            <h1 className="text-center">Movies</h1>
            <div className="row g-3">
                {movies.map((curMovie) => (
                    <div key={curMovie.id} className="col">
                        <MovieCard movie={curMovie} />
                    </div>
                ))}                
            </div>
        </section>
    </main>
        </>
    );
};

export default Movies;