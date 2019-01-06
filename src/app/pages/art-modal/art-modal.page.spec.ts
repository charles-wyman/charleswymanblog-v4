import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtModalPage } from './art-modal.page';

describe('ArtModalPage', () => {
  let component: ArtModalPage;
  let fixture: ComponentFixture<ArtModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
