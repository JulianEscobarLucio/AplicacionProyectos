import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarAyudaComponent } from './gestionar-ayuda.component';

describe('GestionarAyudaComponent', () => {
  let component: GestionarAyudaComponent;
  let fixture: ComponentFixture<GestionarAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionarAyudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
