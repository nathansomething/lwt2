import { Component } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username:String;

  constructor() {
    this.username = "Username";
  }
}
