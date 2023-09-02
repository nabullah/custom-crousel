import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomCarouselComponent } from "./custom-carousel.component";

@NgModule({
  declarations: [CustomCarouselComponent],
  imports: [CommonModule],
  exports: [CustomCarouselComponent],
})
export class CustomCarouselModule {}
