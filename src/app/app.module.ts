import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoComponent } from './video/video.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FilterPipe} from '../app/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddVideoComponent,
    VideoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
