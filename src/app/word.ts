import Familiarity from './familiarity.enum';
import Language from './language.enum';

export default class Word {
  id:Number
  text:String;
  language:Language;
  familiarity:Familiarity;

  constructor(id, text, language) {
    this.id = id;
    this.text = text;
    this.language = language;
    this.familiarity = Familiarity.New;
  }
}
