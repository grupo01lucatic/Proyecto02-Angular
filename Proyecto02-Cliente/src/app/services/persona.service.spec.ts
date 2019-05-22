import { TestBed } from '@angular/core/testing';

import { PersonaService } from './persona.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonaService = TestBed.get(PersonaService);
    expect(service).toBeTruthy();
  });
});
