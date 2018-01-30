import { Component, OnInit } from '@angular/core';
import {apiService} from "../../_services/api.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Http,Headers,RequestOptions,Response} from "@angular/http";
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  reference;
  sk;
  pk;
  status;
  data = null;
  paymenttype;
  pollid;
  answer;
  polls =[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService : apiService, private http:Http){ }

  ngOnInit() {
    this.sk = this.apiService.sk;
    this.pk = this.apiService.pk;
    this.reference =this.route.snapshot.paramMap.get('reference');
    this.paymenttype=this.route.snapshot.paramMap.get('type');
    this.pollid=this.route.snapshot.paramMap.get('poll');
    this.answer=this.route.snapshot.paramMap.get('ans');
    this.getPolls(this.pollid);
    console.log(this.reference);
    console.log(this.paymenttype);
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.sk}`);
    headers.append('content-type', 'application/json');
    let options = new RequestOptions({withCredentials: true, headers: headers });
    let verifyUrl = `https://api.paystack.co/transaction/verify/${this.reference}`;
    this.http.get(verifyUrl,options)
      .map((resp:Response)=>{
        const res = resp.json();
        return res;
      })
      .subscribe(res => {
          this.data = res.data;
      });

  }

  getPolls(id){
    let url =this.apiService.apiUrl$ + "polls_mates?code="+id;

    this.http.get(url).map((response: Response) => response.json())
      .subscribe(res => {
          this.polls = res.data;
        },
        err => {
          let error = JSON.parse(err.text());
          if (error.status === false) {
          } else {
            alert("Your internet might be slow.")
          }
        }
      );
  }




}
