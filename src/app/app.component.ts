import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';


  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}


  ngOnInit() {
    setTimeout(() => {
      this.openmodal();
    }, 2000);
  }

  openmodal() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("product-div");

    if (sessionStorage.checkIfModalIsOpenBefore !== undefined) {
      if(sessionStorage.checkIfModalIsOpenBefore !== "open") {
        coverDiv.style.display = "block";
        productDiv.style.display = "block";
        productDiv.style.webkitAnimation = "movein .9s";
        productDiv.style.animation = "movein .9s";
        sessionStorage.checkIfModalIsOpenBefore = "open";
      } else {
        coverDiv.style.display = "none";
        productDiv.style.display = "none";
      }
    } else {
      coverDiv.style.display = "block";
      productDiv.style.display = "block";
      productDiv.style.webkitAnimation = "movein .9s";
      productDiv.style.animation = "movein .9s";
      sessionStorage.checkIfModalIsOpenBefore = "open";
    }
  }


  closeCover(e) {
    var cover = document.getElementById("cover-div");
    var product = document.getElementById("product-div");
    var first = document.getElementById("first-div");
    var second = document.getElementById("second-div");
    var secondb = document.getElementById("secondb-div");
    var third = document.getElementById("third-div");
    var error = document.getElementById("error-div");

    if (e.target === cover) {
      cover.style.display = "none";
      product.style.display = "none";
      first.style.display = "none";
      second.style.display = "none";
      secondb.style.display = "none";
      third.style.display = "none";
      error.style.display = "none";
    }
  }
}
