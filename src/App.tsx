import React from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/friends-page';
import Carousel from './components/carousel';


function App() {
  return (
    <div>
      <Carousel/>
      <Friends/>
    </div>
  );
}

export default App;
