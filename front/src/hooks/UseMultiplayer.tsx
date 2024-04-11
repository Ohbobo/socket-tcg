import { useState, useEffect } from "react";
import { io } from 'socket.io-client';

export const UseMultiplayer = (url: string) => {
    const [socketConnected, setSocketConnected] = useState(false);
    const [players, setPlayers] = useState([]);
    const [status, setStatus] = useState('En recherche de joueur');

    useEffect(() => {

        const socket = io(url, {
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
           if(players.length < 1) {
            setSocketConnected(false);
            setStatus('En recherche de joueur')
           }
        });
      
        socket.on('playersReady', (data) => {
           console.log('Data received:', data);
           setPlayers(data);
           setStatus('ID des joueurs : ' + data.join(', '));
        });

      
        return () => {
          socket.disconnect();
        };
    }, [])

    return { socketConnected, players, status }

}
