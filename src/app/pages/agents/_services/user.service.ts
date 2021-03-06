﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getByemail(email: number) {
        return this.http.get('/api/users/' + email);
    }
   
    create(user: User) {
        return this.http.post('/api/users', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.email, user);
    }

    delete(email: number) {
        return this.http.delete('/api/users/' + email);
    }
}