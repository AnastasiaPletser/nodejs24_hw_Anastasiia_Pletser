import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
  @ApiProperty({ example: 'document.pdf', description: 'The name of the file' })
  name: string;

  @ApiProperty({ example: 'pdf', description: 'File type' })
  type: string;

  @ApiProperty({ example: 1024, description: 'File size in bytes' })
  size: number;
}
