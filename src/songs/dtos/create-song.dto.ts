import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class CreateSongDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(1500)
    @Max(2024)
    releaseYear: number;

    @IsString()
    @IsNotEmpty()
    genre: string;

}
