import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { get } from 'http';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Get()
    @UseGuards(AuthGuard)
    getUsers(){
        return this.userService.fetchUsers();
    }

    @Get('posts')
    getUsersPosts(){
        return [{ username: 'jitendra', 
        email: 'jitendra@binghamton.com',
        posts: [
            {
                id:1,
                title: 'Post 1',
            },
            {
                id: 2,
                title: 'Post 2',
            }
        ]
    }];
    }

    @Get('posts/comments')
    getUsersPostsComments() {
        return [
            {
                posts: [
                    {
                        id: 1,
                        title: 'Post 1',
                        comments: []
                    },
                ]
            }];
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto ){
        console.log(userData);
        return this.userService.createUser(userData);

    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id : number){
        const user =  this.userService.fetchUserById(id);

        if(!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);

        return user;
    }


}
