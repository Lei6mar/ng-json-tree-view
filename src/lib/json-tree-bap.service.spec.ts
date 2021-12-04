import { TestBed } from '@angular/core/testing';

import { JsonTreeBapService } from './json-tree-bap.service';

describe('JsonTreeBapService', () => {
  let service: JsonTreeBapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonTreeBapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
