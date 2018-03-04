import { Component, OnInit } from '@angular/core';
import Document from '../document';
import Word from '../word';
import Familiarity from '../familiarity.enum';
import { DocumentService } from '../document.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-study-text',
  templateUrl: './study-text.component.html',
  styleUrls: ['./study-text.component.scss']
})
export class StudyTextComponent implements OnInit {

  public document:Document;
  public word:Word;
  public number:number;

  constructor(private route:ActivatedRoute, private documentService:DocumentService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentService.getById(+params['document_id']).subscribe(document => {
        console.log(document);
        this.document = document[0];
      });
    });
  }

  getFamiliarity(familiarity:Familiarity) {
    console.log(Familiarity[familiarity]);
    return Familiarity[familiarity];
  }
  setWord(word:Word) {
    if (word.familiarity != Familiarity.Ignored) {
      this.word = word;
    }
  }

}
