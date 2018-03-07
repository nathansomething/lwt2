import Language from '../enums/language.enum'
import Word from './word'
import { DatePipe } from '@angular/common'

export default class Document {
  name:string
  language:Language
  orderedWordIds:Array<string>
  numberOfWords:number
  uniqueWordIds:Array<string>
  createdOn:any
  documentId:number

  constructor(name:string, language:Language, orderedWordIds:Array<string>, numberOfWords:number) {
    this.name = name
    this.language = language
    this.orderedWordIds = orderedWordIds
    this.numberOfWords = numberOfWords
    this.uniqueWordIds = Array.from(new Set<string>(this.orderedWordIds))
    this.createdOn = Date.now()
    this.documentId = null
  }
}
