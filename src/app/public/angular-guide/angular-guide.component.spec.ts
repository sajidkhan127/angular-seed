import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGuideComponent } from './angular-guide.component';

describe('AngularGuideComponent', () => {
  let component: AngularGuideComponent;
  let fixture: ComponentFixture<AngularGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularGuideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-seed'`, () => {
    const fixture = TestBed.createComponent(AngularGuideComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-seed');
  });
});
