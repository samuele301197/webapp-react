import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewList from "../components/reviews/ReviewList";
import axios from "axios";

const SingleMovie = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3200/movies/${id}`).then(resp => {
      console.log(resp.data.data);
      

      
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
            <img className="banner" src={movie.image} alt={movie.title} />
          </section>
          )}
          {movie && (         
          <section className="container text-center">
            <a className="btn btn-outline-primary m-4" href="" onClick={goBack}>Torna indietro</a>
            <h1> {movie.title} - {movie.director}</h1>
            <p>{movie.abstract}</p>
            <p>Vote: {movie.vote}</p>
            <div className="container">
            <h2>Recensioni</h2>
            <ReviewList reviews={movie.reviews} />
          </div>
          </section>

          )}
      </main>
      </>
    );
};

export default SingleMovie;