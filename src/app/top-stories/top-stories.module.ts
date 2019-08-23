import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopStoriesComponent} from './top-stories.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: TopStoriesComponent}
];

@NgModule({
  declarations: [TopStoriesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopStoriesModule { }
