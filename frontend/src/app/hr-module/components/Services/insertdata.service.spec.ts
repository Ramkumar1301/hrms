import { TestBed } from '@angular/core/testing';

import { InsertdataService } from './insertdata.service';

describe('InsertdataService', () => {
  let service: InsertdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
