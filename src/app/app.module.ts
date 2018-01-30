import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
// import { CeiboShare } from 'ng2-social-share';
import { NgIf } from "@angular/common";
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './pages/agents/_helpers/index';
import { routing } from './pages/agents/app.routing';
// import { ShareButtonModule } from '@ngx-share/button';


import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Angular4PaystackModule } from 'angular4-paystack';
import { HeaderComponent } from './pages/home/header/header.component';
import { BodyComponent } from './pages/home/body/body.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { Footer2Component } from './pages/home/footer2/footer2.component';
import { AboutComponent } from './pages/about/about.component';
import { WinnersComponent } from './pages/winners/winners.component';
import { PrizesComponent } from './pages/prizes/prizes.component';
import { OthersComponent } from './pages/others/others.component';
import { FaqComponent } from './pages/faq/faq.component';
import { WinComponent } from './pages/win/win.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './pages/modal/modal.component';
import { apiService } from './_services/api.service';
import { DataService } from './_services/datapass.service';
import {PaystackForm} from "./_services/PaystackForm";
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AgentComponent } from './pages/agents/agent.component';
import { LoginagentsComponent } from './pages/agents/loginagents/index';
import { RegisteragentsComponent } from './pages/agents/registeragents/index';
import { AgentspageComponent } from './pages/agents/agentspage/index';
import { AlertComponent } from './pages/agents/_directives/index';
import { AuthGuard } from './pages/agents/_guards/index';
import { JwtInterceptor } from './pages/agents/_helpers/index';
import { AlertService, AuthenticationService, UserService } from './pages/agents/_services/index';
import {WindowRef} from "./_services/window.service";
import {ReturnComponent } from './pages/return/return.component';
import { HidenumberPipe } from './hidenumber.pipe';
import {DusuForm} from "./_services/DusuForm";
import { SortnumberPipe } from './sortnumber.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    Footer2Component,
    FooterComponent,
    AboutComponent,
    WinnersComponent,
    PrizesComponent,
    OthersComponent,
    FaqComponent,
    WinComponent,
    ContactComponent,
    LoginagentsComponent,
    RegisteragentsComponent,
    AgentspageComponent,
    HomeComponent,
    ModalComponent,
    AgentComponent,
    AlertComponent,
    ReturnComponent,
    HidenumberPipe,
    SortnumberPipe,
  ],
  imports: [

    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule,
    Angular4PaystackModule,
    // HttpClientModule,      // (Required) for share counts

    // ShareButtonModule.forRoot(),

    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


  providers: [DusuForm, WindowRef, apiService, DataService, PaystackForm, AuthenticationService, AuthGuard, AlertService, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  },

    // provider used to create fake backend
    fakeBackendProvider],


  bootstrap: [AppComponent]
})
export class AppModule { }
