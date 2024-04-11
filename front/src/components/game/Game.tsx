import { UseMultiplayer } from "../../hooks/UseMultiplayer"

export const Game = () => {
  const { socketConnected, players, status } = UseMultiplayer("http://localhost:3000");

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
