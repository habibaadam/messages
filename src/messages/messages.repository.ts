import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const content =  await readFile("messages.json",'utf8' );
        const message = JSON.parse(content);
        return message[id];

    }

    async findAll() {
        const content = await readFile('messages.json', 'utf8');
        const allMessages = JSON.parse(content);
        return allMessages;
    }

    async create(message: string) {

        const content = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(content);
        const id = Math.floor((Math.random() * 999))

        messages[id] = { id, message};
        await writeFile('messages.json', JSON.stringify(messages));
    }
}