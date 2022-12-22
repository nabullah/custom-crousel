import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrouselComponent } from './crousel/crousel.component';
import { SamplecrouselComponent } from './samplecrousel/samplecrousel.component';

const routes: Routes = [
  { path: '', component: CrouselComponent },
  { path: 'samplecrousel', component: SamplecrouselComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
