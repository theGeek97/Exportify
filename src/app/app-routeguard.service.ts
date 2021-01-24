import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppRouteGuard implements CanActivate {
    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        if (user) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { }});
        return false;
    }
}