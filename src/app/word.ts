import Familiarity from './familiarity.enum';
import Language from './language.enum';

export default class Word {
  id:Number
  text:String;
  definition:String;
  language:Language;
  familiarity:Familiarity;
  isPunctuation:boolean

  constructor(id, text, definition, language, isPunctuation) {
    this.id = id;
    this.text = text;
    this.definition = definition;
    this.language = language;
    this.familiarity = Familiarity.Unseen;
    this.isPunctuation = isPunctuation;
  }
}
