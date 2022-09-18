import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './shared/login-page/login-page.component';
import { SignupPageComponent } from './shared/signup-page/signup-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, SignupPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
