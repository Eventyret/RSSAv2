import { TestBed, inject } from '@angular/core/testing';

import { MovieQuotesService } from './movie-quotes.service';

describe('MovieQuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieQuotesService]
    });
  });

  it('should be created', inject([MovieQuotesService], (service: MovieQuotesService) => {
    expect(service).toBeTruthy();
  }));
});
