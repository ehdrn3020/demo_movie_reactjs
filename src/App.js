import Button from "./Buttom";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
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

  console.log(movies);
  return (
    <div>
      <h1>The Movies! ({movies.length})</h1>
      { loading ? <strong>Loading...</strong> : 
      <div>
        {movies.map(x=> ( 
        <div key={x.id}>
          <h2>{x.title}</h2>
          <img src={x.medium_cover_image} />
          <p>{x.summary}</p>
          <ul>
            {x.genres.map(g => (<li key={g}>{g}</li>))}
          </ul>
        </div>
        ))}
      </div> }
    </div>
  );
}

export default App;
