import Language from './languages';
import Word from './word';

export default class Document {
  readonly lanugage:Language;
  readonly words:Array<Word>;

  constructor(language, words) {
    this.lanugage = language;
    this.words = words;
  }
}
