import Familiarity from '../enums/familiarity.enum'
import Language from '../enums/language.enum'

export default class Word {
  text:string
  translation:string
  language:Language
  familiarity:Familiarity
  isPunctuation:boolean
  wordId:string

  constructor(text:string, translation:string, language:Language, isPunctuation:boolean, wordId:string = null) {
    this.text = text
    this.translation = translation
    this.language = language
    this.familiarity = Familiarity.Unseen
    this.isPunctuation = isPunctuation
    this.wordId = wordId
  }

  equals(that:Word) {
    return (this.text == that.text) && (this.language == that.language)
  }
}
