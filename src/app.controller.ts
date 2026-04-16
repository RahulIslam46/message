import {Body,
        Controller,
        Get,
        Param,
        Post} from '@nestjs/common';

import {AppService,
        MessageService} from './app.service';
import {CreateMessageDto} from './create-message.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}

@Controller('messages')
export class MessageController {
    constructor(public messageService: MessageService) {}
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
