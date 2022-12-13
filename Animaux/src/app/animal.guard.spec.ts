import { TestBed } from '@angular/core/testing';

import { AnimalGuard } from './animal.guard';

describe('AnimalGuard', () => {
  let guard: AnimalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnimalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
