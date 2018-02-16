import { Component, OnInit } from '@angular/core';
import Language from '../language.enum';
import Word from '../word';
import Document from '../document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  public documents:Array<Document> = [];
  public language:Language;

  constructor(private documentService:DocumentService) {

  }

  getString(language:Language) {
    return Language[language];
  }

  ngOnInit() {
    this.documentService.getDocuments().subscribe(documents => this.documents = documents);
  }

}
