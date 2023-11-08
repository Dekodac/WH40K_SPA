import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CharacterContext } from './components/CharacterContext';

function App() {
  const [characters, setCharacters] = useState([]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    axios.get('http://0.0.0.0:3000/characters/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);


  //TODO: THIS IS FOR ANIMATION FOR HOMEPAGE DOORS

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimate(false);
  //   }, 2000); // Set the timeout based on your desired animation duration
  // }, []);


  return(
    <>
    <NavBar/>
    <CharacterContext.Provider value={{characters,setCharacters}}>
    <Outlet/>
    </CharacterContext.Provider>
    </>

  )
};
export default App
