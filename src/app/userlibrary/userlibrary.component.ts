import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LmsServiceService } from '../lms-service.service';
import { DvdCd } from '../model/addDvd';
import { Magzine } from '../model/addMagzine';

@Component({
  selector: 'app-userlibrary',
  templateUrl: './userlibrary.component.html',
  styleUrls: ['./userlibrary.component.css']
})
export class UserlibraryComponent implements OnInit {
  selectedDay: string = '';
  selectedFilter: string = '';

  bookSearch: any[];
  // dvdSearch:DvdCd;
  // magzineSearch:Magzine;

  constructor(private router: Router, private service: LmsServiceService) {
    // this.bookSearch=new Book();
    // this.dvdSearch=new DvdCd();
    // this.magzineSearch=new Magzine();
  }

  ngOnInit() {
  }

  logOut() {
    console.log("Logout")
    sessionStorage.removeItem("userName");
    this.router.navigate(['/userpage'])
  }

  onChange(event: any) {
    this.selectedDay = event.target.value;

    console.log(this.selectedDay)
  }

  onSelect(event: any) {
    this.selectedFilter = event.target.value;
    // console.log(this.selectedFilter)




  }
  Searchlibrary(search: string) {
    if (this.selectedDay == "Books" && this.selectedFilter == "Title") {
      console.log("book by title")
      this.service.findBooksByTitle(search).subscribe(data => {
        this.bookSearch=data;
        console.log(data)
      });
    }
    else if (this.selectedDay == "Books" && this.selectedFilter == "Author") {
      console.log("book by author")
      this.service.findBooksByAuthor(search).subscribe(data => {
        this.bookSearch=data;
        console.log(data)
      });
    }
    else if (this.selectedDay == "DVD" && this.selectedFilter == "Title") {
      this.service.findDvdsByTitle(search).subscribe(data => {
        this.bookSearch=data;
        console.log(data)
      });
      // this.service.findDvdsByTitle(search);
    }
    else if (this.selectedDay == "DVD" && this.selectedFilter == "Author") {
      console.log("dvd by author")
      this.service.findDvdsByAuthor(search).subscribe(data => {
        this.bookSearch=data;
        console.log(data)
      });
      // this.service.findDvdsByAuthor(search);
    }
    else if (this.selectedDay == "Magzines" && this.selectedFilter == "Title") {
      console.log("magzine by title")
      this.service.findMagzinesByTitle(search).subscribe(data => {
        this.bookSearch=data;
        console.log(data)
      });
      // this.service.findMagzinesByTitle(search);
    }
    else if (this.selectedDay == "Magzines" && this.selectedFilter == "Author") {
      console.log("magzine by author")
      this.service.findMagzinesByAuthor(search).subscribe(data => {
        this.bookSearch=data;
        console.log(data)
      });
      // this.service.findMagzinesByAuthor(search);
    }
    console.log(search)
  }
}
