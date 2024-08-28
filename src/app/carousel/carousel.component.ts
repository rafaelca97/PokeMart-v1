import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides = [
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg',
    'assets/images/slide4.jpg'
  ];

  currentSlide = 0;
  intervalID: any;
  
  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if(this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  startAutoSlide () {
    this.intervalID = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

    nextSlide() {
      this.currentSlide = (this.currentSlide < this.slides.length -1) ? this.currentSlide + 1 : 0;
      this.updateCarouselPosition();
    }

  updateCarouselPosition() {
    const carousel = document.querySelector('.carousel-slides') as HTMLElement;
    const offset = -this.currentSlide * 100;
    carousel.style.transform = `translateX(${offset}vw)`;
  }

  goToSlide (index: number) {
    this.currentSlide = index;
    this.updateCarouselPosition();
  }

}
  /*
  previousSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.slides.length - 1; 
  }

  nextSlide () {
    this.currentSlide = (this.currentSlide < this.slides.length -1) ? this.currentSlide + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  */
