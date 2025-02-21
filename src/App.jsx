import './css/App.css';
import PopMovies from './pages/PopMovies';
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
          <Route path="/" element={<PopMovies />} />
          <Route path="/movie-project" element={<PopMovies />} />
          <Route path="/now-showing" element={<NowShowing />} />
          <Route path="/pop-people" element={<PopPeople />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
