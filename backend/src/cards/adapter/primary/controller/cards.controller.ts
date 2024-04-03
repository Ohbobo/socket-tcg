import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Post, 
    NotFoundException, 
    UseGuards, 
    Put, 
    Req, 
    ForbiddenException, 
    UseInterceptors, 
    UploadedFile, 
    BadRequestException,} from '@nestjs/common';
import { CardsServices } from 'src/cards/domain/services/cards.service';

@Controller('/api/cards')
export class CardsController {
    constructor(private readonly services: CardsServices) {}

    @Get()
    async getAllCards() {
        try {
            return this.services.getAllCards()
        } catch (error) {
            throw new NotFoundException('Erreur lors de la récupération des cartes');
        }
    }
}