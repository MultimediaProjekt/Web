/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExcerciseService } from './excercise.service';

describe('Service: Excercise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcerciseService]
    });
  });

  it('should ...', inject([ExcerciseService], (service: ExcerciseService) => {
    expect(service).toBeTruthy();
  }));
});
