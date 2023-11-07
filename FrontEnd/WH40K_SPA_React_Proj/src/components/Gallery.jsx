import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CharacterContext } from './CharacterContext';

const CharacterCard = ({ character }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={character.char_img} />
      <Card.Body>
        <Card.Title>{character.char_name}</Card.Title>
        <Card.Text>
          Race: {character.race}<br />
          Gender: {character.gender}<br />
          Magical: {character.is_magical ? "Yes" : "No"}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

const Gallery = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <>
      {characters.map((character) => (
        <div >
        <CharacterCard key={character.id} character={character} />
        </div>
      ))}
    </>
  );
}

export default Gallery;
