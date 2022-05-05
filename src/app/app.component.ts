import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-training';

  constructor(private characterService: CharacterService) {}

  currentPage: undefined | Page<Character[]>;

  onSearch(name: string) {}

  fetchNext() {}

  fetchPrev() {}

  get moreCharsAvailable(): boolean {
    return false;
  }

  get charactersOnPage() {
    return [];
  }
}
