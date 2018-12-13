import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  shownGroup: number;
  title: string;
  constructor() { }

  ngOnInit() {
    this.title = 'About';
  }

  toggleGroup(group: number): void {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  }

  isGroupShown(group: number): boolean {
    return this.shownGroup === group;
  }

}
