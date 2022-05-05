import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockResult } from '../../testdata/mockdata';

describe('CharacterService', () => {
  let service: CharacterService;
  let controller: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('fetches characters for query', () => {});

  it('fetches given url', () => {});
});
