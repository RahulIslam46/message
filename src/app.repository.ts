import {Inject,
        Injectable} from '@nestjs/common';
import {readFile,
        writeFile} from 'fs/promises';

@Injectable()
export class MessageRepository {
    private async readMessages() {
        const data = await readFile('messages.json', 'utf-8');
        return JSON.parse(data) as Record < string, {
            id: string|number;
            content?: string;
            message?: string
        }
        > ;
    }

    async findone(id: string) {
        const messages = await this.readMessages();
        return messages[id] ?? null;
    }

    async findall() {
        const messages = await this.readMessages();
        return Object.values(messages);
    }

    async create(message: string) {
        const messages = await this.readMessages();

        const id = Math.floor(Math.random() * 1000).toString();
        messages[id] = {id, content: message};
        await writeFile('messages.json', JSON.stringify(messages));

        return messages[id];
    }
}