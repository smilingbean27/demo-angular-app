import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLoopingComponent } from './angular-looping.component';

describe('AngularLoopingComponent', () => {
  let component: AngularLoopingComponent;
  let fixture: ComponentFixture<AngularLoopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLoopingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLoopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
