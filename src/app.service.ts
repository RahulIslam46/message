import {MessageRepository} from './app.repository';

export class AppService {
    getHello(): string {
        return 'Hello World!';
    }
}

export class MessageService {
    messageRepository: MessageRepository;
    constructor() {
        // Service is creating it's own dependency, which is not ideal for testing
        // In a real application, you would typically inject this dependency
        this.messageRepository = new MessageRepository();
    }

    async findone(id: string) {
        return this.messageRepository.findone(id);
    }

    async findall() {
        return this.messageRepository.findall();
    }
    async create(message: string) {
        return this.messageRepository.create(message);
    }
}