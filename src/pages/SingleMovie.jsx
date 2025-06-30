import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3200/movies/${id}`).then(resp => {
      setMovie(resp.data.data);
    });
  }, []);
    return (
      <main>
        {movie && (
          <section>
            <h1> {movie.title}</h1>
          </section>
        )}
      </main>
    );
};

export default SingleMovie;