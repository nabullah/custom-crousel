# CustomCrousel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Dependency

-- Bootstrap Icons v1.10.2

## Copy "crousel" folder in your Project and use

## Use selector `<custom-crousel></custom-crousel>`

## Import `CrouselComponent` in your module.ts

## [slidesData] to insert Data in crousel

## [carouselConfig] to use its COnfiguration

## Use ng-template if your using card-crousel 
Example   <ng-template #childTemplate>
        <ng-container *ngFor="let item of cardData">
            <div class="slide-card">
                <!-- Changeable  -->
                <span>{{item}}</span>
            </div>
        </ng-container>
    </ng-template>

Exapmle Config

carouselConfig: Configuration = {
    type: 'card',
    dots: {
      show: true,
      // showImage: true,
    },
    setTimer: {
      // show:true,
      // time: 3,
      // direction: 'backword',
    },
    transition: {
      // fadeIn: true,
    },
    styling: {
      // border:'2px solid red',
      borderRadius: '0px',
      button: {
        // hideButton:true,
        // backgroundColor: 'transparent',
        // height:'80px',
        // width:'80px',
        // border:'1px solid red',
        // borderRadius: '1px',
        // color: 'green',
        // fontSize: '24px',
        // leftIcon: 'bi bi-arrow-left-circle',
        // rightIcon: 'bi bi-arrow-right-circle',
      },
      dots: {
        // border: '1px solid red',
        borderRadius: '0px',
        // backgroundColor: '#000000',
        // height:'40px',
        // width:'40px'
        hoverDotsBackgroundColor: '#254125',
      },
    },

--Example Card Crousel 
    `<custom-crousel [slidesData]="crouselData" [carouselConfig]="carouselConfig"[customTemplate]="childTemplate"></custom-crousel>`
    <ng-template #childTemplate>
        <ng-container *ngFor="let item of cardData">
            <div class="slide-card">
                <!-- Changeable  -->
                <span>{{item}}</span>
            </div>
        </ng-container>
    </ng-template>

--Example Image Crousel
`<custom-crousel [slidesData]="crouselData" [carouselConfig]="carouselConfig"></custom-crousel>`



