import { TestBed, inject } from '@angular/core/testing';

import { ConversionLogicService } from './conversion-logic.service';

describe('ConversionLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionLogicService]
    });
  });

  it('should be created', inject([ConversionLogicService], (service: ConversionLogicService) => {
    expect(service).toBeTruthy();
  }));
});
