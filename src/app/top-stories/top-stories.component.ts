import {Component, OnInit} from '@angular/core';
import {TopStoriesService} from '../services/top-stories.service';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  topStories$: any;

  constructor(public topStories: TopStoriesService) {}

  ngOnInit() {
    this.topStories$ = this.topStories.getTopStories()
      .pipe(
        map(storys => storys.filter(story => story.multimedia.length))
      );
    // this.topStories$.subscribe(console.log);
  }
}
