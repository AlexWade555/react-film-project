// import FilmDetail, { FilmDetailEmpty } from '../FilmDetail'
import { useState, useEffect } from 'react'
import './FilmLibrary.css'
import FilmRow from '../FilmRow'
import { TMDB_API_KEY } from '../../TMDB'
import { Outlet } from 'react-router-dom'

function FilmLibrary() {
  const [filmMap, setFilmMap] = useState([])
  // const [selectedFilm, setSelectedFilm] = useState(null)
  const [page, setPage] = useState(1)
  const [selectYear, setSelectYear] = useState(2022)
  const years = [2023,2022,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990]
  // TMDB.films.map(movie => console.log(movie))

  // const selectFilm = (id) => {
  //   // console.log(id)s
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setSelectedFilm(data))
  // }

  // console.log(selectedFilm)

  useEffect(() => {
    fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&primary_release_year=${selectYear}`
      )
        .then((response) => response.json())
        .then((data) => setFilmMap([...filmMap,...data.results]))
        .catch((error) => console.log(error))
  }, [page, selectYear])

  const handleMore = () => {
    const currentPage = page + 1
    setPage(currentPage)
  }

  // useEffect(() => {
  //   selectFilm()
  // }, [])

  const handleYear = (year) => {
    setFilmMap([])
    setSelectYear(year.target.value)
  }

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button className="film-list-filter is-active">
            ALL
            <span className="section-count">{filmMap.length}</span>
          </button>
          <button className="film-list-filter">
            FAVES
            <span className="section-count">{filmMap.filter((item) => item.isFav === true).length}</span>
          </button>
        </div>
        <div className="film-list-year">
          <select className='year-dropdown' onChange={(year) => handleYear(year)}>
            <option className='year-dropdown'>
              Select a year
            </option>
            {years.map((year) => (
            <option className='year-dropdown' key={year} value={year}>
              {year}
            </option>

            ))}
          </select>
        </div>

        {filmMap.map((movie) => (
          <FilmRow
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            backdrop={movie.backdrop_path}
            desc={movie.overview}
            date={movie.release_date}
            // selectFilm={selectFilm}
            // selectedFilm={selectedFilm}
            // handleAddFav={handleAddFav}
            {...movie}
          />
        ))}
        <div className="film-list-load">
          <button className="film-list-filter is-active" onClick={handleMore}>
            LOAD MORE...
          </button>
        </div>
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        {/* {selectedFilm ? <FilmDetail {...selectedFilm} /> : <FilmDetailEmpty />} */}
          <Outlet />

      </div>
    </div>
  )
}

export default FilmLibrary
