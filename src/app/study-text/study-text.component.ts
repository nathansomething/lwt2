import { Component, OnInit } from '@angular/core';
import Document from '../document';

@Component({
  selector: 'app-study-text',
  templateUrl: './study-text.component.html',
  styleUrls: ['./study-text.component.css']
})
export class StudyTextComponent implements OnInit {

  document:Document;

  constructor() { }

  ngOnInit() {

  }

}
