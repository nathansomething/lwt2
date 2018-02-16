import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Document from './document';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentService {

  private documentUrl = "api/documents";

  constructor(private http:HttpClient) { }

  getDocuments():Observable<Document[]> {
    return this.http.get<Document[]>(this.documentUrl);
  }

}
