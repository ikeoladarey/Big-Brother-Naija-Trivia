import { Component, OnInit } from '@angular/core';
import {apiService} from "../../_services/api.service";
import { Headers, Http, Response } from "@angular/http";
import { HttpModule, } from '@angular/http';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  constructor(private http: Http ,private apiService :apiService) { }
  data;
  winnersLoader: boolean;

  getWinners() {
  this.winnersLoader = true;
    this.http.get(this.apiService.apiUrl$+"winners")
      .map((response: Response) => response.json())
      .subscribe(res => {
      this.winnersLoader = false;
        this.data = res.data;
      });
  }

  ngOnInit() {
    this.getWinners();
  }

}
