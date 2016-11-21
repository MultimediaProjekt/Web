/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MajaComponent } from './maja.component';

describe('MajaComponent', () => {
  let component: MajaComponent;
  let fixture: ComponentFixture<MajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
