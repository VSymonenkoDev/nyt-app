import {Component, OnInit} from '@angular/core';
import {TopStoriesService} from '../services/top-stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  topStories$: any;
  mostShared$: any;
  reviews$: any;

  constructor(public topStories: TopStoriesService) {}

  ngOnInit() {
    console.log(1);
    this.topStories$ = this.topStories.getTopStories();
    this.mostShared$ = this.topStories.getMostShared();
    this.reviews$ = this.topStories.getReview();
  }
}
