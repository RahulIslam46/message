import {IsString} from 'class-validator';

export class CreateMessageDto {
    @IsString()
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}