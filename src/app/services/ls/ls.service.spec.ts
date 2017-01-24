/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LsService } from './ls.service';

describe('Service: Ls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LsService]
    });
  });

  it('should ...', inject([LsService], (service: LsService) => {
    expect(service).toBeTruthy();
  }));
});
