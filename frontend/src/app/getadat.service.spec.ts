import { TestBed } from '@angular/core/testing';

import { GetadatService } from './getadat.service';

describe('GetadatService', () => {
  let service: GetadatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetadatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
