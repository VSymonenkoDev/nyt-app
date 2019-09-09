import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';
import {SimpleFormComponent} from '../simple-form/simple-form.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [HomeComponent, SimpleFormComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
