/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryEffects } from './country.effects';

describe('Service: Country.effect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryEffects]
    });
  });

  it('should ...', inject([CountryEffects], (service: CountryEffects) => {
    expect(service).toBeTruthy();
  }));
});
