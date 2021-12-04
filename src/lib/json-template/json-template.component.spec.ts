import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTemplateComponent } from './json-template.component';

describe('JsonTemplateComponent', () => {
  let component: JsonTemplateComponent;
  let fixture: ComponentFixture<JsonTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
