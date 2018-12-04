import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleAPIresults } from '../../data-models/googleAPIresults/googleAPIresults';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl: String;
  key: String;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    this.key = 'AIzaSyBCalhKhAbA6EIpC0JqdqdeM_60LDkcWKE';
  }

  private getUrl(latitude, longitude): string {
    return `${this.apiUrl}?latlng=${latitude},${longitude}&key=${this.key}`
  }

  public getCity(coords): Observable<string> {
    const { latitude, longitude } = coords;
    const url = this.getUrl(latitude, longitude);
    console.log(url);
    this.http.get(url).subscribe(
      (data: GoogleAPIresults) => {
        return data.city;
      },
      (err) => {
        return err;
      }
    );
    return null;
  }
}
