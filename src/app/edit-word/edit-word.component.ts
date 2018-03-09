import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import Familiarity from '../enums/familiarity.enum'
import Word from '../services/word'
import { WordService } from '../services/word.service'

@Component({
  selector: 'edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent implements OnInit, OnChanges, OnDestroy  {

  familiarity = Familiarity
  keys:any[]
  localFam:Familiarity
  translation:string

  @Input() focusWord?:Word
  oldFocusWord:Word

  constructor(private wordService:WordService, private route:ActivatedRoute) {
    this.keys = Object.keys(this.familiarity).filter(Number)
  }

  ngOnInit() { }

  ngOnChanges() {
    if (this.focusWord) {
      if (this.oldFocusWord) {
        this.wordService.update(this.oldFocusWord).subscribe(res => res)
      }
      this.oldFocusWord = this.focusWord
    }
  }

  ngOnDestroy() {
    if (this.focusWord) {
      this.wordService.update(this.focusWord).subscribe(res => res)
    }
  }

}
