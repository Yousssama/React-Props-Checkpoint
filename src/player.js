import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card className="fut-card">
      <Card.Img className="card-image" variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'Unknown Nationality',
    jerseyNumber: 'N/A',
    age: 'N/A',
    imageUrl: 'https://example.com/default-image.jpg'
  };

  export default Player;
