import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NewsService } from '../news.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  stories: Story[] = [];
  storySubs: Subscription;

  constructor(private newsService: NewsService) { }
  startIndex: number = 0;
  endIndex: number = 30;

  ngOnInit() {
    this.storySubs = this.newsService.storysChanged.subscribe(storys => {
      this.stories = storys;
    })
    this.newsService.getStories("topstories");
  }

  loadMore() {
    this.startIndex += 30;
    this.endIndex += 30;
    this.newsService.getStories("topstories", this.startIndex, this.endIndex);
  }

  ngOnDestroy() {
    this.storySubs.unsubscribe();
  }

}
