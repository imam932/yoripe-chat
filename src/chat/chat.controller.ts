import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { ChatService } from "./chat.service";
import { CreateChatDto } from "./dto/create-chat.dto";

@ApiTags('chat')
@Controller('chat')
export class ChatController {
	constructor(private readonly chatService: ChatService) {}

	@ApiResponse({
		status: 201,
		description: 'The chat has been successfully created.',
	})
	@Post('create-chat')
	async createChat(@Body() createChatDto: CreateChatDto) {
		return await this.chatService.createChat(createChatDto)
	}

	@Get(':id')
	async getAllChatsByUserId(@Param(':id') id: string) {
		return await this.chatService.findAllChats(id);
	}
}