import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewList from "../components/reviews/ReviewList";
import ReviewForm from "../components/reviews/ReviewForm";
import axios from "axios";

const SingleMovie = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const getMovieDetails = () => {
    axios.get(`http://localhost:3200/movies/${id}`).then(resp => {
      setMovie(resp.data.data);
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  const goBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };

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
        <section className="container py-5">
          <h2 className="text-center">Lascia la tua recensione</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-xl-6">
              <div className="card">
                <ReviewForm
                  movie_id={movie?.id}  // usa optional chaining per sicurezza
                  reloadReviews={getMovieDetails}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleMovie;
