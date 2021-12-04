import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTreeBapComponent } from './json-tree-bap.component';

describe('JsonTreeBapComponent', () => {
  let component: JsonTreeBapComponent;
  let fixture: ComponentFixture<JsonTreeBapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonTreeBapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonTreeBapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
