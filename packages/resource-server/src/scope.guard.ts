import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

export const matchScopes = (
  definedScopes: string[],
  incomingScopes: string[],
) => {
  return !definedScopes.some(
    (definedScope) => !incomingScopes.includes(definedScope),
  );
};

@Injectable()
export class ScopeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const scope = this.reflector.get<string[]>('scope', context.getHandler());
    if (!scope) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchScopes(scope, user.claims.scp);
  }
}
