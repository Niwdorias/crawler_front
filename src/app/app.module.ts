import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './main/view/view.component';
import { MainNavComponent } from './main/navigation/main-nav/main-nav.component';
import { NewUrlSearchComponent } from './main/new-url-search/new-url-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './utils/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    MainNavComponent,
    NewUrlSearchComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
