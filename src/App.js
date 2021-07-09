import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerCard from './components/PlayerCard'

function App() {
  return (
    <div className="App">
      <PlayerCard first_name='Jane' last_name='Doe' age={45} hair_color='Black'/>
      <PlayerCard first_name='John' last_name='Smith' age={88} hair_color='Brown'/>
    </div>
  );
}

export default App;
