import { TestBed } from '@angular/core/testing';

import { TempHumiService } from './temp-humi.service';

describe('TempHumiService', () => {
  let service: TempHumiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempHumiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
