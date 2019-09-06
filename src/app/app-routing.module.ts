import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routing: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'top-stories', loadChildren: () => import('./top-stories/top-stories.module').then(m => m.TopStoriesModule)},
  {path: 'reviews', loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule)},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routing, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
