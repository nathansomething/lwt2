import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Language from '../enums/language.enum';
import Word from '../services/word';
import Document from '../services/document';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  public documents:Array<Document> = []
  public language:Language
  private userId:Number
  private isDeleted:boolean

  constructor(private route:ActivatedRoute, private router:Router, private documentService:DocumentService) { }

  getString(language:Language) {
    return Language[language];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params.user_id;
      this.documentService.getAll().subscribe(documents => this.documents = documents)
    })
  }

  study(document_id:Number) {
    this.router.navigate([`/user/${this.userId}/study/${document_id}`]);
  }

  deleteAll() {
    this.documentService.deleteAll().subscribe(res => {
      if (res['response'] == "SUCCESS") {
        this.isDeleted = true
        this.documentService.getAll().subscribe(documents => this.documents = documents)
      }
      else {
        this.isDeleted = false
      }
    })
  }

}
