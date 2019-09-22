import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private router:Router,private authService:AuthserviceService) {
  }

  canActivate() {
    if (this.authService.isUserLoggedIn()) {
      return true;
      // this.router.navigate(['/userlibrary'])
    }
      // alert("Bad access")
      this.router.navigate(['/library'])
      return false;
  //   }
  }

}
