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

    getStories(storyType, start = 0, end = 30) {
        this.storys = [];
        this.http.get<number[]>(`https://hacker-news.firebaseio.com/v0/${storyType}.json?print=pretty`)
        .pipe(map(x => x.slice(start, end)))
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
