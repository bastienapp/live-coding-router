import React from 'react';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <MovieList />
      <ContactUs />
    </main>
  );
}

export default App;
