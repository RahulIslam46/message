import {Body,
        Controller,
        Get,
        Module,
        Param,
        Post} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService,
        MessageService} from './app.service';
import {CreateMessageDto} from './create-message.dto';

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
        return this.messageService.create(createMessageDto.content);
    }

    @Get(':id')
    getMessage(@Param('id') id: string) {
        return this.messageService.findone(id);
    }
}

@Module({
    controllers: [AppController, MessageController],
    providers: [AppService, MessageService],
})
export class AppModule {
}