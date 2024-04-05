import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dtos/create-song.dto';
import { UpdateSongDto } from './dtos/update-song.dto';

@Controller('songs')
export class SongsController {

  constructor(private readonly songsService: SongsService) {}

  @Get()
  getAllSongs() {
    return this.songsService.getAll();
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  // /songs/:id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.songsService.getOne(+id);
  }

  @Delete(':id')
  @HttpCode(204)
  removeSong(@Param('id') id: string) {
    return this.songsService.removeSong(+id);
  }

  @Put(':id')
  updateSong(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.updateSong(+id, updateSongDto);
  }


}
