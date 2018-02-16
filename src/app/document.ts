import Language from './language.enum';
import Word from './word';
import { DatePipe } from '@angular/common';

export default class Document {
  name:String;
  language:Language;
  createdOn:any
  words:Array<Word>;
  unknownWords:Array<Word>;
  recognizedWords:Array<Word>;
  practicingWords:Array<Word>;
  learnedWords:Array<Word>;

  constructor(name:String, language:Language, words:Array<Word>) {
    this.name = name;
    this.language = language;
    this.createdOn = Date.now()
    this.words = words;
    this.unknownWords = [];
    this.recognizedWords = [];
    this.practicingWords = [];
    this.learnedWords = [];
  }
}
