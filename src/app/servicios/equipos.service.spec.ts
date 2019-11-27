import { TestBed } from '@angular/core/testing';

import { EquiposService } from './equipos.service';

describe('EquiposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquiposService = TestBed.get(EquiposService);
    expect(service).toBeTruthy();
  });
});
