import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JingcaidaoshiComponent } from './jingcaidaoshi.component';

describe('JingcaidaoshiComponent', () => {
  let component: JingcaidaoshiComponent;
  let fixture: ComponentFixture<JingcaidaoshiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JingcaidaoshiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JingcaidaoshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
