import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [

  	new Menu("Home", "/home", "The Home page"), 
  	new Menu("About", "/about", "The About page")
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
