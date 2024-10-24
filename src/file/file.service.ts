import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from './file.interface';
import { CreateFileDto } from './file.dto';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<File>,
  ) {}

  async getAllFiles(): Promise<File[]> {
    return await this.fileModel.find().exec();
  }

  async createFile(createFileDto: CreateFileDto): Promise<File> {
    const newFile = new this.fileModel(createFileDto);
    return await newFile.save();
  }
}
