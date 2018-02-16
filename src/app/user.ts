import Word from './word';

export default class User {
  firstName:string;
  lastName:string;
  documents:Array<Document>;
  unknownWords:Array<Word>;
  recognizedWords:Array<Word>;
  practicingWords:Array<Word>;
  learnedWords:Array<Word>;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unknownWords = [];
    this.recognizedWords = [];
    this.practicingWords = [];
    this.learnedWords = [];
  }
}
