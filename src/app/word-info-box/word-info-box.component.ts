import { Component,  OnChanges, Input } from '@angular/core'
import Familiarity from '../enums/familiarity.enum'
import Word from '../services/word'

@Component({
  selector: 'word-info-box',
  templateUrl: './word-info-box.component.html',
  styleUrls: ['./word-info-box.component.scss']
})
export class WordInfoBoxComponent implements OnChanges  {

  @Input() focusWord:Word
  private localFocusWord:Word
  constructor() { }

  ngOnChanges() {
    if (this.focusWord) {
      this.localFocusWord = new Word(this.focusWord.text, this.focusWord.translation, this.focusWord.language, this.focusWord.isPunctuation)
      this.localFocusWord.text = this.focusWord.text.charAt(0).toUpperCase() + this.localFocusWord.text.slice(1)
    }
  }

  getFamiliarity(familiarity:Familiarity) {
    return Familiarity[familiarity]
  }

}
