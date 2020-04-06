import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {AuthService} from './auth.service';
import { MainComponent } from './main/main.component';
import {Guard} from './guard';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ResultsViewComponent,
    AuthComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    Guard,
    AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true // option. This is required and tells Angular that HTTP_INTERCEPTORS is an array of values, rather than a single value.
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
