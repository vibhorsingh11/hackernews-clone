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

  ngOnInit() {
    this.storySubs = this.newsService.storysChanged.subscribe(storys => {
      this.stories = storys;
    })
    this.newsService.getStories("topstories");
  }

  ngOnDestroy() {
    this.storySubs.unsubscribe();
  }

}
