import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbFieldsComponent } from './fb-fields.component';

describe('FbFieldsComponent', () => {
  let component: FbFieldsComponent;
  let fixture: ComponentFixture<FbFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
