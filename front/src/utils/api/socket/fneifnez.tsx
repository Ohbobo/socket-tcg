import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function App() {
    const [socketConnected, setSocketConnected] = useState(false);
    const [players, setPlayers] = useState([]);
    const [status, setStatus] = useState('En recherche de joueur');
  
    useEffect(() => {
      console.log('Effect triggered');
  
      const socket = io('http://localhost:3000', {
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: Infinity
      });
  
      socket.on('connect', () => {
        console.log('Socket connected');
        setSocketConnected(true);
      });
  
      socket.on('disconnect', () => {
        console.log('Socket disconnected');
        setSocketConnected(false);
      });
  
      socket.on('playersReady', (data) => {
        console.log('Data received:', data);
        setPlayers(data);
        setStatus('ID des joueurs : ' + data.join(', '));
      });
  
      return () => {
        socket.disconnect();
      };
    }, []);
  
    const handleConnect = () => {
      console.log('Connecting to Socket.io server...');
      setSocketConnected(true);
    };

    setInterval(() => {
      const howManyPlayer = console.log(players)
      players.length === 2 ? howManyPlayer : setStatus('En recherche de joueur');
    }, 5000)
  
    return (
      <>
        <h1>{status}</h1>
        <p>Players: {players.join(', ')}</p>
        {socketConnected ? (
          <p>Socket connected</p>
        ) : (
          <button onClick={handleConnect}>Connect to Socket.io</button>
        )}
      </>
    );
  }
  
  export default App;