import { Component, OnInit } from '@angular/core'
import Document from '../document'
import Word from '../word'
import Familiarity from '../familiarity.enum'
import { DocumentService } from '../document.service'
import { WordService } from '../word.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-study-text',
  templateUrl: './study-text.component.html',
  styleUrls: ['./study-text.component.scss']
})
export class StudyTextComponent implements OnInit {

  public document:Document
  public words:Map<String,Word>
  private selectedWord:Word

  constructor(private route:ActivatedRoute, private documentService:DocumentService, private wordService:WordService) {
    this.words = new Map()
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.documentService.getById(params['document_id']).subscribe(document => {
        this.document = document
        let uniqueWordIds:string = Array.from(new Set(document.words)).join('|')
        this.wordService.getSelection(uniqueWordIds).subscribe(words => {
          for (let word of words) {
            this.words.set(word.wordId, word)
          }
        })
      })
    })
  }

  getFamiliarity(familiarity:Familiarity) {
    return Familiarity[familiarity]
  }

  getWord(wordId:string) {
    // console.log(this.words.get(wordId).text)
    return this.words.get(wordId).text
  }

  setWord(wordId:string) {
    let word:Word = this.words.get(wordId)
    if (word.familiarity != Familiarity.Ignored) {
      this.selectedWord = word;
    }
  }

}
