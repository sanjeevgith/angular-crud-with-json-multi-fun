import { TestBed } from '@angular/core/testing';

import { MultiarrayService } from './multiarray.service';

describe('MultiarrayService', () => {
  let service: MultiarrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiarrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
