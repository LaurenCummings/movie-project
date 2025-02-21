import './css/App.css';
import PopMovies from './pages/PopMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import Favorites from './pages/Favorites';
import People from './pages/People';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PopMovies />} />
          <Route path="/movie-project" element={<PopMovies />} />
          <Route path="/upcoming-movies" element={<UpcomingMovies />} />
          <Route path="/people" element={<People />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
