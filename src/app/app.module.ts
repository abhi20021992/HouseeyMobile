import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Bootstrap Modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


//Material Module
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';


import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';



const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    LoginComponent,
    NewsComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash:true } // <-- debugging purposes only
    ),
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule


   ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [
        LoginComponent,
        NewsComponent,
        SearchComponent
    ]
})
export class AppModule { }
