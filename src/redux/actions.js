export const handleSelectPlayer = (selectedPlayer) => {
  return {
    type: "SET_PLAYER",
    payload: selectedPlayer
  }
}

 // dispatch( handleSelectPlayer(selectedPlayer) )
