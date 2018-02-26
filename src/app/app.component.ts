import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import User from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserById(0).subscribe(user => {
      this.user = user[0];
    });
  }
}
