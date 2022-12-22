import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { Config, Slides } from './model/interface';
import { Configuration } from './model/class';

@Component({
  selector: 'custom-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrouselComponent implements OnInit, AfterViewInit {
  curSlide: number = 0;
  maxSlide!: number;
  allSlides!: any;
  setting!: Configuration;
  hoverBackgroundColorDots!: string;
  dots!: any;
  activeDot!: any;

  container!: any;
  cardSlider!: any;
  cardSlides!: any;
  cardButtons!: any;

  currentPosition: number = 0;
  currentPositionMobile: number = 1;
  currentMargin: number = 0;
  currentMarginMobile: number = 0;
  slidesPerPage: number = 0;
  slidesCount: any;
  containerWidth: any;
  prevKeyActive: boolean = false;
  nextKeyActive: boolean = true;
  windowSize!: any;

  @Input() slidesData!: Slides[];
  @Input() carouselConfig!: Config;
  @Input() customTemplate!: TemplateRef<any>;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowSize = event.target.innerWidth;
    this.checkWidth();
  }

  constructor() {}
  ngAfterViewInit(): void {
    /**
     * Selectors for Image Carousel
     */
    this.allSlides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dots-span');
    this.activeDot = document.querySelectorAll('.dots-active');
    this.maxSlide = this.allSlides.length - 1;

    /**
     * Selectors for Card Carousel
     */
    this.container = document.querySelectorAll('#container-fluid');
    this.cardSlider = document.querySelectorAll('#card-slider');
    this.cardSlides = document.querySelectorAll('.slide-card').length;
    this.cardButtons = document.querySelectorAll('.card-buttons');
    this.slidesCount = this.cardSlides - this.slidesPerPage;
    this.containerWidth = this.container[0].offsetWidth;
    this.setParams(this.windowSize);

    /**
     * Timer Setting
     */
    if (this.carouselConfig?.setTimer?.show) {
      this.autoChangeSlide(
        this.carouselConfig.setTimer.time!,
        this.carouselConfig.setTimer.direction!
      );
    }
    if (
      this.carouselConfig.styling?.dots?.hoverDotsBackgroundColor ==
        undefined ||
      this.carouselConfig.styling?.dots?.hoverDotsBackgroundColor == null
    ) {
      this.hoverBackgroundColorDots = 'red';
    } else {
      this.hoverBackgroundColorDots =
        this.carouselConfig?.styling?.dots?.hoverDotsBackgroundColor!;
    }

    // console.log('carouselConfig', this.carouselConfig);
    // console.log('Configuration', Configuration);
  }
  ngOnInit(): void {
    /**
     * Accessing default settings for Carousel from Configuration Class
     */
    this.setting = new Configuration();
  }

  /**
   * Click function for Next slide
   */
  nextSlide() {
    if (this.curSlide === this.maxSlide) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }
    this.allSlides.forEach((slide: any, index: number) => {
      if (
        (this.carouselConfig?.transition?.translate != undefined &&
          this.carouselConfig?.transition?.translate) ||
        (this.carouselConfig?.transition?.fadeIn == undefined &&
          this.setting?.transition?.translate)
      ) {
        slide.style.transform = `translateX(${100 * (index - this.curSlide)}%)`;
      } else if (
        (this.carouselConfig?.transition?.fadeIn != undefined &&
          this.carouselConfig?.transition?.translate == undefined) ||
        (this.carouselConfig?.transition?.fadeIn == undefined &&
          this.setting?.transition?.fadeIn)
      ) {
        if (index == this.curSlide) {
          slide.style.opacity = 1;
        } else {
          slide.style.opacity = 0;
        }
      }
    });
  }

  /**
   * Click function for previous slide
   */
  previousSlide() {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide;
    } else {
      this.curSlide--;
    }
    this.allSlides.forEach((slide: any, index: any) => {
      if (
        (this.carouselConfig?.transition?.translate != undefined &&
          this.carouselConfig?.transition?.translate) ||
        (this.carouselConfig?.transition?.fadeIn == undefined &&
          this.setting?.transition?.translate)
      ) {
        slide.style.transform = `translateX(${100 * (index - this.curSlide)}%)`;
      } else if (
        (this.carouselConfig?.transition?.fadeIn != undefined &&
          this.carouselConfig?.transition?.translate == undefined) ||
        (this.carouselConfig?.transition?.fadeIn == undefined &&
          this.setting?.transition?.fadeIn)
      ) {
        if (index == this.curSlide) {
          slide.style.opacity = 1;
        } else {
          slide.style.opacity = 0;
        }
      }
    });
  }

  /**
   *
   * @param time
   * @param direction
   * Change Slides automatically on set interval of time
   */

  autoChangeSlide(time: number, direction: string) {
    // Both time and direction is given
    if (
      time != null &&
      time != undefined &&
      direction != null &&
      direction != undefined
    ) {
      const timeInmilliSec = time * 1000;
      if (direction == 'backword') {
        setInterval(() => {
          this.previousSlide();
        }, timeInmilliSec);
      } else if (direction == 'forward') {
        setInterval(() => {
          this.nextSlide();
        }, timeInmilliSec);
      }
      // Only Direction is given
    } else if (direction != null && direction != undefined) {
      const timer = this.setting.setTimer.time!;
      const timeInmilliSec = timer * 1000;
      if (direction == 'backword') {
        setInterval(() => {
          this.previousSlide();
        }, timeInmilliSec);
      } else if (direction == 'forward') {
        setInterval(() => {
          this.nextSlide();
        }, timeInmilliSec);
      }
      // Only Time is Given
    } else if (time != null && time != undefined) {
      const direction = this.setting.setTimer.direction!;
      const timeInmilliSec = time * 1000;
      if (direction == 'backword') {
        setInterval(() => {
          this.previousSlide();
        }, timeInmilliSec);
      } else if (direction == 'forward') {
        setInterval(() => {
          this.nextSlide();
        }, timeInmilliSec);
      }
      // Both Time and direction is not given
    } else {
      const timer = this.setting.setTimer.time!;
      const direction = this.setting.setTimer.direction;
      const timeInmilliSec = timer * 1000;
      if (direction == 'backword') {
        setInterval(() => {
          this.previousSlide();
        }, timeInmilliSec);
      } else if (direction == 'forward') {
        setInterval(() => {
          this.nextSlide();
        }, timeInmilliSec);
      }
    }
  }

  /**
   *
   * @param index
   * Got to this slide according to index clicked on Dots or Image Dots
   */
  goToSlide(indx: number) {
    this.curSlide = indx;
    this.allSlides.forEach((slide: any, index: any) => {
      if (
        (this.carouselConfig?.transition?.translate != undefined &&
          this.carouselConfig?.transition?.translate) ||
        (this.carouselConfig?.transition?.fadeIn == undefined &&
          this.setting?.transition?.translate)
      ) {
        slide.style.transform = `translateX(${100 * (index - this.curSlide)}%)`;
      } else if (
        (this.carouselConfig?.transition?.fadeIn != undefined &&
          this.carouselConfig?.transition?.translate == undefined) ||
        (this.carouselConfig?.transition?.fadeIn == undefined &&
          this.setting?.transition?.fadeIn)
      ) {
        if (index == this.curSlide) {
          slide.style.opacity = 1;
        } else {
          slide.style.opacity = 0;
        }
      }
    });
  }

  /**
   * Hover Effect on backgorund color change
   * Works with hoverDotsBackgroundColor config
   * @param index
   */
  mouseEnterDots(index: any) {
    if (
      this.carouselConfig.styling?.dots?.hoverDotsBackgroundColor !=
        undefined ||
      this.carouselConfig.styling?.dots?.hoverDotsBackgroundColor != null
    ) {
      this.dots[index].style.backgroundColor =
        this.carouselConfig.styling?.dots?.hoverDotsBackgroundColor;
    } else {
      this.dots[index].style.backgroundColor =
        this.setting.styling.dots?.hoverDotsBackgroundColor;
    }
  }

  /**
   * Reset Background color to previous state on removed hover Effect
   * Works with hoverDotsBackgroundColor config
   * @param index
   */
  mouseExitDots(index: any) {
    if (
      this.carouselConfig.styling?.dots?.backgroundColor != undefined ||
      this.carouselConfig.styling?.dots?.backgroundColor != null
    ) {
      this.dots[index].style.backgroundColor =
        this.carouselConfig.styling?.dots?.backgroundColor;
    } else {
      this.dots[index].style.backgroundColor =
        this.setting.styling.dots?.backgroundColor;
    }
  }

  /**
   * Set width for cards according to the width of the window
   */
  checkWidth() {
    this.containerWidth = this.container.offsetWidth;
    this.setParams(this.containerWidth);
  }

  /**
   * Change cards count and margins according to window size
   * @param w width
   */
  setParams(w: any) {
    if (w < 551) {
      this.slidesPerPage = 1;
    } else {
      if (w < 901) {
        this.slidesPerPage = 2;
      } else {
        if (w < 1101) {
          this.slidesPerPage = 3;
        } else {
          this.slidesPerPage = 4;
        }
      }
    }
    this.slidesCount = this.cardSlides - this.slidesPerPage;
    if (this.currentPosition > this.slidesCount) {
      this.currentPosition -= this.slidesPerPage;
    }
    this.currentMargin = -this.currentPosition * (100 / this.slidesPerPage);
    this.cardSlider[0].style.marginLeft = this.currentMargin + '%';
    if (this.currentPosition > 0) {
      this.cardButtons[0].classList.remove('inactive');
    }
    if (this.currentPosition < this.slidesCount) {
      this.cardButtons[1].classList.remove('inactive');
    }
    if (this.currentPosition >= this.slidesCount) {
      this.cardButtons[1].classList.add('inactive');
    }
  }

  /**
   * Slide left button for Card Carousel
   */
  slideLeft() {
    if (this.currentPosition != 0) {
      this.cardSlider[0].style.marginLeft =
        this.currentMargin + 100 / this.slidesPerPage + '%';
      this.currentMargin += 100 / this.slidesPerPage;
      this.currentPosition--;
    }
    if (this.currentPosition <= 0 && this.currentPositionMobile <= 1) {
      this.cardButtons[0].classList.add('inactive');
    }
    if (
      this.currentPosition < this.slidesCount &&
      this.currentPositionMobile > 1
    ) {
      this.cardButtons[1].classList.remove('inactive');
    }
    if (window.innerWidth < 551) {
      if (
        this.currentPositionMobile <= this.cardSlides &&
        this.currentMarginMobile != 0
      ) {
        this.cardSlider[0].style.marginLeft = `${
          this.currentMarginMobile + 100
        }%`;
        this.currentMarginMobile = this.currentMarginMobile + 100;
        this.currentPositionMobile--;
      }
      if (
        this.currentPositionMobile == 1 ||
        this.currentPositionMobile >= this.cardSlides
      ) {
        this.cardButtons[0].classList.add('inactive');
      }
      if (this.currentPositionMobile >= 1) {
        this.cardButtons[1].classList.remove('inactive');
      }
    }
  }

  /**
   * Slide Right button for Card Carousel
   */
  slideRight() {
    if (
      this.currentPosition != this.slidesCount &&
      !(window.innerWidth < 551)
    ) {
      this.cardSlider[0].style.marginLeft =
        this.currentMargin - 100 / this.slidesPerPage + '%';
      this.currentMargin -= 100 / this.slidesPerPage;
      this.currentPosition++;
    }
    if (this.currentPosition == this.slidesCount) {
      this.cardButtons[1].classList.add('inactive');
    }
    if (this.currentPosition > 0) {
      this.cardButtons[0].classList.remove('inactive');
    }

    if (window.innerWidth < 551) {
      if (this.currentPositionMobile < this.cardSlides) {
        this.cardSlider[0].style.marginLeft = `${this.currentMarginMobile - 100}%`;
        this.currentMarginMobile = this.currentMarginMobile - 100;
        this.currentPositionMobile++;
      }
      if (this.currentPositionMobile == this.cardSlides) {
        this.cardButtons[0].classList.add('inactive');
      }
      if (this.currentPositionMobile <= this.cardSlides) {
        this.cardButtons[1].classList.remove('inactive');
      }
    }
  }
}
