import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from '../model/issue';
import { LmsServiceService } from '../lms-service.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issueDetails:Issue;
  iId;
  date=new Date();
  issueDate=new Date().toISOString().split('T')[0]

  constructor( private router:Router,private service:LmsServiceService) {
    this.issueDetails=new Issue();
   }

  ngOnInit() {
    this.iId=this.service.getIsbn();
    console.log("toISOString  "+this.issueDate)
    this.issueDetails.dateOfIssue=this.issueDate;
  }

  logOut(){
    sessionStorage.removeItem("uName");
    this.router.navigate(['/adminpage'])
  }


  onIssue(){

    console.log(this.service.getType())
    this.issueDetails.issueId=this.iId
  
    if(this.service.getType()==='book'){
      this.service.issueBook(this.issueDetails).subscribe();
    }
    else if(this.service.getType()==='dvd'){
      this.service.issueDvd(this.issueDetails).subscribe();
    }

    else if(this.service.getType()==='mag'){
      this.service.issueMagzine(this.issueDetails).subscribe();
    }
    else{
      console.log("errrrr")
    }
    
    alert(this.service.getType().toUpperCase()+" Issued")
    
    // document.getElementById("msg").innerHTML="issued"
  }

}
