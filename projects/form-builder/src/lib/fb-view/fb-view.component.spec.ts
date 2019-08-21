import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbViewComponent } from './fb-view.component';

describe('FbViewComponent', () => {
  let component: FbViewComponent;
  let fixture: ComponentFixture<FbViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
