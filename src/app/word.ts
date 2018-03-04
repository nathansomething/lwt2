import Familiarity from './familiarity.enum'
import Language from './language.enum'

export default class Word {
  text:string
  translation:string
  language:Language
  familiarity:Familiarity
  isPunctuation:boolean
  id:number

  constructor(text:string, translation:string, language:Language, isPunctuation:boolean, id:number = null) {
    this.text = text
    this.translation = translation
    this.language = language
    this.familiarity = Familiarity.Unseen
    this.isPunctuation = isPunctuation
    this.id = id
  }
}
