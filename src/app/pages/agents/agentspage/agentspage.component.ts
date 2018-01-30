import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { apiService } from '../../../_services/api.service';
import { Headers, Http, Response,RequestOptions } from "@angular/http";
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { HttpModule, } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subscription } from "rxjs/Subscription"
import { CeiboShare } from 'ng2-social-share';


import { DataService } from '../../../_services/datapass.service';

import 'rxjs/add/operator/map'
import { PaystackForm } from "../../../_services/PaystackForm";
// import { apiService } from '../../../_services/api.service';
import { DusuForm } from "../../../_services/DusuForm";
import {WindowRef} from "../../../_services/window.service";
import {DOCUMENT,PlatformLocation} from "@angular/common";

@Component({
    moduleId: module.id,
    templateUrl: 'agentspage.component.html'
})

export class AgentspageComponent implements OnInit {


    urlName;
    username;
    poll_id = 1;
  contestants: any[];
  loop: any[];
  number;
  con_code;
  con_photo;
  mates_id;
  str;
  isPaystack;
  email;
  pk;
  thirdModalContent;
  loader: boolean;
  content: boolean;
  noTrivia: boolean = false;
  pollTitle;
  pollAmount;
  showErrormessage = false;
  dusuMerchantId;
  dusuRef;
  objTimer;
  pollCode;
  errormessage;
  errormessagemail;
  incorrectnumber;
  enteremail;
  voteserror;
  displayerrormessage = "";
  displayotperrormessage = "";
  otperror = false;
  timerup = false;
  total = 1;
  private subscriber: Subscription;
  private datey;
   polCode;
  sub;
  id: string;
  sessionToken;
  sk;
  answer;
  dusupayUrl;
  dusuForm;


    constructor(@Inject(DOCUMENT) private document: any,
              private platformlocation:PlatformLocation,public apiService: apiService,private http: Http, private userService: UserService,private route: ActivatedRoute,public payStackForm: PaystackForm,public data: DataService, private elementRef: ElementRef) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //   this.http = http
    // this.isPaystack = false;
    // this.pk = "pk_test_a997c5bae7ad59a84e9fd404d8239f03a9cc976c";
    // this.dusuMerchantId = this.apiService.dusuMerchantId;
    // this.payStackForm = new PaystackForm();
    // this.dusuRef = this.makeRef();

    this.http = http
    this.isPaystack = false;
    this.pk = this.apiService.pk;
    this.sk = this.apiService.sk;
    this.dusuMerchantId = this.apiService.dusuMerchantId;
    this.dusupayUrl =  this.apiService.dusupayUrl+"dusu_payments/dusupay";
    this.payStackForm = new PaystackForm();
    this.dusuForm= new DusuForm();
    }

    ngOnInit() {
       this.username = localStorage.getItem('lastname');
       this.sessionToken =  localStorage.getItem('token');


    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    this.getContestants();

    if (this.openmodal1 && this.openmodal3) {
      this.closeModal1();
    }
    }

