import { Routes, RouterModule } from '@angular/router';

import { AgentspageComponent } from './agentspage/index';
import { LoginagentsComponent } from './loginagents/index';
import { RegisteragentsComponent } from './registeragents/index';

import { HeaderComponent } from '../home/header/header.component';
import { BodyComponent } from '../home/body/body.component';
import { FooterComponent } from '../home/footer/footer.component';
import { Footer2Component } from '../home/footer2/footer2.component';
import { AboutComponent } from '../about/about.component';
import { WinnersComponent } from '../winners/winners.component';
import { PrizesComponent } from '../prizes/prizes.component';
import { OthersComponent } from '../others/others.component';
import { FaqComponent } from '../faq/faq.component';
import { WinComponent } from '../win/win.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import {ReturnComponent} from "../return/return.component";

import { AuthGuard } from './_guards/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home/:id', component: HomeComponent },
    // { path: ':id', component: HomeComponent },
    { path: 'register', component: RegisteragentsComponent },
    { path: 'agents', component: AgentspageComponent, canActivate: [AuthGuard]},

    { path: 'login', component: LoginagentsComponent },
     { path: 'return/:type/:reference/:poll/:ans', component: ReturnComponent },
    { path: 'about', component: AboutComponent },

    { path: 'winners', component: WinnersComponent },
    { path: 'prizes', component: PrizesComponent },
    { path: 'others', component: OthersComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'win', component: WinComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
