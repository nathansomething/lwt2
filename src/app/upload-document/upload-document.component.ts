import { Component, OnInit } from '@angular/core'
import { DocumentService } from '../services/document.service'
import { WordService } from '../services/word.service'
import Language from '../enums/language.enum'
import Document from '../services/document'
import WordDisplay from '../services/word-display'
import Word from '../services/word'

@Component({
  selector: 'upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  title:string
  language = Language
  documentLanguage:Language
  documentText:string
  submitted:boolean
  keys:any[]

  constructor(private documentService:DocumentService, private wordService:WordService) {
    this.title = ""
    this.documentLanguage = null
    this.documentText = ""
    this.submitted = false
    this.keys = Object.keys(this.language).filter(Number)
  }

  ngOnInit() { }

  parseText() {
    if (this.documentText == "") {
      return []
    }
    return this.documentText.trim().split(" ");
  }

  parseWordsFromDocumentText():Array<Word> {
    let texts = this.parseText()
    let words = new Array<Word>()
    for (let text of texts) {
      if (text == "") {
        continue
      }
      let finalCharacter = text.charAt(text.length - 1)
      if (finalCharacter == '.' || finalCharacter == ',' || finalCharacter == '?' || finalCharacter == '!') {
        words.push(new Word(text.split(finalCharacter)[0],"",this.documentLanguage,false))
        words.push(new Word(finalCharacter,"",this.documentLanguage,true))
      }
      else {
        words.push(new Word(text,"",this.documentLanguage,false))
      }
    }
    return words
  }

  getWordCount():number {
    return this.parseWordsFromDocumentText().filter(
      word => word.isPunctuation == false).length
  }

  getWordCountStr():string {
    let wordCount:number = this.getWordCount()
    if (wordCount != 1) {
      return `${wordCount} Words`
    }
    return "1 Word"
  }

  isUploadVaild():boolean {
    return this.title != "" && this.documentLanguage != null && this.documentText != ""
  }

  uploadDocument():void {
    if (this.isUploadVaild()) {
      let documentWords = this.parseWordsFromDocumentText()
      this.wordService.addWords(documentWords).subscribe(wordDisplays => {
        let documentToUpload = new Document(
          this.title,
          this.documentLanguage,
          wordDisplays,
          this.getWordCount()
        )
        console.log(documentToUpload)
        this.documentService.upload(documentToUpload).subscribe(res => {
          if (res['response'] == "SUCCESS") {
            this.submitted = true
          }
          else {
            this.submitted = false
          }
        })
      })
    }
    else {
      alert("Error: Must Complete All Required Fields")
    }
  }

  delete():void {
    this.documentService.deleteAll()
  }

}
