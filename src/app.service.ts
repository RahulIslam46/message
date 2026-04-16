import {MessageRepository} from './app.repository';
export class MessageService {
    messageRepository: MessageRepository;
    constructor() {
        this.messageRepository = new MessageRepository();
    }
}