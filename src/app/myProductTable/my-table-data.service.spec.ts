import { TestBed, inject } from '@angular/core/testing';

import { MyTableDataService } from './my-table-data.service';

describe('MyTableDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTableDataService]
    });
  });

  it('should be created', inject([MyTableDataService], (service: MyTableDataService) => {
    expect(service).toBeTruthy();
  }));
});
