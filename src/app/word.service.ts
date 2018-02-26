import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Word from './word';
import { Observable } from 'rxjs';

@Injectable()
export class WordService {

  private wordUrl = "api/word";

  constructor(private http:HttpClient) { }

  // getWords(user_id:Number):Observable<Word> {
  //   return this.http.get<Word[]>("api/")
  // }

  getWordById(id:Number):Observable<Word> {
    return this.http.get<Word>(`${this.wordUrl}/?user_id=${id}`);
  }
}
