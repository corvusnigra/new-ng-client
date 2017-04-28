import { TestBed, inject } from '@angular/core/testing';

import { EmployeService } from './employe.service';

describe('EmployeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeService]
    });
  });

  it('should ...', inject([EmployeService], (service: EmployeService) => {
    expect(service).toBeTruthy();
  }));
});
