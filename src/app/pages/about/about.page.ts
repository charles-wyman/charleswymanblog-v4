import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  shownGroup: any;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'About';
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  }

isGroupShown(group) {
    return this.shownGroup === group;
  }

}
