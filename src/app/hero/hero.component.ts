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
    this.weatherService.getWeatherByCity('Weißenburg', 'de').subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log('Wetterdaten:', data);
        console.log(data.main.temp)
      },
      error: (err) => {
        console.error('Fehler beim Abrufen der Wetterdaten:', err);
      },
    });
  }
}
