import Familiarity from './familiarity.enum'
import Language from './language.enum'

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
}
