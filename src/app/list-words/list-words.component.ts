import { Component, OnInit } from '@angular/core'
import Language from '../language.enum'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { WordService } from '../word.service'
import Word from '../word'

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {

  userId:Number
  words:Array<Word>

  constructor(private route:ActivatedRoute, private router:Router, private wordService:WordService) {
    this.words = []
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params.user_id
      this.wordService.getAll().subscribe(words => {
        this.words = words
      })
    });
  }

  deleteAll() {
    this.wordService.deleteAll().subscribe(res => {
      if (res["response"] == "SUCCSESS") {
        console.log("All words have been deleted")
        this.wordService.getAll().subscribe(words => this.words = words)
      }
    })
  }

  getString(language:Language) {
    return Language[language]
  }

}
