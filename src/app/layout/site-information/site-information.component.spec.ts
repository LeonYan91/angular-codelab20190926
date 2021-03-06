import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {PageHeaderModule} from './../../shared';
import {SiteInformationComponent} from './site-information.component';

describe('SiteInformationComponent', () => {
  let component: SiteInformationComponent;
  let fixture: ComponentFixture<SiteInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PageHeaderModule,
      ],
      declarations: [SiteInformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
