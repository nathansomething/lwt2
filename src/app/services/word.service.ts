import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Word from './word';
import { Observable } from 'rxjs';

@Injectable()
export class WordService {

  private baseUrl:string = "http://localhost:5000/words"

  constructor(private http:HttpClient) { }

  getAll():Observable<Word[]> {
    return this.http.get<Word[]>(this.baseUrl)
  }

  getSelection(wordIds:Array<string>):Observable<Word[]> {
    return this.http.get<Word[]>(`${this.baseUrl}/${wordIds}`)
  }

  addWords(words:Array<Word>):Observable<string[]> {
    return this.http.post<string[]>(this.baseUrl, words);
  }

  deleteAll() {
    return this.http.delete(this.baseUrl)
  }
}
