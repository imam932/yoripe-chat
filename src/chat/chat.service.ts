import { Injectable } from "@nestjs/common";

import { CreateChatDto } from "./dto/create-chat.dto";
import { ChatRepository } from "./chat.repository";

@Injectable()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  async createChat(createChatDto: CreateChatDto) {
    return await this.chatRepository.createChat(createChatDto);
  }
  
  async findAllChats(id: string) {
    return await this.chatRepository.findAllChats(id);
  }
}