import { TestBed } from '@angular/core/testing';

import { SignupService } from './worker_signup.service';

describe('SignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupService = TestBed.get(SignupService);
    expect(service).toBeTruthy();
  });
});