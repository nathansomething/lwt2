import { Component, OnInit } from '@angular/core';
import Language from '../language.enum';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {

  userId:Number;

  constructor(private route:ActivatedRoute, private router:Router, private wordService:WordService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params.user_id;
    });
  }

  getString(language:Language) {
    return Language[language];
  }

}
