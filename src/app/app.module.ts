import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from './components/counter/counter.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { modules } from './modules';
import { reducers } from './store';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
