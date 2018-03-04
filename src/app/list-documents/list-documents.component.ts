import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Language from '../language.enum';
import Word from '../word';
import Document from '../document';
import { DocumentService } from '../document.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route:ActivatedRoute, private router:Router, private documentService:DocumentService) {
    this.isDeleted = null
  }

  getString(language:Language) {
    return Language[language];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params.user_id;
      this.documentService.getAll().subscribe(documents => {
        this.documents = documents
      })
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
    return false
  }

}
