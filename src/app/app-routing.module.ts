import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NewStoriesComponent } from './new-stories/new-stories.component';
import { PastStoriesComponent } from './past-stories/past-stories.component';
import { AskComponent } from './ask/ask.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'new', component: NewStoriesComponent},
  { path: 'past', component: PastStoriesComponent},
  { path: 'ask', component: AskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
