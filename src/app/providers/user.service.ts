import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Users {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  address: any;
  website: string;
  company: any;

}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(){
    return this.http.get<Users[]>('http://jsonplaceholder.typicode.com/users');
  }
  

}
