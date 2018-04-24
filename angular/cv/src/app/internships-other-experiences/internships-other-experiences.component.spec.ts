import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsOtherExperiencesComponent } from './internships-other-experiences.component';

describe('InternshipsOtherExperiencesComponent', () => {
  let component: InternshipsOtherExperiencesComponent;
  let fixture: ComponentFixture<InternshipsOtherExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipsOtherExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsOtherExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
