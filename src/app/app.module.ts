import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrouselComponent } from './crousel/crousel.component';
// import { CrouselModule } from './crousel/crousel.module';
import { SamplecrouselComponent } from './samplecrousel/samplecrousel.component';

@NgModule({
  declarations: [AppComponent, CrouselComponent, SamplecrouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CrouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
