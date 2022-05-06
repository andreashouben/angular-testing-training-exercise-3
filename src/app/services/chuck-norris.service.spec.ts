import { TestBed } from '@angular/core/testing';

import { ChuckNorrisService } from './chuck-norris.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ChuckNorrisService', () => {
  let service: ChuckNorrisService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ChuckNorrisService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('queries a random chuckNorrisJoke', () => {
    let actualJoke: any;
    const jokeObsevable = service.queryRandomJoke();
    jokeObsevable.subscribe((joke) => (actualJoke = joke));
    const returnedObject = {
      joke: "Chuck Norris doesn't eat honey, he chews bees.",
    };

    let request = controller.expectOne(
      'https://api.chucknorris.io/jokes/random'
    );

    expect(request.request.method).toEqual('GET');
    request.flush(returnedObject);

    expect(actualJoke).toEqual(returnedObject);
    controller.verify();
  });
});
