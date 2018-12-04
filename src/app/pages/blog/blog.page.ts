import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  public entries: any;
  private visibleEntry: boolean;
  private title: string;
  constructor(public blogService: BlogService) {
    this.title = 'Blog';
  }

  ngOnInit() {
    this.getBlogEntries();
  }

  getBlogEntries() {
    this.blogService.getEntries().then((data) => {
        this.entries = data;
    });
  }

  private isVisibleEntry(entry): boolean {
    return this.visibleEntry === entry;
  }

  private toggleEntry(entry): void {
    this.visibleEntry = this.isVisibleEntry(entry) ? null : entry;
  }

}
