import React, { Component } from 'react';
import './App.css';
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';


const App = (props) =>  {
  return (
    <div className="App">
      <NavHeader />
      <TeamList />
      <PlayerDetails />
    </div>
  );
}

export default App;
