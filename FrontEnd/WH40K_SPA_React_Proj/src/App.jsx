import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [show, setShow] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    axios.get('http://10.0.0.39:3000:characters/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000); // Set the timeout based on your desired animation duration
  }, []);


  return (
    <div>
      {show ? <h1>Who?</h1> : <p>Bubs</p>}
      <button onClick={() => setShow(!show)}>Who do I love?</button>
      <h1>Character Information</h1>
      <ul>
        {characters.map(character => (
          <div key={character.id}>
            <li>
              {console.log(character.char_img)}
              {character.char_name} - {character.race} - {character.gender} -
            </li>
            <img src={character.char_img} width={100} height={150} />
          </div>
        ))}
      </ul>
  <div>
    <div id='leftDoor'>left door</div>
    between doors
    <div id='rightDoor'>right door</div>
  </div>
    </div>
  
)
};
export default App
