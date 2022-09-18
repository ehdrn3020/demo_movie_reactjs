import PropTypes from "prop-types";

function Movie({key, title, coverImage, summary, genres}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImage} />
            <p>{summary}</p>
            <ul>
            {genres.map(g => (<li key={g}>{g}</li>))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;