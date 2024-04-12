import { useEffect } from "react";
import { UseMultiplayer } from "../../hooks/UseMultiplayer"

export const Game = () => {
  const { socketConnected, players, status, setStatus } = UseMultiplayer("http://localhost:3000");

useEffect(() => {
  if(players.length < 2) {
    setStatus('En recherche de joueur');
  } else {
    setStatus('ID des joueurs : ' + players.join(', '));
  }
}, [players, setStatus])

  return (
    <>
    <h1>{status}</h1>
    <p>Players: {players.join(', ')}</p>
    {socketConnected ? (
      <p>Socket connected</p>
    ) : (
      <button>Connect to Socket.io</button>
    )}
  </>
  )
}
