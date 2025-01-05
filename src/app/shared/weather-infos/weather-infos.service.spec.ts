import { TestBed } from '@angular/core/testing';

import { WeatherInfosService } from './weather-infos.service';

describe('WeatherInfosService', () => {
  let service: WeatherInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
