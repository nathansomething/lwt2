import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core'
import Familiarity from '../enums/familiarity.enum'
import Word from '../services/word'
import { WordService } from '../services/word.service'

@Component({
  selector: 'word-info-box',
  templateUrl: './word-info-box.component.html',
  styleUrls: ['./word-info-box.component.scss']
})
export class WordInfoBoxComponent implements OnInit, OnChanges, OnDestroy  {

  familiarity = Familiarity
  keys:any[]
  localFam:Familiarity
  translation:string

  @Input() focusWord:Word

  constructor(private wordService:WordService) {
    this.keys = Object.keys(this.familiarity).filter(Number)
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.focusWord) {
      this.wordService.update(this.focusWord).subscribe(res => res)
    }
  }

  ngOnDestroy() {
    if (this.focusWord) {
      this.wordService.update(this.focusWord).subscribe(res => res)
    }
  }

  getFamiliarity(familiarity:Familiarity) {
    return Familiarity[familiarity]
  }

}
