import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiService } from '../../../_services/api.service';
import { Headers, Http, Response } from "@angular/http";
import { HttpModule, } from '@angular/http';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({ 
    moduleId: module.id,
    templateUrl: 'loginagents.html'
})

export class LoginagentsComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    urlName;
    errormessage = false;
    errormessage2 = false;
    incomingerror;
    incomingerrors: any[];
    emailError;
    passwordError;
    errormessage3 = false;
    authError;

    constructor(
        private http: Http, public apiService: apiService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // login() {
    //     this.loading = true;
    //     this.authenticationService.login(this.model.username, this.model.password)
    //         .subscribe(
    //             data => {
    //                 // this.router.navigate([this.returnUrl]);
    //                 this.router.navigate(['/agents']);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }  
    login(email: HTMLInputElement,password: HTMLInputElement){
          var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const body = { email: email.value,password: password.value};
        this.urlName = this.apiService.apiUrl$;
        this.http.post(this.urlName + 'agents/login', body, { headers: headers })
            .map((response: Response) => response.json())
            .subscribe(res => {
                console.log(res);
                this.errormessage = false;
                this.errormessage2 = false;
                this.errormessage3 = false;
                 this.router.navigate(['/agents']);
                localStorage.setItem("lastname",res.data.last_name);
                localStorage.setItem("token",res.data.token);
                console.log(localStorage);
            },
            err => {
                let error = JSON.parse(err.text());


                console.log(error);
                 console.log(error.status);

                if (email.value == "") {
                  this.errormessage = true;
                  this.errormessage2 = false;
                  
                  console.log(error.errors.details.email[0]);
                  this.emailError = error.errors.details.email[0];
                  
                  

                }else if (password.value == ""){
                    this.errormessage2 = true;
                    this.errormessage = false;
console.log(error.errors.details.password[0]);
this.passwordError = error.errors.details.password[0];
                }
                else if(error.errors.description == "Auth. Credential Error"){
                   this.errormessage = false;
                   this.errormessage2 = false;
                   this.errormessage3 = true;
                   this.authError = error.errors.details;
                }
            });
        return true;
    }
}
