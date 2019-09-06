import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReviewsComponent} from './reviews.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';

const routes: Routes = [
  {path: '', component: ReviewsComponent}
];

@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReviewsModule { }
