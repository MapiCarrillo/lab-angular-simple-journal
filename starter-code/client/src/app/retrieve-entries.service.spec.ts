/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetrieveEntriesService } from './retrieve-entries.service';

describe('Service: RetrieveEntries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveEntriesService]
    });
  });

  it('should ...', inject([RetrieveEntriesService], (service: RetrieveEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
