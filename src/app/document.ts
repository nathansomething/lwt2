import Language from './language.enum';
import Word from './word';
import { DatePipe } from '@angular/common';

export default class Document {
  document_id:Number;
  name:String;
  language:Language;
  createdOn:any
  words:Array<Word>;
  unknownWords:Array<Word>;
  recognizedWords:Array<Word>;
  practicingWords:Array<Word>;
  learnedWords:Array<Word>;

  constructor(document_id:Number, name:String, language:Language, words:Array<Word>) {
    this.document_id = document_id;
    this.name = name;
    this.language = language;
    this.createdOn = Date.now();
    this.words = words;
    this.unknownWords = [];
    this.recognizedWords = [];
    this.practicingWords = [];
    this.learnedWords = [];
  }
}
