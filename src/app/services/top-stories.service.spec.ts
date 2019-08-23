import { TestBed } from '@angular/core/testing';

import { TopStoriesService } from './top-stories.service';

describe('TopStoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopStoriesService = TestBed.get(TopStoriesService);
    expect(service).toBeTruthy();
  });
});
