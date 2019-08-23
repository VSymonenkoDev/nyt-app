import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {

  api = 'https://api.nytimes.com/svc/';
  apiKey = '6ebnFFGp5NAaNUmuhbYK6sH3qgabFHWM';

  constructor(public http: HttpClient) { }

  getTopStories() {
    const params = {params: {'api-key': this.apiKey}};
    return this.http.get(`${this.api}topstories/v2/science.json`, params)
      .pipe(
        map((response: any) => response.results)
      );
  }

  getMostShared() {
    const params = {params: {'api-key': this.apiKey}};
    return this.http.get(`${this.api}mostpopular/v2/shared/1/facebook.json`, params)
      .pipe(
        map((response: any) => response.results)
      );
  }

  getMostViewed() {
    const params = {params: {'api-key': this.apiKey}};
    return this.http.get(`${this.api}mostpopular/v2/viewed/1.json`, params)
      .pipe(
        map((response: any) => response.results)
      );
  }

  getMostPopular() {
    const params = {params: {'api-key': this.apiKey}};
    return this.http.get(`${this.api}mostpopular/v2/emailed/7.json?api-key=yourkey`, params)
      .pipe(
        map((response: any) => response.results)
      );
  }

  getReview() {
    const params = {params: {'api-key': this.apiKey}};
    return this.http.get(`${this.api}movies/v2/reviews/search.json`, params)
      .pipe(
        map((response: any) => response.results)
      );
  }
}