logout(){
    localStorage.removeItem('token');
}

  checkNumber(conid: HTMLInputElement, number: HTMLInputElement, times: HTMLInputElement, email: HTMLInputElement): boolean {
    this.resendnum = number.value;
    this.resendtimes = times.value;

    if (number.value.length !== 11) {
      // alert("check number");
      this.errormessage = true;
      return false;
    } else if (email.value == "") {
      this.errormessage = false;
      this.errormessagemail = false;
      this.voteserror = false;
      this.enteremail = true;

      return false;
    }
    else if (times.value == "") {
      this.errormessage = false;
      this.errormessagemail = false;
      this.enteremail = false;
      this.voteserror = true;

      return false;
    }
    else {
      this.errormessagemail = false;
      this.http.get(this.apiService.apiUrl$ + "webentry/verify_number?phone_number=" + number.value)
        .map((response: Response) => response.json())
        .subscribe(res => {
            console.log(res);
          this.number = res.data.phone_number;
          console.log(res.data.phone_number);

          console.log(this.sessionToken);
          this.closeModal1();
          this.openmodal2();
        },
        err => {
          let error = JSON.parse(err.text());


          console.log(error);
          console.log(error.errors.details);
          if (error.status === false) {
            this.displayerrormessage = error.errors.details;
            // this.incorrectnumber = true;
            this.errormessage = false;
            this.errormessagemail = false;
            this.voteserror = false;
            this.enteremail = false;
          }
        });
      return true;
    }
  }

  resendnum;
  resendcode;
  resendconid;
  resendtimes;

  verifyCode(num: HTMLInputElement, code: HTMLInputElement, conid: HTMLInputElement, times: HTMLInputElement): boolean {
    console.log(times.value);

    if (code.value.length !== 4) {
      // alert("code should be 4 digits");
      // this.closeModal2();
      this.otperror = true;
      return false;
    }
    else {

      this.str = this.payStackForm.phone;
      this.http.get(this.apiService.apiUrl$ + "webentry/verify_code?phone_number=" + this.number + "&code=" + code.value + "&poll_id="+this.polCode+"&answer=" + conid.value + "&vote_count=" + times.value+"&token="+this.sessionToken)
        .map((response: Response) => response.json())
        .subscribe(res => {
          console.log(res);
          this.otperror = false;
          this.showErrormessage = false;
          console.log(this.sessionToken);
          // console.log(res._body);

          // this.closeModal2();
          // this.op3();

          this.payStackForm.ref = res.data.transaction_id;
          this.payStackForm.entry = res.data.entry_id;
          this.payStackForm.amount = this.pollAmount * 100 * res.data.vote_count;
          this.isPaystack = true;
        },
        err => {
          let error = JSON.parse(err.text());



          console.log(error);
          console.log(error.errors.details);
          if (error.status === false) {
            this.displayotperrormessage = error.errors.description;
            // this.incorrectnumber = true;

          }
        });

    }
    return true;
  }

  closeModal1() {
    this.displayerrormessage = "";
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("first-div");
    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";
    setTimeout(function () {
      productDiv.style.display = "none";
      coverDiv.style.display = "none";
    }, 300);
  }

  closeModal2() {
    this.timerup = false;
    this.displayotperrormessage = "";
    this.objTimer.unsubscribe();
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("second-div");
    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";
    setTimeout(function () {
      productDiv.style.display = "none";
      coverDiv.style.display = "none";
    }, 300);
  }
  closeModal3() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("third-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
      productDiv.style.display = "none";
      coverDiv.style.display = "none";
    }, 300);
  }


  getContestants() {
    this.loader = true;

    this.content = false;


  this.http.get(this.apiService.apiUrl$ + "polls_mates")
  .map((response: Response) => response.json())
      .subscribe(res => {
        this.loader = false;
        this.content = true;
        this.contestants = res.data.mates;
        console.log(res.data.polls[0].description);
        this.pollTitle = res.data.polls[0].title;
        this.pollAmount = res.data.polls[0].amount;
        this.polCode = res.data.polls[0].code;
        this.pollCode = "TRIVIA CODE: " + res.data.polls[0].code;
   },
      err => {
        let error = JSON.parse(err.text());
        if (error.status === false) {
          this.noTrivia = true;
          this.loader = false;
          this.content = false;
        } else {
          alert("Your internet might be slow.")
        }
      }
      );
  }





  openmodal1(a, b) {
    var coverDiv = document.getElementById("cover-div");
    var firstDiv = document.getElementById("first-div");
    coverDiv.style.display = "block";
    firstDiv.style.display = "block";
    firstDiv.style.webkitAnimation = "movein .9s";
    firstDiv.style.animation = "movein .9s";
    this.mates_id = a;
    this.http.get(this.apiService.apiUrl$ + "mates?id=" + a)
      .map((response: Response) => response.json())
      .subscribe(resp => {

        this.con_code = a;
        this.con_photo = b;
      });
  }

  openmodal2() {
    var coverDiv = document.getElementById("cover-div");
    var secondDiv = document.getElementById("second-div");
    coverDiv.style.display = "block";
    secondDiv.style.display = "block";
    secondDiv.style.webkitAnimation = "movein .9s";
    secondDiv.style.animation = "movein .9s";
    this.isPaystack = false;
    var callDuration = this.elementRef.nativeElement.querySelector('#time');
    this.startTimer(callDuration);
  }

  openmodal3() {
    var coverDiv = document.getElementById("cover-div");
    var thirdDiv = document.getElementById("third-div");
    coverDiv.style.display = "block";
    thirdDiv.style.display = "block";
    thirdDiv.style.webkitAnimation = "movein .9s";
    thirdDiv.style.animation = "movein .9s";
  }
  openmodal4() {
    var coverDiv = document.getElementById("cover-div");
    var errorDiv = document.getElementById("error-div");
    coverDiv.style.display = "block";
    errorDiv.style.display = "block";
    errorDiv.style.webkitAnimation = "movein .9s";
    errorDiv.style.animation = "movein .9s";
  }

  paymentCancel() {
  }


  paymentDone(e) {
    this.isPaystack = false;
    let body = {

      reference: this.payStackForm.ref,
      entry_id: this.payStackForm.entry

    }
    this.http.post(this.apiService.apiUrl$ + "webentry/verify_pay", body)
      .map((response: Response) => response.json())
      .subscribe(res => {
        // console.log(res);
        if (res.data.status === true) {
          this.closeModal2();
          this.thirdModalContent = res.data.description;
          this.openmodal3();
        }
      });
  }


  makeRef(length = 10) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

  }

  countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time, timer;
    var thetimer = null;
    function twoDigits(n) {
      return (n <= 9 ? "0" + n : n);
    }


    function updateTimer() {
      msLeft = endTime - (+new Date);
      if (msLeft < 1000) {
        element.innerHTML = "00:00";
      } else {
        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());

        thetimer = setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        return thetimer;
      }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    return updateTimer();
  }




  resendOtp() {
    this.timerup = false;
    this.displayotperrormessage = "";
    console.log(this.resendtimes);
    console.log(this.resendnum);
    this.http.get(this.apiService.apiUrl$ + "webentry/verify_number?phone_number=" + this.resendnum)
      .map((response: Response) => response.json())
      .subscribe(res => {
        // this.number = res.data.phone_number;
        console.log(res);

      });
    return true;

  }

  numberagain() {
    this.timerup = false;
    this.displayerrormessage = "";
    this.displayotperrormessage = "";
    this.objTimer.unsubscribe();
    var productDiv = document.getElementById("second-div");
    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";
    setTimeout(function () {
      productDiv.style.display = "none";
    }, 300);
    var coverDiv = document.getElementById("cover-div");
    var firstDiv = document.getElementById("first-div");
    coverDiv.style.display = "block";
    firstDiv.style.display = "block";
    firstDiv.style.webkitAnimation = "movein .9s";
    firstDiv.style.animation = "movein .9s";
  }

  startTimer(display) {
    var timer = 300;
    var minutes;
    var seconds;

    this.objTimer = Observable.interval(2000).subscribe(x => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      --timer;
      if (--timer <= 0) {
        console.log('timeup');
        this.objTimer.unsubscribe();
        this.timerup = true;
      }
    })
  }

 doPaystack(){
    let headers = new Headers();

    headers.append('Authorization', `Bearer ${this.sk}`);
    headers.append('content-type', 'application/json');
    let options = new RequestOptions({withCredentials: true, headers: headers });

    let paystackUrl = "https://api.paystack.co/transaction/initialize";
    let returnUrl = this.document.location.origin+"/"+"return/paystack/"+this.payStackForm.ref+"/"+this.polCode+"/"+this.answer;
    console.log(returnUrl);
    let body= {
      amount: this.payStackForm.amount,
      email:this.payStackForm.email,
      reference:this.payStackForm.ref,
      callback_url:returnUrl
    };
    this.http.post(paystackUrl, body,options)
      .map((resp:Response)=>{
        const res = resp.json();
        return res;
      })
      .subscribe(res => {

        this.payStackForm.access_code = res.data.access_code;
        this.payStackForm.url  = res.data.authorization_url;
        console.log(this.payStackForm.url);
        this.document.location.href =  this.payStackForm.url;
      });
    return true;
  }



}








