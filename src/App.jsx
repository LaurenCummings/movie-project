import './css/App.css';
import Home from './pages/Home';
import PopMovies from './pages/PopMovies';
import MoviePage from './pages/MoviePage';
import PersonPage from './pages/PersonPage';
import NowShowing from './pages/NowShowing';
import Favorites from './pages/Favorites';
import PopPeople from './pages/PopPeople';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-project" element={<Home />} />
          <Route path="/movie-page" element={<MoviePage />} />
          <Route path="/person-page" element={<PersonPage />} />
          <Route path="/now-showing" element={<NowShowing />} />
          <Route path="/pop-movies" element={<PopMovies />} />
          <Route path="/pop-people" element={<PopPeople />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
