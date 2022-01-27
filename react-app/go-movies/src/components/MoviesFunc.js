import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

function MoviesFunc(props) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  // const [errors, setErrors] = useState([]);
  // const [alert,setAlert] = useState({type: "d-none", message: ""});
  useEffect(() => {
    fetch("http://localhost:4000/v1/movies")
      .then((response) => {
        console.log("Status code is ", response.status);
        if (response.status !== 200) {
          setError("Invalid response code: " + response.status);
        } else {
          setError(null);
        }
        return response.json();
      })
      .then((json) => {
        setMovies(json.movies);
      });
  }, []); // *** must set default value

  if (error !== null) {
    return <div> Error: {error.message}</div>;
  } else {
    return (
      <Fragment>
        <h2>Choose a Movie</h2>

        <div className="list-group">
          {movies.map((m) => (
            <Link
              key={m.id}
              to={`/movies/${m.id}`}
              className="list-group-item list-group-item-action"
            >
              {m.title}
            </Link>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default MoviesFunc;
