import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHouseOfApalaComponent } from './the-house-of-apala.component';

describe('TheHouseOfApalaComponent', () => {
  let component: TheHouseOfApalaComponent;
  let fixture: ComponentFixture<TheHouseOfApalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheHouseOfApalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheHouseOfApalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
