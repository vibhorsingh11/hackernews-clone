import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NewStoriesComponent } from './new-stories/new-stories.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'new', component: NewStoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
