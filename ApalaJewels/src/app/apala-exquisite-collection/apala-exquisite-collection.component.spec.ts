import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApalaExquisiteCollectionComponent } from './apala-exquisite-collection.component';

describe('ApalaExquisiteCollectionComponent', () => {
  let component: ApalaExquisiteCollectionComponent;
  let fixture: ComponentFixture<ApalaExquisiteCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApalaExquisiteCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApalaExquisiteCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
