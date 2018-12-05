import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  time: Date;
  city: String;
  citySubscription: any;

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.getCurrentTime();
    this.getLocation();
  }

  ngOnDestroy() {
    this.citySubscription.unsubscribe();
  }

  private getTimeStamp(): Date {
    return new Date();
  }

  private setTimer(): void {
    setTimeout(() => {
      this.getCurrentTime();
    }, 1);
  }

  private getCurrentTime(): void {
      this.time = this.getTimeStamp();
      this.setTimer();
  }

  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      this.city = 'Location Unavailable';
    }
  }

  showPosition(position): void {
    this.citySubscription = this.cityService.getCity(position.coords).subscribe(
      (result) => {
        this.city = result;
      },
      (err) => {
        console.error(err);
        this.city = 'Location Unavailable';
      }
    );
    console.log(this.city);
  }

}
