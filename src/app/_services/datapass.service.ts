import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { OthersComponent } from '../pages/others/others.component';
import { apiService } from '../_services/api.service';
import {Subject} from 'rxjs/Subject'; 


@Injectable()
export class DataService {
	private notify = new Subject<any>();
	notifyObservable$ = this.notify.asObservable();
   
    constructor(private http: Http,private apiService: apiService) { }
	urlName;
}