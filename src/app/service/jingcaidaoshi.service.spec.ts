import { TestBed, inject } from '@angular/core/testing';

import { JingcaidaoshiService } from './jingcaidaoshi.service';

describe('JingcaidaoshiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JingcaidaoshiService]
    });
  });

  it('should be created', inject([JingcaidaoshiService], (service: JingcaidaoshiService) => {
    expect(service).toBeTruthy();
  }));
});
