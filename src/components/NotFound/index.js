import { Link } from "react-router-dom"
import '../HomePage/HomePage.css'

function HomePage () {
  return (
    <div className="homepage">
      <Link to='/films'>
        <img src='404.png' className="theater" alt='theater'/>
      </Link>
    </div>
  )
}

export default HomePage
