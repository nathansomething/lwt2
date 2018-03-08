import Language from '../enums/language.enum'
import Word from './word'
import WordDisplay from './word-display'
import { DatePipe } from '@angular/common'

export default class Document {
  name:string
  language:Language
  wordDisplays:Array<WordDisplay>
  numberOfWords:number
  uniqueWordIds:Array<string>
  createdOn:any
  documentId:number

  constructor(name:string, language:Language, wordDisplays:Array<WordDisplay>, numberOfWords:number) {
    this.name = name
    this.language = language
    this.wordDisplays = wordDisplays
    this.numberOfWords = numberOfWords
    
    this.uniqueWordIds = Array.from(
      new Set<string>(wordDisplays.map(wordDisplay => wordDisplay.wordId))
    )
    this.createdOn = Date.now()
    this.documentId = null
  }
}
