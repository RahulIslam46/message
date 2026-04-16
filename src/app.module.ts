import {Body,
        Controller,
        Get,
        Param,
        Post} from '@nestjs/common';

import {MessageService} from './app.service';
import {CreateMessageDto} from './dto/create-message.dto';

@Controller('messages')
export class MessageController {
    messageService: MessageService;
    constructor() {
        // Controller is creating it's own dependency, which is not ideal for testing
        // In a real application, you would typically inject this dependency
        this.messageService = new MessageService();
    }
    @Get()
    listMessages() {
        return this.messageService.findall();
    }
    @Post()
    createMessage(@Body() createMessageDto: CreateMessageDto) {
        return this.messageService.create(createMessageDto.message);
    }
}