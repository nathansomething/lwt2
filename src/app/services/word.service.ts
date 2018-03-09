import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Word from './word';
import WordDisplay from './word-display'
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

  addWords(words:Array<Word>):Observable<WordDisplay[]> {
    return this.http.post<WordDisplay[]>(this.baseUrl, words)
  }

  update(word:Word):Observable<Object> {
    return this.http.put(this.baseUrl, word)
  }

  deleteAll():Observable<Object> {
    return this.http.delete(this.baseUrl)
  }
}
