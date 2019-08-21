import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbValuesComponent } from './fb-values.component';

describe('FbValuesComponent', () => {
  let component: FbValuesComponent;
  let fixture: ComponentFixture<FbValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
