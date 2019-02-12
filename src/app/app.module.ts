import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { ConverterService } from './converter/converter.service';
import { FindSoundComponent } from './converter/find-sound/find-sound.component';
import { FindShapeComponent } from './converter/find-shape/find-shape.component';
import { FindFretComponent } from './converter/find-fret/find-fret.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    FindSoundComponent,
    FindShapeComponent,
    FindFretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ConverterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
