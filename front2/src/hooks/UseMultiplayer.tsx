import { useState, useEffect } from "react";
import { io } from 'socket.io-client';

export const UseMultiplayer = (url: string) => {
    const [socketConnected, setSocketConnected] = useState(false);
    const [players, setPlayers] = useState<string[]>([]);
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
            setStatus('En recherche de joueur');
        });
      
        socket.on('disconnect', () => {
            console.log('Socket disconnected');
            setSocketConnected(false);
            setPlayers([]);
            setStatus('En recherche de joueur');
        });

        socket.on('playersReady', (data) => {
            console.log('Data received:', data);
            setPlayers(data);
            if (data.length === 2) {
                setStatus('ID des joueurs : ' + data.join(', '));
            } else {
                setStatus('En attente d\'un autre joueur...');
            }
        });

        socket.on('playerDisconnected', (disconnectedPlayerId) => {
            console.log('Player disconnected:', disconnectedPlayerId);
            setPlayers((prevPlayers) => prevPlayers.filter(player => player !== disconnectedPlayerId));
            setStatus('En recherche de joueur');
        });

        return () => {
            socket.disconnect();
        };
    }, [url]);

    return { socketConnected, players, status, setStatus };
}
