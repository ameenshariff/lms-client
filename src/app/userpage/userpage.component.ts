import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LmsServiceService } from '../lms-service.service';
import { Login } from '../login';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  userName;
  password;
  data;
  log:Login

  constructor(private router:Router,private service:LmsServiceService) {
    this.log=new Login();
   }

  onSubmit(){
    // console.log("Password    "+this.password)
    // console.log("uname   "+this.userName)
    this.service.validateUserLogin(this.log.userName,this.log.password).subscribe(
      (data:boolean) => {
        // console.log(data);
        if(data){
          sessionStorage.setItem("userName",this.log.userName);
          this.router.navigate(['/userlibrary'])
        }
        else
        alert("Not a valid user")
      },
      error => console.log(error));
  }

  registrationPage(){
    this.router.navigate(['/userregistration'])
  }




  ngOnInit() {
  }

}



