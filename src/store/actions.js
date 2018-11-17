import * as types from "./types"

export const selectPlayer = (player) => {
  return {
    type: types.SELECT_PLAYER,
    player: player
  }
}
