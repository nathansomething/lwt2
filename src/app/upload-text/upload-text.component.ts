import { Component, OnInit } from '@angular/core'
import { DocumentService } from '../document.service'
import Language from '../language.enum'
import Document from '../document'
import Word from '../word'

@Component({
  selector: 'app-upload-text',
  templateUrl: './upload-text.component.html',
  styleUrls: ['./upload-text.component.scss']
})
export class UploadTextComponent implements OnInit {

  title:string
  language = Language
  documentLanguage:Language
  documentText:string
  submitted:boolean
  keys:any[]

  constructor(private documentService:DocumentService) {
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

  isPunctuation(text:string) {
    if (text == ".") {
      return true
    }
    return false
  }

  getWords():Array<Word> {
    let texts = this.parseText()
    let words = new Array<Word>()
    for (let text of texts) {
      if (text == "") {
        continue
      }
      words.push(new Word(text,"",this.documentLanguage,this.isPunctuation(text)))
    }
    return words
  }

  getWordCountStr():string {
    let wordCount:number = this.parseText().length
    if (wordCount != 1) {
      return `${wordCount} Words`
    }
    return "1 Word"
  }

  uploadDocument():void {
    if (this.title != "" && this.documentLanguage != null && this.documentText != "") {
      let documentToUpload = new Document(this.title,this.documentLanguage,this.getWords())
      this.documentService.upload(documentToUpload).subscribe(res => {
        if (res['response'] == "SUCCESS") {
          this.submitted = true
        }
        else {
          this.submitted = false
        }
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
