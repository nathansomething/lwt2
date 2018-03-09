import Word from './word';
import Language from '../enums/language.enum';

export default class User {
  id:Number;
  username:String
  firstName:String;
  lastName:String;
  languages:Array<Language>;
  documents:Array<Document>;

  constructor(id, username, firstName, lastName) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
