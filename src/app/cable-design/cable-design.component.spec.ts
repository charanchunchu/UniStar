import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableDesignComponent } from './cable-design.component';

describe('CableDesignComponent', () => {
  let component: CableDesignComponent;
  let fixture: ComponentFixture<CableDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CableDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CableDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
