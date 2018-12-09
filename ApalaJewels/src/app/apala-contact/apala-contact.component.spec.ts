import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApalaContactComponent } from './apala-contact.component';

describe('ApalaContactComponent', () => {
  let component: ApalaContactComponent;
  let fixture: ComponentFixture<ApalaContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApalaContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApalaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
