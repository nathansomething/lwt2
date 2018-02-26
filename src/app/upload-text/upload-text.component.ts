import { Component, OnInit } from '@angular/core';
import DocumentForm from '../document-form';

@Component({
  selector: 'app-upload-text',
  templateUrl: './upload-text.component.html',
  styleUrls: ['./upload-text.component.scss']
})
export class UploadTextComponent implements OnInit {

  title:String;
  language:String;
  documentText:String;

  constructor() {
    this.title = ""
    this.language = ""
    this.documentText = ""
  }

  ngOnInit() {

  }

  parseText() {
    if (this.documentText == "") {
      return []
    }
    return this.documentText.trim().split(" ");
  }

  getWordCountStr() {
    let wordCount:number = this.parseText().length
    if (wordCount != 1) {
      return `${wordCount} Words`
    }
    return "1 Word"
  }

  uploadDocument() {
    console.log(this.title);
    console.log(this.language);
    console.log(this.documentText);
  }

}
