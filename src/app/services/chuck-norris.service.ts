import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type ChuckNorrisJoke = {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  constructor(private httpClient: HttpClient) {}

  queryRandomJoke() {
    return this.httpClient.get<ChuckNorrisJoke>(
      'https://api.chucknorris.io/jokes/random'
    );
  }
}
