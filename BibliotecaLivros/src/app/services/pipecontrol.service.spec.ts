import { TestBed } from '@angular/core/testing';

import { PipecontrolService } from './pipecontrol.service';

describe('PipecontrolService', () => {
  let service: PipecontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipecontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
