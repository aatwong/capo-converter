import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { ConverterService } from './converter/converter.service';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ConverterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
