import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.page.html',
  styleUrls: ['./art.page.scss'],
})
export class ArtPage implements OnInit {
  imgs: Array<string> = [];

  constructor() {
    this.imgs= ["assets/imgs/1.jpg", 
      "assets/imgs/2.jpg", 
      "assets/imgs/3.jpg", 
      "assets/imgs/4.jpg", 
      "assets/imgs/5.jpg", 
      "assets/imgs/6.jpg", 
      "assets/imgs/7.jpg",
      "assets/imgs/8.jpg",
      "assets/imgs/9.jpg"];
   }

  ngOnInit() {
  }

}
