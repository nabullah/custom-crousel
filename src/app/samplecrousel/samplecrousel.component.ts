import { Component, OnInit } from '@angular/core';
import { Configuration } from '../crousel/model/class';

@Component({
  selector: 'app-samplecrousel',
  templateUrl: './samplecrousel.component.html',
  styleUrls: ['./samplecrousel.component.scss'],
})
export class SamplecrouselComponent implements OnInit {
  constructor() {}
  crouselData: any[] = [
    { id: 1, image: './assets/image/image-1.jpg' },
    { id: 2, image: './assets/image/image-2.jpg' },
    { id: 3, image: './assets/image/image-3.jpg' },
    { id: 4, image: './assets/image/image-4.jpg' },
  ];
  cardData: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  carouselConfig: Configuration = {
    type: 'image',
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
  };
  ngOnInit(): void {}
}
