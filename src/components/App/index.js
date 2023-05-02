import FilmLibrary from '../FilmLibrary';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import FilmDetail, {FilmDetailEmpty} from '../FilmDetail';

function App() {
  return (
    <BrowserRouter>
      {/* <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/films'>Films</NavLink>
      </nav> */}

      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/films" element={<FilmLibrary/>}>
          <Route index element={<FilmDetailEmpty/>}/>
          <Route path=":filmId" element={<FilmDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
