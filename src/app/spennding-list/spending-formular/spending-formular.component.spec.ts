import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingFormularComponent } from './spending-formular.component';

describe('SpendingFormularComponent', () => {
  let component: SpendingFormularComponent;
  let fixture: ComponentFixture<SpendingFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendingFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
