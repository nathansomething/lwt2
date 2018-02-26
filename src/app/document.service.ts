import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Document from './document';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentService {


  constructor(private http:HttpClient) { }

  getDocuments(user_id:Number):Observable<Document[]> {
    return this.http.get<Document[]>(`api/documents/?user_id=${user_id}`);
  }

  getDocumentById(user_id:Number, document_id:Number):Observable<Document> {
    return this.http.get<Document>(`api/documents/?user_id=${user_id}&document_id=${document_id}`);
  }

}
