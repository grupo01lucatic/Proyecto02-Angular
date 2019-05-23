import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaprovinciasComponent } from './altaprovincias.component';

describe('AltaprovinciasComponent', () => {
  let component: AltaprovinciasComponent;
  let fixture: ComponentFixture<AltaprovinciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaprovinciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaprovinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
