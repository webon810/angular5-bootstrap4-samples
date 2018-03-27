import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootermainComponent } from './footermain.component';

describe('FootermainComponent', () => {
  let component: FootermainComponent;
  let fixture: ComponentFixture<FootermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
