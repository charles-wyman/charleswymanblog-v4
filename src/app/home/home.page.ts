import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CityService } from '../services/city/city.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  time: Date;
  city: String;

  public title: string;

  cards: any[];

  constructor(private router: Router, private cityService: CityService) {
    this.getCurrentTime();
    this.getLocation();
    this.title = 'Charles Wyman Programming';
    this.cards = [
      
      {
        title: 'Welcome',
        body: 'This is my portfolio web page. I am a software developer that specializes in creating web applications. What web developer doesn\'t have a portfolio site, right? The site is designed to be responsive from the ground up and to provide the user access to an in-depth version of my resume, examples of my art, links to different apps and sites that I have made, and provide a contact form for contacting me. The site itself should showcase engaging features and design. Also, a blog has been included to show how easy it is to write one from scratch today without even needing to resort to WordPress.\n The cards below provide links to different pages. There is a blog page for containing my thoughts about different things. There is an art page which has thumbnails of different designs that I have done through the years, which can be clicked to be expanded and zoomed in on. The \'About\' page contains a copy of my resume, and the \'Contact\' page provides a contact form for sending me e-mails.\nEnjoy!',
        clickable: false,
        link: ''
      },
      {
        title: 'Blog',
        body: 'I have written a blog to track my progress in creating this site and to have a place to speak about different topics in the IT industry as I see fit. Click here to check it out!', 
        clickable: true,
        link: 'blog'
      }
      {
        title: 'Art',
        body: 'This page contains an art gallery featuring different graphic design put together by the author. Image are displayed as thumbnails and can be clicked on to present a full image with zooming features.',
        clickable: true,
        link: 'art'
      },
      {
        title: 'About',
        body: 'This page contains more information about the author. Click here to review the author\'s resume as well as a general summary of work experience.',
        clickable: true,
        link: 'about'
      },
      {
        title: 'Contact',
        body: 'This page contains more information about the author. Click here to review the author\'s resume as well as a general summary of work experience.',
        clickable: true,
        link: 'contact'
      }
    ];
  }

  ngOnInit() {
  }

  public openPage(route: string, clickable: boolean): void {
    if (clickable) {
      this.router.navigateByUrl(`/${route}`);
    }
  }

  private getCurrentTime(): void {
    setInterval(() => {
    this.time = new Date();
    }, 1000);
  }

  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      this.city = 'Location Unavailable';
    }
  }

  showPosition(position): void {
    this.cityService.getCity(position.coords).subscribe(
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
