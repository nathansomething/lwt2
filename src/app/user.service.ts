import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './user';
import Language from './language.enum';

@Injectable()
export class UserService {

  private userUrl = "api/users";

  constructor(private http:HttpClient) { }

  getUserById(id:Number):Observable<User> {
    return this.http.get<User>(`${this.userUrl}/?user_id=${id}`);
  }

  getUserLanguages(user_id:Number):Observable<Language[]> {
    return this.http.get<Language[]>(`api/users/?user_id=${user_id}`);
  }

}
