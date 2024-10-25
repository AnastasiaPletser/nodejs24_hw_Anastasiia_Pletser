import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { FilesService } from './file.service';
import { CreateFileDto } from './file.dto';
import { File } from './file.interface';

@ApiTags('File') 
@Controller('file')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get a list of files' })
  async getFiles(): Promise<File[]> {
    return await this.filesService.getAllFiles();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'The file has been created', type: CreateFileDto })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async createFile(@Body() createFileDto: CreateFileDto): Promise<File> {
    return await this.filesService.createFile(createFileDto);
  }
}
