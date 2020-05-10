import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'; /* Faire les routes */
import {HttpClientModule} from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';

import { ApiDodleBrokerService} from './api-dodle-broker.service';


const appRoutes: Routes = [
  // 1 route par module
  { path: 'accueil', component: AccueilComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: AccueilComponent},
  { path: '**', component: AccueilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [ApiDodleBrokerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
