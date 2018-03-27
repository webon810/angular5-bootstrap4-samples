import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterretailComponent } from './footerretail.component';

describe('FooterretailComponent', () => {
  let component: FooterretailComponent;
  let fixture: ComponentFixture<FooterretailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterretailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterretailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
