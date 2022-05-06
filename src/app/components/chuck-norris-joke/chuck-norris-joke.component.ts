import { Component, OnInit } from '@angular/core';
import { ChuckNorrisService } from '../../services/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css'],
})
export class ChuckNorrisJokeComponent implements OnInit {
  constructor(private chuckNorrisService: ChuckNorrisService) {}

  joke: string = '';

  ngOnInit(): void {
    this.chuckNorrisService.queryRandomJoke().subscribe((joke) => {
      this.joke = joke.value;
    });
  }
}
