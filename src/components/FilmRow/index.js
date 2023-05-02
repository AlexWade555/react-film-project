import './FilmRow.css'
import { Link } from 'react-router-dom'

const FilmRow = (props) => {
  // key={movie.id}
  // title={movie.title}
  // poster={movie.poster_path}
  // backdrop={movie.backdrop_path}
  // desc={movie.overview}
  // date={movie.release_date}

  return (
    <div className='FilmRowContainer'>
      <div className="FilmRow">
        <img
          src={`https://image.tmdb.org/t/p/w780${props.poster}`}
          alt={`${props.title} film poster`}
        />
        <div className="film-summary">
          <h3>{props.title}</h3>
          <p>{props.release_date.substring(0, 4)}</p>
          <div className="actions">
            <button className="action">
              <span className="material-icons">add_to_queue</span>
            </button>


            {/* <button className="action">
              <span
                className="material-icons"
                onClick={() => props.selectFilm(props.id)}
              >
                read_more
              </span>
            </button> */}

            <Link to={`${props.id}`} className="action">
              <span className="material-icons">read_more</span>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmRow
