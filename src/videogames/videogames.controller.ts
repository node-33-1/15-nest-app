import { Controller, Delete, Get, Param } from '@nestjs/common';
import { VideogamesService } from './videogames.service';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Get()
  getAll() {
    return "Trayendo los videojuegos";
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return "Trayendo videojuego de id: " + id;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Eliminando videojuego de id: " + id;
  }
  
}
