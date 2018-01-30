import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { apiService } from '../../../_services/api.service';
import { Headers, Http, Response } from "@angular/http";
import { HttpModule, } from '@angular/http';

@Component({
    moduleId: module.id,
    templateUrl: 'registeragents.html'
})

export class RegisteragentsComponent {
    model: any = {};
    loading = false;
    urlName;
    errormessage = false;
    errormessage2 = false;
    errormessage3 = false;
    errormessage4 = false;
    errormessage5 = false;
    errormessage6 = false;
    errormessage7 = false;
    incomingerror;
    firstnameError;
    lastnameError;
    passwordError;
    passwordConfirmError;
    locationError;
    emailError;
    phoneError;
    constructor(private http: Http, public apiService: apiService,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    // register() {
    //     this.loading = true;
    //     this.userService.create(this.model)
    //         .subscribe(
    //             data => {
    //                 // console.log(data);
    //                 this.alertService.success('Registration successful', true);
    //                 this.router.navigate(['/login']);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }
    register(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, phoneNumber: HTMLInputElement, location: HTMLInputElement, password: HTMLInputElement, confirmpassword: HTMLInputElement): boolean {
        // console.log(firstName.value);
        // console.log(lastName.value);
        // console.log(email.value);
        // console.log(phoneNumber.value);
        // console.log(location.value);
        // console.log(password.value);
        // console.log(confirmpassword.value);





        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const body = { first_name: firstName.value, last_name: lastName.value, email: email.value, phone_number: phoneNumber.value, address: location.value, password: password.value, password_confirmation: confirmpassword.value };
        this.urlName = this.apiService.apiUrl$;
        this.http.post(this.urlName + 'agents/register', body, { headers: headers })
            .map((response: Response) => response.json())
            .subscribe(res => {
                console.log(res);
                this.errormessage = false;
                this.router.navigate(['/login']);
            },
            err => {
                let error = JSON.parse(err.text());


                console.log(error);
                 console.log(error.status);

                if (firstName.value == "") {
                  this.errormessage = true;
                  this.errormessage2 = false;
                  this.errormessage3 = false;
                  this.errormessage4 = false;
                  this.errormessage5 = false;
                  this.errormessage6 = false;
                  this.errormessage7 = false;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                  this.firstnameError = error.errors.details.first_name[0];
                //   this.lastnameError = error.errors.details.last_name[0];
                //   this.emailError = error.errors.details.email[0];
                //   this.phoneError = error.errors.details.phone_number[0];
                //   this.locationError = error.errors.details.address[0];
                //   this.passwordError = error.errors.details.password[0];
                //   this.passwordConfirmError = error.errors.details.password_confirmation[0];
            }
            else if (lastName.value == "") {
                   this.errormessage = false;
                  this.errormessage2 = true;
                  this.errormessage3 = false;
                  this.errormessage4 = false;
                  this.errormessage5 = false;
                  this.errormessage6 = false;
                  this.errormessage7 = false;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                //   this.firstnameError = error.errors.details.first_name[0];
                  this.lastnameError = error.errors.details.last_name[0];
                //   this.emailError = error.errors.details.email[0];
                //   this.phoneError = error.errors.details.phone_number[0];
                //   this.locationError = error.errors.details.address[0];
                //   this.passwordError = error.errors.details.password[0];
                //   this.passwordConfirmError = error.errors.details.password_confirmation[0];
            }
            else if (email.value == "") {
                   this.errormessage = false;
                  this.errormessage2 = false;
                  this.errormessage3 = true;
                  this.errormessage4 = false;
                  this.errormessage5 = false;
                  this.errormessage6 = false;
                  this.errormessage7 = false;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                //   this.firstnameError = error.errors.details.first_name[0];
                //   this.lastnameError = error.errors.details.last_name[0];
                  this.emailError = error.errors.details.email[0];
                //   this.phoneError = error.errors.details.phone_number[0];
                //   this.locationError = error.errors.details.address[0];
                //   this.passwordError = error.errors.details.password[0];
                //   this.passwordConfirmError = error.errors.details.password_confirmation[0];
            }
            else if (phoneNumber.value == "" ) {
                   this.errormessage = false;
                  this.errormessage2 = false;
                  this.errormessage3 = false;
                  this.errormessage4 = true;
                  this.errormessage5 = false;
                  this.errormessage6 = false;
                  this.errormessage7 = false;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                //   this.firstnameError = error.errors.details.first_name[0];
                //   this.lastnameError = error.errors.details.last_name[0];
                //   this.emailError = error.errors.details.email[0];
                  this.phoneError = error.errors.details.phone_number[0];
                //   this.locationError = error.errors.details.address[0];
                //   this.passwordError = error.errors.details.password[0];
                //   this.passwordConfirmError = error.errors.details.password_confirmation[0];
            }
            else if (location.value == "") {
                   this.errormessage = false;
                  this.errormessage2 = false;
                  this.errormessage3 = false;
                  this.errormessage4 = false;
                  this.errormessage5 = true;
                  this.errormessage6 = false;
                  this.errormessage7 = false;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                //   this.firstnameError = error.errors.details.first_name[0];
                //   this.lastnameError = error.errors.details.last_name[0];
                //   this.emailError = error.errors.details.email[0];
                //   this.phoneError = error.errors.details.phone_number[0];
                  this.locationError = error.errors.details.address[0];
                //   this.passwordError = error.errors.details.password[0];
                //   this.passwordConfirmError = error.errors.details.password_confirmation[0];
            }
            else if (password.value == "") {
                   this.errormessage = false;
                  this.errormessage2 = false;
                  this.errormessage3 = false;
                  this.errormessage4 = false;
                  this.errormessage5 = false;
                  this.errormessage6 = true;
                  this.errormessage7 = false;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                //   this.firstnameError = error.errors.details.first_name[0];
                //   this.lastnameError = error.errors.details.last_name[0];
                //   this.emailError = error.errors.details.email[0];
                //   this.phoneError = error.errors.details.phone_number[0];
                //   this.locationError = error.errors.details.address[0];
                  this.passwordError = error.errors.details.password[0];
                //   this.passwordConfirmError = error.errors.details.password_confirmation[0];
            }
            else if (confirmpassword.value == "" && confirmpassword.value.length < 6) {
                   this.errormessage = false;
                  this.errormessage2 = false;
                  this.errormessage3 = false;
                  this.errormessage4 = false;
                  this.errormessage5 = false;
                  this.errormessage6 = false;
                  this.errormessage7 = true;
                  this.incomingerror = error.errors.description;
                //   this.incomingerrors = error.errors.details;
                  console.log(error.errors.details);
                  console.log(error.errors.details.address[0]);

                  
                //   this.firstnameError = error.errors.details.first_name[0];
                //   this.lastnameError = error.errors.details.last_name[0];
                //   this.emailError = error.errors.details.email[0];
                //   this.phoneError = error.errors.details.phone_number[0];
                //   this.locationError = error.errors.details.address[0];
                //   this.passwordError = error.errors.details.password[0];
                  this.passwordConfirmError = error.errors.details.password_confirmation[0];
                }
            });
        return true;
    }
}
