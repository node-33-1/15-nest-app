import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dtos/create-song.dto';
import { UpdateSongDto } from './dtos/update-song.dto';

@Injectable()
export class SongsService {

    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {}

    getAll() {
        return this.songRepository.find();
    }

    async create(createSongDto: CreateSongDto) {
        const song = this.songRepository.create(createSongDto);
        await this.songRepository.save(song);
        return song;
    }

    async getOne(id: number) {
        const song = await this.songRepository.findOneBy({ id: id });
        if (!song) {
            throw new NotFoundException(`Canción con id ${id} no encontrada`);
        }
        return song;
    }

    async removeSong(id: number) {
        const deleteResult = await this.songRepository.delete({id});
        if (deleteResult.affected === 0) {
            throw new NotFoundException(`Canción con id ${id} no encontrada`);
        }
    }

    async updateSong(id: number, updateSongDto: UpdateSongDto) {
        const song = await this.songRepository.preload({
            id, ...updateSongDto
        });
        if (!song) {
            throw new NotFoundException(`Canción con id ${id} no encontrada`);
        }
        await this.songRepository.save(song);
        return song;
    }

}
