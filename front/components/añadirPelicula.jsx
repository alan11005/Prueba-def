import React from "react";
import './../styles/añadirPelicula.css'

export default function añadirPelicula() {

    async function fetchData() {
        const data = await pelis();
        console.log(data)
        const options = data
    }

    useEffect(() => {
        fetchData();
    }, [])

    async function pelis() {
        try {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzdlZDljYjAzMTFjYmVhOWNhMjE4OWM5NDk4MGE0YSIsInN1YiI6IjY0ZGYwZDExYWFlYzcxMDNmYTQ3ZGZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sgrIVp_p4j71L7p5OMemQ6no-ch_wwTGFetRuH2eQu4'
                }
            })

            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }

            const data = await response.json();

            //return data.results.map(d => {
            //    if (d.title) return d.title;
            //    if (d.overview) return d.overview;
            //    if (d.poster_path) return d.poster_path;
            //});

            const movies = data.results.map(movieData => ({
                title: movieData.title,
                overview: movieData.overview,
                poster_path: movieData.poster_path
            }));

            return movies

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="box container mt-4">
                <h1>Formulario con Botón Select y Añadir Película</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="selectOption" className="form-label">Selecciona una opción:</label>
                        <select
                            className="form-select"
                        >
                            {{options}.map(option => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary me-2">Enviar</button>
                    <button type="button" className="btn btn-success" onClick={handleAddMovie}>Añadir Película</button>
                </form>
            </div>
        </div>
    )
}