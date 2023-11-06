import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [show, setShow] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/characters/')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);


  return (
    <div>
      {show ? <h1>Who?</h1> : <p>Bubs</p>}
      <button onClick={() => setShow(!show)}>Who do I love?</button>
      <h1>Character Information</h1>
      <ul>
        {characters.map(character => (
        <>
        <li key={character.id}>
          {console.log(character.char_img)}
          {character.char_name} - {character.race} - {character.gender} - 
        </li>
          <img src={character.char_img} width={100} height={150} />
        </>
  ))}

</ul>

    </div>
  );
}

export default App
