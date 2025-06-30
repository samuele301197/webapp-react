import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3200/movies/${id}`).then(resp => {

      
      setMovie(resp.data.data);
    });
  }, [id]);

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
  }



    return (
      <>      
      <main>
        {movie && movie.image && (
          <section>
            <img className="banner" src={`/img/${movie.image}`} alt={movie.title} />
          </section>
          )}
          {movie && (         
          <section className="container text-center">
            <a className="btn btn-outline-primary m-4" href="" onClick={goBack}>Torna indietro</a>
            <h1> {movie.title} - {movie.director}</h1>
            <p>{movie.abstract}</p>
            <p>Vote: {movie.vote}</p>
            <div>
            <h3>Recensioni</h3>
            <p>{movie.name} - {movie.text}</p>
          </div>
          </section>

          )}
      </main>
      </>
    );
};

export default SingleMovie;