import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './main/view/view.component';
import { NewUrlSearchComponent } from './main/new-url-search/new-url-search.component';

const routes: Routes = [
  {path:'', component: ViewComponent, title: 'Crawler_1.0'},
  {path:'NewSearch', component: NewUrlSearchComponent, title: 'New Url Search'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
