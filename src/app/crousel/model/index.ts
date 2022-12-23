export type Slides = {
  id: number;
  image: string;
};

export type Config = {
  type?: CarouselType;
  dots?: Dots;
  setTimer?: Timer;
  transition?: Transition;
  styling?: Styling;
};

/**
 * Control for Dots in Carousel
 * Dots is shown by default
 */
export type Dots = {
  /**
   * Disable dots and Show the image instead of dots
   * Boolean value
   */
  showImage?: boolean;
  show?: boolean;
};

/**
 * Enable Timer at interval of 2 second
 * Slide is transitioned in every 3 second in forward direction
 * Disabled by default
 */
export type Timer = {
  /**
   * Set show : true in config to enable timer
   */
  show?: boolean;
  /**
   * Set Interval of Time
   */
  time?: number;
  /**
   * Set the direction of slide change
   */
  direction?: string;
};

/**
 * Transition effect on slide change
 * Default transition effect is set to translate
 */
export type Transition = {
  fadeIn?: boolean;
  translate?: boolean;
};

/**
 * Change styling Of Carousel
 */
export type Styling = {
  /**
   * Manipulate the border radius of Carousel
   */
  borderRadius?: string;
  /**
   * Manipulate the border of Carousel
   */
  border?: string;
  /**
   * Manipulate next and previous Button Styles
   */
  button?: ButtonStyles;
  /**
   * Manipulate Dots and Image Dots Styles
   */
  dots?: DotStyles;
};

/**
 * Change styling Of Arrow Buttons
 */
export type ButtonStyles = {
  /**
   * Hide Left and Right Buttons
   */
  hideButton?: boolean;
  /**
   * Change the background property of buttons
   */
  backgroundColor?: string;
  /**
   * Change the color of the icons inside the buttons
   */
  color?: string;
  /**
   * Change the width of the buttons
   */
  width?: string;
  /**
   * Change the height of the buttons
   */
  height?: string;
  /**
   * Change the border radius of the buttons
   */
  borderRadius?: string;
  /**
   * Use border property with the buttons
   */
  border?: string;
  /**
   * You can change the isons inside the buttons
   * Require class of bootstrap icons Example "bi bi-arrow-left-circle"
   */
  leftIcon?: string;
  rightIcon?: string;
  /**
   * Change the font-size of the icons inside the buttons
   */
  fontSize?: string;
};
/**
 * Change the Styling of dots or Image Dots
 */
export type DotStyles = {
  /**
   * Use border property with the dots or imageDots
   */
  border?: string;
  /**
   * Change the border radius of the  dots or imageDots
   */
  borderRadius?: string;
  /**
   * Change the background property of dots or imageDots
   */
  backgroundColor?: string;
  /**
   * Change the height of the dots or imageDots
   */
  height?: string;
  /**
   * Change the width of the dots or imageDots
   */
  width?: string;
  /**
   * Change the background-color on hover over the dots
   */
  hoverDotsBackgroundColor?: string;
};

/**
 * Select Type of Carousel
 */
export type CarouselType = 'image' | 'card';

// For Testing Porpose Only
export const Greeter = (name: string) => `Hello ${name}`;
