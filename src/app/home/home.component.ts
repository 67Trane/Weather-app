import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { WeatherComponent } from "../weather/weather.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, WeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
