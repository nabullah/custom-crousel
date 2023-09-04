# Basic LightWeight Crousel

Light Weight Configurable Carousel

## Dependency

-- Bootstrap Icons v1.10.2

## Stackblitz

-- https://stackblitz.com/edit/stackblitz-starters-yamn4f?file=src%2Fmain.ts

## USE --

Add `import { CustomCarouselModule } from 'custom-carousel'` in you module.

Import `CustomCarouselModule` in Imports

Use selector `<custom-crousel></custom-crousel>`

`[slidesData]` to insert Data in crousel. Declare your variable with `Slides[]` type

`[carouselConfig]` to use its Configuration

Use `<ng-template>` if your using card-crousel

## Example --

Exapmle Config

```sh
carouselConfig: Configuration = {
    type: 'card',
    dots: {
      show: true,
      showImage: true,
    },
    setTimer: {
      show:true,
      time: 3,
      direction: 'backword',
    },
    transition: {
      fadeIn: true,
    },
    styling: {
      border:'2px solid red',
      borderRadius: '0px',
      button: {
        hideButton:true,
        backgroundColor: 'transparent',
        height:'80px',
        width:'80px',
        border:'1px solid red',
        borderRadius: '1px',
        color: 'green',
        fontSize: '24px',
        leftIcon: 'bi bi-arrow-left-circle',
        rightIcon: 'bi bi-arrow-right-circle',
      },
      dots: {
        border: '1px solid red',
        borderRadius: '0px',
        backgroundColor: '#000000',
        height:'40px',
        width:'40px'
        hoverDotsBackgroundColor: '#254125',
      },
    },
```

## Example of Image Carousel Data

```
  dataForSlides: Slides[] = [
    { id: 1, image: './assets/image/image-1.jpg' },
    { id: 2, image: './assets/image/image-2.jpg' },
    { id: 3, image: './assets/image/image-3.jpg' },
    { id: 4, image: './assets/image/image-4.jpg' },
  ];

```

## Example Image Crousel

`<custom-crousel [slidesData]="crouselData" [carouselConfig]="carouselConfig"></custom-crousel>`

## Example of Card Carousel Data

```
 Card carousel data input should be in array or array of objects according to your needs.
 For example -
 data = [10, 20, 45, 47, 12, 14, 74, 5];

 OR

 data = [
  {id: 1, name: "Joy", desc: "This is my name"},
  {id: 2, name: "Joy - 1", desc: "This is my name"},
  {id: 3, name: "Joy - 2", desc: "This is my name"},
  {id: 4, name: "Joy - 3", desc: "This is my name"},
 ];

```

## Example Card Crousel

    `<custom-crousel [slidesData]="crouselData" [carouselConfig]="carouselConfig"[customTemplate]="childTemplate"></custom-crousel>`

```sh

 <ng-template #childTemplate>
     <ng-container *ngFor="let item of cardData">
         <div class="slide-card">
             <!-- Changeable  -->
             <span>{{item}}</span>
         </div>
     </ng-container>
 </ng-template>
```

```sh
## You can take reference from samplecrousel component as example
```
