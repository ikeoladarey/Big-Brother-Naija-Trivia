import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { HttpModule, } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'
import {apiService} from "../../_services/api.service";

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css']
})
export class PrizesComponent implements OnInit {

  prizes: any[];
  prizesDetail: any[];
  priceLoader: boolean;
  constructor(private http: Http ,private apiService :apiService) { }

  ngOnInit() {
    this.getPrizes();
  }

  getPrizes() {
    this.priceLoader = true;
    this.http.get(this.apiService.apiUrl$+"polls")
      .map((response: Response) => response.json())
      .subscribe(res => {
        this.prizes = res.data;
        this.priceLoader = false;
      });
  }

}
