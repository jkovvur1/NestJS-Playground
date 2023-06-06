import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        {username: 'Jitendra', email: 'jitendra@binghamton.com'},
        {username: 'Stark', email: 'stark@binghamton.com'},
        {username: 'House', email: 'house@binghamton.com'},
    ];
    fetchUsers(){
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType){
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number){
        return {id, username: 'Anson', email: 'anson@binghamto.edu'}
        // return null;
    }
}
