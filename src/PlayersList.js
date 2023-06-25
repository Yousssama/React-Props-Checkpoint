import React from 'react';
import Player from './player';
import './App.css';

const PlayersList = ({ players }) => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
