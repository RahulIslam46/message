import {Injectable} from '@nestjs/common';

import {MessageRepository} from './app.repository';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}

@Injectable()
export class MessageService {
    constructor(public messageRepo: MessageRepository) {}

    async findone(id: string) {
        return this.messageRepo.findone(id);
    }

    async findall() {
        return this.messageRepo.findall();
    }
    async create(message: string) {
        return this.messageRepo.create(message);
    }
}