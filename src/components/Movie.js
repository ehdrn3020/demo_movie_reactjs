import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({key, id, title, coverImage, summary, genres}) {

    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImage} />
            <p>{summary}</p>
            <ul>
            {genres.map(g => (<li key={g}>{g}</li>))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;