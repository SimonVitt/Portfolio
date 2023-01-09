import { ElementRef } from '@angular/core';
import { FlyInLeftDirective } from './fly-in-left.directive';

describe('FlyInLeftDirective', () => {
  it('should create an instance', () => {
    const testElement = document.getElementById('i-am');
    const directive = new FlyInLeftDirective(new ElementRef(testElement));
    expect(directive).toBeTruthy();
  });
});
