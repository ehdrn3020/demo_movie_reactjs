import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const respone = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
        const json = await respone.json()
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
          <h1>The Movies! ({movies.length})</h1>
          { loading ? <strong>Loading...</strong> : 
          <div>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                title={movie.title} 
                coverImage = {movie.medium_cover_image} 
                summary={movie.summary} 
                genres={movie.genres}
              /> 
            ))}
          </div> }
        </div>
      );
}

export default Home;