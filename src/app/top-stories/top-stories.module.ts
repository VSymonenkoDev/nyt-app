import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopStoriesComponent} from './top-stories.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {path: '', component: TopStoriesComponent}
];

@NgModule({
  declarations: [TopStoriesComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class TopStoriesModule { }
