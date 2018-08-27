import React from 'react'
import { connect } from "react-redux"
import { handleSelectPlayer } from "../redux/actions.js"

const Player = ({ player, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player) => dispatch( handleSelectPlayer(player) )
  }
}

export default connect(null, mapDispatchToProps)(Player)
