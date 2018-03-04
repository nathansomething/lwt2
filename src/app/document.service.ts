import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Headers, RequestOptions } from '@angular/http'
import Document from './document'
import { Observable } from 'rxjs'

@Injectable()
export class DocumentService {

  private baseUrl:string = "http://localhost:5000/documents"

  constructor(private http:HttpClient) {

  }

  getAll():Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl);
  }

  getById(document_id:Number):Observable<Document> {
    return this.http.get<Document>(`${this.baseUrl}/${document_id}`);
  }

  upload(document:Document) {
    return this.http.post(this.baseUrl,document)
  }

  deleteById(document_id:Number) {
    this.http.delete(`${this.baseUrl}/${document_id}`)
  }

  deleteAll(){
    return this.http.delete(this.baseUrl)
  }

}
