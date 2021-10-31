import { matchScopes, ScopeGuard } from './scope.guard';
import { Reflector } from '@nestjs/core';

describe('ScopeGuard', () => {
  it('should be defined', () => {
    expect(new ScopeGuard(new Reflector())).toBeDefined();
  });

  it('should return false if the incoming contains parts of defined', () => {
    expect(matchScopes(['scope1', 'scope2'], ['scope1'])).toBeFalsy();
  });

  it('should return false if the incoming does not contains defined', () => {
    expect(matchScopes(['scope1', 'scope2'], ['scope4'])).toBeFalsy();
  });

  it('should return true if the incoming contains all defined', () => {
    expect(
      matchScopes(['scope1', 'scope2'], ['scope1', 'scope2']),
    ).toBeTruthy();
  });

  it('should return true if the defined contains parts incoming', () => {
    expect(matchScopes(['scope1'], ['scope1', 'scope2'])).toBeTruthy();
  });
});
