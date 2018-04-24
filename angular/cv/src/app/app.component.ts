import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor( private UserSvc: UserService) {}

  logToConsole() {
  	this.UserSvc.List()
  	.subscribe(users=> {
  		console.log("Users:", users);
  	});
  }

  ngOnInit() {

  	let user: User 
  	= new User(14, 'max5', 'max', 'max', 'max', 'max', 'max', false, false,false);
  	this.UserSvc.Change(user)
  		.subscribe(resp => {
  			console.log("Change response", resp);
  			this.logToConsole();
  		})


  	// this.UserSvc.Get("1")
  	// 	.subscribe(user => {
  	// 		console.log(user);
  	// 	});
  }
}
