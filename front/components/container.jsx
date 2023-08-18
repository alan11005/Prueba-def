import React, { useState, useEffect } from 'react';
import "./../styles/container.css";

export default function Container() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  async function fetchData() {
    const data = await pelis();
    setOptions(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function pelis() {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzdlZDljYjAzMTFjYmVhOWNhMjE4OWM5NDk4MGE0YSIsInN1YiI6IjY0ZGYwZDExYWFlYzcxMDNmYTQ3ZGZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgrIVp_p4j71L7p5OMemQ6no-ch_wwTGFetRuH2eQu4'
        }
      });

      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

      const data = await response.json();
      const movies = data.results.map(movieData => ({
        title: movieData.title,
        overview: movieData.overview,
        poster_path: movieData.poster_path
      }));

      return movies;
    } catch (err) {
      console.log(err);
    }
  }

  async function postMovie(selectedMovie) {
    const backendURL = 'http://127.0.0.1:8000/api/movies'

    const movieInfo = options.find(option => option.title === selectedMovie);

    const movieData = {
      name: movieInfo.title,
      description: movieInfo.overview,
      image_url: `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`,
    };

    console.log(movieData)
    
    try {
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieData),
      });

      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }

    } catch (error) {
      console.error(error);
    }

  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Actualiza el estado con la opción seleccionada
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedOption) {
      await postMovie(selectedOption);
      setSelectedOption(""); // Limpiar la opción seleccionada después de enviarla al backend
    }
  };

  return (
    <div class="centered-container ">
      <form class="form">
        Añadir pelicula
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Seleccionar película</option>
          {options.map(option => (
            <option key={option.title} value={option.title}>
              {option.title}
            </option>
          ))}
        </select>
        <button onClick={handleSubmit}>Agregar </button>
      </form>
    </div>
  );
}
