import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from '../../services/city/city.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  time: number;
  city: String;
  citySubscription: any;

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.city = 'Fetching Location...';
    this.getCurrentTime();
    this.setCity();
  }

  ngOnDestroy() {
    this.citySubscription.unsubscribe();
  }

  private setTimer(): void {
    setTimeout(() => {
      this.getCurrentTime();
    }, 1000);
  }

  private getCurrentTime(): void {
      this.time = Date.now();
      this.setTimer();
  }

  private formatLocationResults(result: Object): string {
    if (result['city'].length && result['region'].length && result['postal'].length && result['country'].length) {
      return `${result['city']}, ${result['region']}, ${result['postal']}, ${result['country']}`;
    }
    return 'Location Unavailable';
  }

  private setCity(): void {
    this.citySubscription = this.cityService.getCity().subscribe(
      (result) => {
          this.city = this.formatLocationResults(result);
      },
      (err) => {
        console.error(err);
        this.city = 'Location Unavailable';
      }
    );
  }

}
