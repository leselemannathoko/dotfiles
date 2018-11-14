import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CollegesComponent } from './colleges/colleges.component';
import { CollegeComponent } from './colleges/college/college.component';
import { CollegeListComponent } from './colleges/college-list/college-list.component';

import { AngularFireModule } from '@angular/fire';
//import { ToasterModule } from 'ngx-toaster';
//import { CollegeComponent } from './colleges/college/college.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegeListComponent,
    CollegeComponent,
    CollegesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
    //ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
