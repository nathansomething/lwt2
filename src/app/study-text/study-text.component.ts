import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Document from '../services/document'
import Word from '../services/word'
import Familiarity from '../enums/familiarity.enum'
import { DocumentService } from '../services/document.service'
import { WordService } from '../services/word.service'

@Component({
  selector: 'app-study-text',
  templateUrl: './study-text.component.html',
  styleUrls: ['./study-text.component.scss']
})
export class StudyTextComponent implements OnInit {

  private activeDocument:Document
  private documentWords:Array<Word>
  private focusWord:Word

  constructor(private route:ActivatedRoute, private documentService:DocumentService, private wordService:WordService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentService.getById(params['document_id']).subscribe(document => {
        this.wordService.getSelection(document.uniqueWordIds).subscribe(words => {
          this.documentWords = words
          this.activeDocument = document
        })
      })
    })
  }

  setWord(word:Word) {
    if (!word.isPunctuation && word.familiarity != Familiarity.Ignored) {
      this.focusWord = word
    }
  }

}
