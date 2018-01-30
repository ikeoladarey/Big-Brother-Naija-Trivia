import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { apiService } from '../../_services/api.service';
import { DataService } from '../../_services/datapass.service';
// import { DataService } from '../../_services/datapass.service/newEvent';
import { Headers, Http, Response } from "@angular/http";
import { HttpModule, } from '@angular/http';
import 'rxjs/add/operator/map'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {

  constructor(private http: Http,public apiService: apiService, public DataService: DataService) { }
  message:string;
  content: boolean;
  loader: boolean;

  details: any[];
  getTrivia;
  urlName
  noTrivia: boolean;

  ngOnInit() {
     this.getOthers();
  } 



   getOthers() {
     this.content = false;
     this.loader = true;
    this.http.get(this.apiService.apiUrl$ + "polls?status=1")
      .map((response: Response) => response.json())
      .subscribe(res => {
        this.content = true;
        this.loader = false;
         this.details = res.data;
     },
      err => {
        let error = JSON.parse(err.text());
        if (error.status === false) {
         console.log("hello");
          this.noTrivia = true;
          this.loader = false;
          this.content = false;
        } else { 
          setTimeout(() => {
                 alert("Your internet might be slow.")
          }, 5000);          
        }
      });
  } 
}
