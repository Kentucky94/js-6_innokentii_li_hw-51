import React from 'react';
import Navigation from "./Navbar";
import MovieCard from './Card';
import Footer from './Footer'
import './Card.css'
import requiem from "./assets/requiem.jpg";
import interstellar from "./assets/interstellar.jpg";
import joker from "./assets/joker.jpg";

const App = (props) => {
  return(
      <div>
          <Navigation/>
          <div id="cardBox">
              <MovieCard imgUrl={requiem} title="Requiem For A Dream" year="2000"/>
              <MovieCard imgUrl={interstellar} title="Interstellar" year="2014"/>
              <MovieCard imgUrl={joker} title="Joker" year="2019"/>
          </div>
          <Footer/>
      </div>
  )
};

export default App;
