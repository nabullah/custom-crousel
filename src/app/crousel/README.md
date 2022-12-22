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