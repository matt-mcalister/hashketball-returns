import React from 'react'
import { connect } from "react-redux"

import { actions } from "../store"

const Player = ({ player, selectPlayer }) => {
  return (
    <div onClick={() => selectPlayer(player)}>
      <p>{player.name}</p>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPlayer: (player) => dispatch( actions.selectPlayer(player) )
  }
}

export default connect(null, mapDispatchToProps)(Player)
