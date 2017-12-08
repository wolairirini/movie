import { TestBed, inject } from '@angular/core/testing';

import { ClassifydetailService } from './classifydetail.service';

describe('ClassifydetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassifydetailService]
    });
  });

  it('should be created', inject([ClassifydetailService], (service: ClassifydetailService) => {
    expect(service).toBeTruthy();
  }));
});
