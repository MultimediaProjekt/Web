/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesignServiceService } from './design.service';

describe('Service: DesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignServiceService]
    });
  });

  it('should ...', inject([DesignServiceService], (service: DesignServiceService) => {
    expect(service).toBeTruthy();
  }));
});
