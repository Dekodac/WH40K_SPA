import { CharacterContext } from "./CharacterContext";
import { useContext } from "react";

const Gallery = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <div className="gall">
        <h1>Gallery</h1>
        <div>
      <h2>Finished Characters:</h2>
        </div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h2>{character.char_name}</h2>
            <img src={character.char_img} alt={character.char_name} width={'100vh'}/>
            <p>Race : {character.race}</p>
            <p>Gender : {character.gender}</p>
            <p>Magical? : {character.is_magical ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
