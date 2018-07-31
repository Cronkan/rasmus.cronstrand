import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { IconComponent } from './shared/components/icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
