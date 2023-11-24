import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydocsComponent } from './mydocs.component';

describe('MydocsComponent', () => {
  let component: MydocsComponent;
  let fixture: ComponentFixture<MydocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydocsComponent]
    });
    fixture = TestBed.createComponent(MydocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
