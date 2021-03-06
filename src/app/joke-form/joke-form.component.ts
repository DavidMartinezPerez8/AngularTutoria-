import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'jokeform',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {
@Output() jokeCreated = new EventEmitter<Joke>();
  createJoke(setup: string, punchline: string) {
  this.jokeCreated.emit(new Joke(setup, punchline));
  }

}
