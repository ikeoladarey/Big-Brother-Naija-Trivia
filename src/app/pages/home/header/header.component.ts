import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobileMenu:boolean;

  constructor() { }

  openMobileMenu() {
    if (this.mobileMenu === true) {
      this.mobileMenu = false;
    } else {
      this.mobileMenu = true;
    }
  }

  ngOnInit() {
  }

}
