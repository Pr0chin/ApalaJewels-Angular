import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApalaHomeComponent } from './apala-home.component';

describe('ApalaHomeComponent', () => {
  let component: ApalaHomeComponent;
  let fixture: ComponentFixture<ApalaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApalaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApalaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
