import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NewsService } from '../news.service';
import { Story } from '../story.model';

@Component({
  selector: 'app-new-stories',
  templateUrl: './new-stories.component.html',
  styleUrls: ['./new-stories.component.css']
})
export class NewStoriesComponent implements OnInit, OnDestroy {
  stories: Story[] = [];
  storySubs: Subscription;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.storySubs = this.newsService.storysChanged.subscribe(storys => {
      this.stories = storys;
    })
    this.newsService.getStories("newstories");
  }

  ngOnDestroy() {
    this.storySubs.unsubscribe();
  }

}
