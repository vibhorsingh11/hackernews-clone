import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NewsService } from '../news.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-past-stories',
  templateUrl: './past-stories.component.html',
  styleUrls: ['./past-stories.component.css']
})
export class PastStoriesComponent implements OnInit, OnDestroy {
  stories: Story[] = [];
  storySubs: Subscription;
  startIndex: number = 0;
  endIndex: number = 30;
  todayDate;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.todayDate = currentDate.getMonth() + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
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
