import { useEffect, useState } from "react";
import axios from "axios";

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
            <h1>Movies</h1>
            </main>
        </>
    );
};

export default Movies;