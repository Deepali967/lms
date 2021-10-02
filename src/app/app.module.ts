import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './components/authentication/components/login/login.module';
import { RegisterModule } from './components/authentication/components/register/register.module';
import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LoginModule, RegisterModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
