import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LmsServiceService } from '../lms-service.service';
import { AdminLogin } from '../model/adminLogin';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  log: AdminLogin
  constructor(private router: Router, private service: LmsServiceService) {
    this.log = new AdminLogin();
  }

  onSubmit() {
    this.service.validateAdminLogin(this.log.uName, this.log.password).subscribe(data => {
      if (data){
        sessionStorage.setItem("uName",this.log.uName);
        this.router.navigate(['/library'])
      }
        
      else
        alert("Not a valid Admin")
    })
  }

  ngOnInit() {
  }

}
