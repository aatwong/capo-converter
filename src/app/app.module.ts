import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConverterComponent } from './converter/converter.component';
import { ConverterService } from './converter/converter.service';
import { FindSoundComponent } from './converter/find-sound/find-sound.component';
import { FindShapeComponent } from './converter/find-shape/find-shape.component';
import { FindFretComponent } from './converter/find-fret/find-fret.component';
import { SeparatedFormComponent } from './separated-form/separated-form.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '', component: HomeComponent },
  { path: 'discovery', component: SeparatedFormComponent },
  { path: 'clean', component: ConverterComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    FindSoundComponent,
    FindShapeComponent,
    FindFretComponent,
    NavbarComponent,
    SeparatedFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ ConverterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
