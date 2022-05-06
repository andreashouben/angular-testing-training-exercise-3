import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisJokeComponent } from './chuck-norris-joke.component';
import {
  ChuckNorrisJoke,
  ChuckNorrisService,
} from '../../services/chuck-norris.service';
import { selectElementByDataId } from '../../../test';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('ChuckNorrisJokeComponent', () => {
  let component: ChuckNorrisJokeComponent;
  let fixture: ComponentFixture<ChuckNorrisJokeComponent>;
  let chuckNorrisService: ChuckNorrisService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChuckNorrisJokeComponent],
      imports: [HttpClientModule],
    }).compileComponents();
    chuckNorrisService = TestBed.inject(ChuckNorrisService);
  });

  beforeEach(() => {});

  it('should create', () => {
    const expectedJoke: any = {
      value: 'Haha, funny joke.',
    };
    spyOn(chuckNorrisService, 'queryRandomJoke').and.returnValue(
      of(expectedJoke)
    );
    fixture = TestBed.createComponent(ChuckNorrisJokeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    let jokeEl = selectElementByDataId(fixture, 'chuck-norris-joke');

    expect(jokeEl.nativeElement.innerText).toEqual('Haha, funny joke.');
  });
});
