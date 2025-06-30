import { Link } from "react-router-dom";
const MovieCard = ({ movie}) => {
    const { id, title, director, abstract, image} = movie;
    return (
            <div className="card h-100">
  <img src={image} className="card-img-top" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{title}  -  {director}</h5>
    <p className="card-text">{abstract}</p>
    <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
  </div>
</div>
    );
};

export default MovieCard;

