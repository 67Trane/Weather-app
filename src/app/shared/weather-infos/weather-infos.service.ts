import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'b12642c283aed41f3cfd00fea38637b9'; // Ersetze durch deinen API-Schlüssel

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string, country: string = ''): Observable<any> {
    const location = country ? `${city},${country}` : city;
    const url = `${this.apiUrl}?q=${location}&units=metric&lang=de&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}

