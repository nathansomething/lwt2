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
  private wordIdMap:Map<string,Word>
  private focusWord:Word

  constructor(private route:ActivatedRoute, private documentService:DocumentService, private wordService:WordService) {
    this.wordIdMap = new Map<string,Word>()
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentService.getById(params['document_id']).subscribe(document => {
        this.wordService.getSelection(document.uniqueWordIds).subscribe(words => {
          words.forEach((word,index) => {
            this.wordIdMap.set(document.uniqueWordIds[index],word)
          })
          this.activeDocument = document
        })
      })
    })
  }

  getFamiliarity(familiarity:Familiarity) {
    return Familiarity[familiarity]
  }

  getWord(wordId:string) {
    return this.wordIdMap.get(wordId).text
  }

  setWord(wordId:string) {
    let word:Word = this.wordIdMap.get(wordId)
    console.log(word)
    if (word.familiarity != Familiarity.Ignored) {
      this.focusWord = word
    }
  }

}
