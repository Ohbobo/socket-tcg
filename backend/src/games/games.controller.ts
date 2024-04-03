import { WebSocketGateway, WebSocketServer, OnGatewayDisconnect, OnGatewayConnection } from '@nestjs/websockets';
import { uuid } from 'uuidv4';

@WebSocketGateway()
export class WebSocketController implements OnGatewayDisconnect, OnGatewayConnection {
    @WebSocketServer()
    server;

    private players: string[] = [];

    handleConnection(client: any, ...args: any[]) {
        console.log('client connected:', client.id);
        const playerId = client.id
        this.players.push(playerId);

        if(this.players.length === 2) {
            this.server.emit('playersReady', this.players);
        }
    }

    handleDisconnect(client: any) {
        console.log('client disconnected:', client.id);
        this.players = this.players.filter(player => player !== client.id);
        this.server.emit('playerDisconnected', client.id);
    }
}
