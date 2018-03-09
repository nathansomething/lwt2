import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet, Router } from '@angular/router';
import User from './services/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user:User
  selectNum:number

  constructor(private route:Router) {
    this.user = new User(0, "jshmoe", "Joe", "Shmoe")
  }

  select(num:number) {
    this.selectNum = num
  }

  isSelected(num:number):boolean {
    return this.selectNum == num
  }

  ngOnInit() {
    let url = window.location.href
    if (url.includes("document")) {
      this.selectNum = 2
    }
    else if (url.includes("word")) {
      this.selectNum = 3
    }
    else if (url.includes("upload")) {
      this.selectNum = 4
    }
    else {
      this.selectNum = 1
    }
  }
}
