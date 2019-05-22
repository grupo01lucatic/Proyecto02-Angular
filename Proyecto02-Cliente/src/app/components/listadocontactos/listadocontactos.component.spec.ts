import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocontactosComponent } from './listadocontactos.component';

describe('ListadocontactosComponent', () => {
  let component: ListadocontactosComponent;
  let fixture: ComponentFixture<ListadocontactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadocontactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocontactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
