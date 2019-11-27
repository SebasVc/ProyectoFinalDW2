import { TestBed } from '@angular/core/testing';

import { TablaService } from './tabla.service';

describe('TablaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablaService = TestBed.get(TablaService);
    expect(service).toBeTruthy();
  });
});
