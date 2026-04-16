import {readFile,
        writeFile} from 'fs/promises';


export class MessageRepository {
    async findone(id: string) {
        // Implementation for finding a message by ID
        const data = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(data);
        return messages.find((message) => message.id === id);
    }

    async findall() {
        // Implementation for finding all messages
        const data = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(data);
        return messages;
    }

    async create(message: string) {
        // Implementation for creating a new message
        const data = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(data);

        const id = Math.floor(Math.random() * 1000).toString();
        messages[id] = {id, message};
        await writeFile('messages.json', JSON.stringify(messages));
    }
}