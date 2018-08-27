import gamesData from '../gamesData'

const defaultState = {
  teams: gamesData.teams,
  selectedPlayer: null
}


// action = {type: SET_PLAYER, payload: playerObj}
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PLAYER":
      return {
        ...state,
        selectedPlayer: action.payload
      }
      break;
    default:
      return state
  }
}
