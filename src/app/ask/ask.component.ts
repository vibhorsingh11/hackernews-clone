import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NewsService } from '../news.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit, OnDestroy {
  stories: Story[] = [];
  storySubs: Subscription;
  startIndex: number = 0;
  endIndex: number = 30;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.storySubs = this.newsService.storysChanged.subscribe(storys => {
      this.stories = storys;
    })
    this.newsService.getStories("askstories");
  }

  loadMore() {
    this.startIndex += 30;
    this.endIndex += 30;
    this.newsService.getStories("askstories", this.startIndex, this.endIndex);
  }

  ngOnDestroy() {
    this.storySubs.unsubscribe();
  }

}
