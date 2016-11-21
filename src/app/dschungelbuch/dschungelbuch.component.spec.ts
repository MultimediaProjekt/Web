/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DschungelbuchComponent } from './dschungelbuch.component';

describe('DschungelbuchComponent', () => {
  let component: DschungelbuchComponent;
  let fixture: ComponentFixture<DschungelbuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DschungelbuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DschungelbuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
