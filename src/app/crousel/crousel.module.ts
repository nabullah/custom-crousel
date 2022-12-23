import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrouselComponent } from './crousel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrouselComponent],
  imports: [CommonModule, FormsModule],
  exports:[CrouselComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CrouselModule {}
