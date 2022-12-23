import { CarouselType, Config, Dots, Styling, Timer, Transition } from '.';

/**
 * Default Configuration of the Crousel. Change at your own Risk
 */
export class Configuration {
  type: CarouselType = 'image';
  dots: Dots = {
    show: true,

    showImage: false,
  };

  setTimer: Timer = {
    show: false,
    time: 2,
    direction: 'forward',
  };

  transition: Transition = {
    translate: true,
    fadeIn: false,
  };

  styling: Styling = {
    button: {
      hideButton: false,
      color: '#fff',
      fontSize: '25px',
    },
    dots: {
      backgroundColor: '#fff',
      hoverDotsBackgroundColor: 'red',
    },
  };
}
