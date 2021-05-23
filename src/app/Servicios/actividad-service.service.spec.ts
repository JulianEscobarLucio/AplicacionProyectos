import { TestBed } from '@angular/core/testing';

import { ActividadServiceService } from './actividad-service.service';

describe('ActividadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadServiceService = TestBed.get(ActividadServiceService);
    expect(service).toBeTruthy();
  });
});
