import Word from './word';
import Language from '../enums/language.enum';

export default class User {
  id:Number;
  username:String
  firstName:String;
  lastName:String;
  languages:Array<Language>;
  documents:Array<Document>;
  unknownWords:Array<Word>;
  recognizedWords:Array<Word>;
  practicingWords:Array<Word>;
  learnedWords:Array<Word>;

  constructor(id, username, firstName, lastName) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.unknownWords = [];
    this.recognizedWords = [];
    this.practicingWords = [];
    this.learnedWords = [];
  }
}
