import {Component, OnInit} from '@angular/core';
import {TopStoriesService} from '../services/top-stories.service';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topStories$: any;
  mostShared$: any;
  reviews$: any;
  allStories$: any;

  constructor(public topStories: TopStoriesService) { }

  ngOnInit() {
    this.topStories$ = this.topStories.getTopStories();
    this.mostShared$ = this.topStories.getMostShared();
    this.reviews$ = this.topStories.getReview();

    this.allStories$ = combineLatest([this.topStories$, this.reviews$])
      .pipe(
        map((res: any) => res.flat())
      );
  }
}
