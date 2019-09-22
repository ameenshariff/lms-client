import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('userName')
    

    console.log(!(user === null))
    return !(user===null);
  }

  isAdminLoggedIn(){
    let user1 = sessionStorage.getItem('uName');
    return !(user1===null);
  }

  logOut() {
    sessionStorage.removeItem('userName')
  }
}
