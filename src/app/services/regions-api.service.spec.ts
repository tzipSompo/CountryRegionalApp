/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegionsApiService } from './regions-api.service';

describe('Service: RegionsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionsApiService]
    });
  });

  it('should ...', inject([RegionsApiService], (service: RegionsApiService) => {
    expect(service).toBeTruthy();
  }));
});
