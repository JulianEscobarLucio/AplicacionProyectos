import { TestBed } from '@angular/core/testing';

import { AyudaServiceService } from './ayuda-service.service';

describe('AyudaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyudaServiceService = TestBed.get(AyudaServiceService);
    expect(service).toBeTruthy();
  });
});
