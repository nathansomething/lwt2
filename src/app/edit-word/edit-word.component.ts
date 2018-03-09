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

  constructor(private wordService:WordService, private route:ActivatedRoute) {
    this.keys = Object.keys(this.familiarity).filter(Number)
  }

  ngOnInit() {
    // If the focus word is not specified in the component input, look in the router
    if (!this.focusWord) {
        this.route.params.subscribe(params => {
          if (params['word_id']) {
            this.wordService.get(params['word_id']).subscribe(word => {
              this.focusWord = word[0]
            })
          }
        })
    }
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
