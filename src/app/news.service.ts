import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Story } from './story.model';

@Injectable()

export class NewsService {
    storysChanged = new Subject<Story[]>();
    storys: Story[] = [];

    constructor(private http: HttpClient) {}

    getStories(storyType) {
        this.http.get<number[]>(`https://hacker-news.firebaseio.com/v0/${storyType}.json?print=pretty`)
        .pipe(map(x => x.slice(0, 30)))
        .subscribe((story: any[]) => {
            story.map(item => {
                this.http.get<Story>(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                .subscribe((res) => {
                    this.storys.push(res);
                    this.storysChanged.next([...this.storys]);
                })
            })
        })
    };
}
