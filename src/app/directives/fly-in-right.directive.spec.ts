import { ElementRef } from '@angular/core';
import { FlyInRightDirective } from './fly-in-right.directive';

describe('FlyInRightDirective', () => {
  it('should create an instance', () => {
    const testElement = document.getElementById('i-am');
    const directive = new FlyInRightDirective(new ElementRef(testElement));
    expect(directive).toBeTruthy();
  });
});
