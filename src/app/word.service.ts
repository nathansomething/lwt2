import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Word from './word';
import { Observable } from 'rxjs';

@Injectable()
export class WordService {

  private baseUrl:string = "http://localhost:5000/documents"

  constructor(private http:HttpClient) { }

  getAll():Observable<Word[]> {
    return this.http.get<Word[]>(this.baseUrl)
  }
}
