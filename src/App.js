import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';



const App = (props) => {
  return (
    <div className="App">
      <NavHeader />
      <TeamList />
      {props.hidePlayer ? <div> Click Player for Details </div> :
        <PlayerDetails selectedPlayer={props.selectedPlayer}/>}
    </div>
  );
}

const withBananas = (Component) => {
  return (props) => {
    return (<Component banana={"banana"} {...props} />)
  }
}

const mapStateToProps = (state) => {
  return {
    hidePlayer: !state.selectedPlayer
  }
}

export default connect(mapStateToProps)(App);
