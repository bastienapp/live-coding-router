import React from 'react';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import MovieList from './components/MovieList';
import './App.css';
import './components/NavBar.css';

function App() {
  return (
    <main className="App">
      <nav className="NavBar">
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <Home />
      <MovieList />
      <ContactUs />
    </main>
  );
}

export default App;
