import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../registration';
import { LmsServiceService } from '../lms-service.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  registration:Registration;

  constructor(private router: Router,private service:LmsServiceService) {
      this.registration=new Registration();
    }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.registration)
    this.service.registerUser(this.registration).subscribe();
    alert("Registeration Successfull")
    this.router.navigate(['/userpage'])
  }
}
