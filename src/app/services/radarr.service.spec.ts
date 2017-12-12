import { TestBed, inject } from '@angular/core/testing';

import { RadarrService } from './radarr.service';

describe('RadarrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RadarrService]
    });
  });

  it('should be created', inject([RadarrService], (service: RadarrService) => {
    expect(service).toBeTruthy();
  }));
});
