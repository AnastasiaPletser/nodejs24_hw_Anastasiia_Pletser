 import { Injectable } from '@nestjs/common';
 import { CreateUserDto } from './dto/create-user.dto';
 import { PartialUpdateUserDto, UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  findOneWithoutExeption(firstName: string) {
    return this.users.find((user) => user.firstName === firstName) || null;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  findOneByFirstName(firstName: string) {
    return this.users.find(user => user.firstName === firstName);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findOneAndUpdate(id: number, updateData: Partial<any>) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateData };
      return this.users[userIndex];
    }
    return null;
  }
  findOneById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  partialUpdate(id: number, partialUpdateUserDto: PartialUpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...partialUpdateUserDto,
      };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      const deletedUser = this.users.splice(userIndex, 1);
      return deletedUser;
    }
    return null;
  }
}



