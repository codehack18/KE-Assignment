import { Inject, Injectable } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // let isAuthenticated = this.auth.getlocal_data();
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    } 
      return this.auth.isLoggedIn();
    }

  }
