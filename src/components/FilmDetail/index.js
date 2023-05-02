import './FilmDetail.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { TMDB_API_KEY } from '../../TMDB'

//           key={movie.id}
//           title={movie.title}
//           poster={movie.poster_path}
//           backdrop={movie.backdrop_path}
//           desc={movie.overview}
//           date={movie.release_date}
//           selectFilm={selectFilm}

function FilmDetail() {
  const id = useParams()
  const [ selectedFilm, setSelectedFilm ] = useState()
  console.log(id.filmId)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id.filmId}?api_key=${TMDB_API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => setSelectedFilm(data)
    )
  }, [id.filmId])

  console.log(selectedFilm)

  if (selectedFilm) {
    return (
      <div className="FilmDetail is-hydrated">
        <figure className="film-backdrop">
          <img src={`https://image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path}`} alt="Movie backdrop" />
          <h1 className="film-title">{selectedFilm.original_title}</h1>
        </figure>

        <div className="film-meta">
          <h3>{selectedFilm.tagline}</h3>
          <p className="film-detail-overview">
            <img src={`https://image.tmdb.org/t/p/w780${selectedFilm.poster_path}`} className="film-detail-poster" alt={'Movie poster'} />
            {selectedFilm.overview}
          </p>
        </div>
      </div>
    )
  }
}

export function FilmDetailEmpty() {
  return (
    <div className="FilmDetail">
    <p>
      <i className="material-icons">subscriptions</i>
      <span>No film selected</span>
    </p>

  </div>
  )
}

export default FilmDetail
