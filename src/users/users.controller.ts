import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post, 
  Put
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { PartialUpdateUserDto, UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get('list')
  listUsers(): IUser[] {
    return [ 
    {
    firstName: 'Ann',
    lastName: 'Dou',
    age: 33,
    isStudent: false
    },
    {
      firstName: 'Olga',
      lastName: 'Gym',
      age: 20,
      isStudent: true
      },
  ];
  }

  @Get()
  getUser(): IUser {
    return {
    firstName: 'Ann',
    lastName: 'Dou',
    age: 33,
    isStudent: false
    };
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':id')
  partialUpdate(@Param('id', ParseIntPipe) id: number, @Body() partialUpdateUserDto: PartialUpdateUserDto) {
    return this.usersService.partialUpdate(id, partialUpdateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
