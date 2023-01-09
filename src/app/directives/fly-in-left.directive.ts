import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlyInLeft]'
})
export class FlyInLeftDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
      element.classList.add('animate__animated');
      element.classList.add('animate__slideInLeft');
    } else {
      element.classList.remove('animate__animated');
      element.classList.remove('animate__slideInLeft');
    }
  }

}
