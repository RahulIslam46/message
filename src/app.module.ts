import {Module} from '@nestjs/common';

import {AppController,
        MessageController} from './app.controller';
import {MessageRepository} from './app.repository';
import {AppService,
        MessageService} from './app.service';

@Module({
    controllers: [AppController, MessageController],
    providers: [AppService, MessageService, MessageRepository],
})
export class AppModule {
}