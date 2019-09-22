import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {
  constructor(private authService:AuthserviceService,private router:Router) { }
  canActivate() {
    if (this.authService.isAdminLoggedIn()) {
      return true;
    }
      
    // alert("Bad access")
    this.router.navigate(['/userlibrary'])
      return false;
  //   }
  }

  
}
