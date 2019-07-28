import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CustomMatchers} from './matcher/matcher';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    jasmine.addMatchers(CustomMatchers);
  });
  it('Test demo', () => {
    expect(true).toBe(false);
    expect(true).toBe(false);
  });
});
