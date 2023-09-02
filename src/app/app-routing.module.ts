import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplecrouselComponent } from './samplecrousel/samplecrousel.component';

const routes: Routes = [
  { path: '', component: SamplecrouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
