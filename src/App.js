import React from 'react';
import PlayersList from './PlayersList';
import playersData from './players';

const App = () => {
  return (
    <div className="app">
      <h1>Player App</h1>
      <PlayersList players={playersData} />
    </div>
  );
};

export default App;
