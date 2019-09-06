import {Component, OnInit} from '@angular/core';
import {TopStoriesService} from '../services/top-stories.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews$: any;

  constructor(public topStories: TopStoriesService) { }

  ngOnInit() {
    this.reviews$ = this.topStories.getReview();
    this.reviews$.subscribe(console.log);
  }

}
