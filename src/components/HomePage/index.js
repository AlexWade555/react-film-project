import { Link } from "react-router-dom"
import './HomePage.css'

function HomePage () {
  return (
    <div className="homepage">
      <Link to='/films'>
        <img src='theater.png' className="theater" alt='theater'/>
      </Link>
    </div>
  )
}

export default HomePage
