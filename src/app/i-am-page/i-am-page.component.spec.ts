import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmPageComponent } from './i-am-page.component';

describe('IAmPageComponent', () => {
  let component: IAmPageComponent;
  let fixture: ComponentFixture<IAmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAmPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
