import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(local_data: string): void {
    localStorage.setItem('local_data', local_data);
  }

  getlocal_data(): string | null {
    return localStorage.getItem('local_data');
  }

  isLoggedIn() {
    return this.getlocal_data() !== null;
  }

  logout() {
    localStorage.removeItem('local_data');
    this.router.navigate(['/login']);
  }
}