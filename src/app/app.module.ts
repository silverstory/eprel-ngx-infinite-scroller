import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    NgxInfiniteScrollerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
