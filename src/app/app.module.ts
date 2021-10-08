import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    JokeComponent,
    JokeFormComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
