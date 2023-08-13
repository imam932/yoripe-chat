import { Module } from '@nestjs/common';

import { ChatService } from './chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from 'src/schemas/chat.schema';
import { ChatRepository } from './chat.repository';
import { ChatController } from './chat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }])],
  controllers: [ChatController],
  providers: [ChatRepository, ChatService],
  exports: [ChatService]
})
export class ChatModule {}
