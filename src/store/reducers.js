import gamesData from '../gamesData'
import * as types from "./types"


const initialState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_PLAYER:
      return {
        ...state,
        selectedPlayer: action.player
      }
    default:
      return state
  }
}

export { reducer } 
