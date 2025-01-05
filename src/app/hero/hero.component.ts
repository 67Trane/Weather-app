import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather-infos/weather-infos.service';


@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherByCoordinates(44.34, 10.99).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Wetterdaten:', data);
      },
      error: (err) => {
        console.error('Fehler beim Abrufen der Wetterdaten:', err);
      },
    });
  }
}
