import { Component, OnInit } from '@angular/core';
import { LmsServiceService } from '../lms-service.service';
import { Observable } from 'rxjs';
import { DvdCd } from '../model/addDvd';
import { Magzine } from '../model/addMagzine';
import { Router } from '@angular/router';
import { Issue } from '../model/issue';
import { Book } from '../model/addBook';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  book: Book;
  dvdCd: DvdCd;
  magzine: Magzine;
  b: Book;

  issueD: Issue;

  books: Book[];
  dvds: DvdCd[];
  magzines: Magzine[];
  bookToBeEdit: Book;
  dvdToBeEdit: DvdCd;
  magzineToBeEdit: Magzine;

  returnDetails: Issue;
  booksIssued: Book[];
  date: Date = new Date();

  returnDate;
  fine: any;
  dvdsIssued: DvdCd[];
  magzinesIssued: Magzine[];

  constructor(private service: LmsServiceService, private router: Router) {
    this.bookToBeEdit = new Book();
    this.dvdToBeEdit = new DvdCd();
    this.magzineToBeEdit = new Magzine();
    this.book = new Book();
    this.dvdCd = new DvdCd();
    this.magzine = new Magzine();
    this.issueD = new Issue();
    this.returnDetails = new Issue();
  }

  ngOnInit() {

    this.datefun();
    this.service.getAllBooks().subscribe(data => {
      this.books = data;
      // if(this.books.pop().isIssued==true){
      //   (<HTMLButtonElement> document.getElementById("iss")).disabled = true;
      // }
      // else

    })

    this.service.getAllDvd().subscribe(data => {
      this.dvds = data;
    })

    this.service.getAllMagzines().subscribe(data => {
      this.magzines = data;
    })
  }

  ngAfterViewInit() {
    //   console.log("onpageload   ");
    //   (<HTMLButtonElement> document.getElementById("iss")).disabled = false;

  }

  datefun() {
    let date = this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
    console.log(year + "-" + month + "-" + date)
    this.returnDate = year + "-" + month + "-" + date;
  }

  refresh() {
    this.ngOnInit();
    // document.getElementById("iss").hidden=false;
    // document.get
  }

  onSubmitBook() {
    this.service.addBook(this.book).subscribe();
    alert("Book Added")
    this.ngOnInit();
  }

  onSubmitDvd() {
    this.service.addDvd(this.dvdCd).subscribe();
    alert("DVD Added")
    this.ngOnInit();
  }

  onSubmitMag() {
    this.service.addMagzine(this.magzine).subscribe();
    alert("Magzine Added")
    this.ngOnInit();
  }

  editBook(book: Book) {
    this.bookToBeEdit = book;
    document.getElementById("editing").hidden = false;
    console.log(this.bookToBeEdit);
  }

  editDvdCd(dvdCd: DvdCd) {

    this.dvdToBeEdit = dvdCd;
    document.getElementById("editingDvdCd").hidden = false;
  }
  editMagzine(magzine: Magzine) {
    this.magzineToBeEdit = magzine;
    document.getElementById("editingMagzine").hidden = false;
  }

  deleteBook(id) {
    var delet = confirm("Are you sure?")
    if (delet)
      this.service.deleteBook(id).subscribe();

  }

  deleteDvdCd(id) {
    var delet = confirm("Are you sure?")
    if (delet)
      this.service.deleteDvdCd(id).subscribe();
  }

  deleteMagzine(id) {
    var delet = confirm("Are you sure?")
    if (delet)
      this.service.deleteMagzine(id).subscribe();
  }

  updateBook() {
    this.service.updateBook(this.bookToBeEdit).subscribe();
    alert("Update done")
  }

  updateDvd() {
    console.log(this.dvdToBeEdit)
    this.service.updateDvd(this.dvdToBeEdit).subscribe();
    alert("Update done")
  }

  updateMagzine() {
    console.log(this.magzineToBeEdit)
    this.service.updateMagzine(this.magzineToBeEdit).subscribe();
    alert("Update done")
  }

  hide() {
    document.getElementById("editing").hidden = true;
    document.getElementById("editingDvdCd").hidden = true;
    document.getElementById("editingMagzine").hidden = true;
  }

  logOut() {
    sessionStorage.removeItem("uName");
    this.router.navigate(['/adminpage'])
  }

  issue(item: any) {

    this.service.setIsbn(item.id);

    if (item.type == 'book') {
      this.service.setIssueType('book')
      // this.issueD.type = 'book';
      // console.log(this.issueD.type)
      this.router.navigate(['/issue'])
    }
    else if (item.type == 'dvd') {
      this.service.setIssueType('dvd')
      // console.log(this.issueD.type)
      this.router.navigate(['/issue'])
    }
    else if (item.type == 'mag') {
      this.service.setIssueType('mag')
      // console.log(this.issueD.type)
      this.router.navigate(['/issue'])
    }
  }

  getBooks() {
    this.service.getIssuedBooks(this.returnDetails.userId).subscribe(
      data => {
        this.booksIssued = data;
        if (this.booksIssued.length == 0) {
          alert("No Books issued by " + this.returnDetails.userId + " User Id or you have entered a wrong User Id")
        }
      });

    console.log(this.booksIssued)
  }


  getDvds() {
    this.service.getIssuedDvds(this.returnDetails.userId).subscribe(
      data => {
        this.dvdsIssued = data;
        if (this.dvdsIssued.length == 0) {
          alert("No DVD's issued by " + this.returnDetails.userId + " User Id or you have entered a wrong User Id")
        }
      });

    console.log(this.booksIssued)
  }

  getMagzines() {
    this.service.getIssuedMagzines(this.returnDetails.userId).subscribe(
      data => {
        this.magzinesIssued = data;
        if (this.magzinesIssued.length == 0) {
          alert("No Magzines issued by " + this.returnDetails.userId + " User Id or you have entered a wrong User Id")
        }
      });

    console.log(this.booksIssued)
  }

  bookReturn(book: Book) {
    let conf = confirm("Are you sure to return the book \"" + book.title + "\"")
    if (conf) {
      this.service.returnBook(this.returnDetails.userId, book.id, this.returnDate).subscribe(
        data => {
          this.fine = data;

          if (this.fine > 0) {
            alert("Book with title \"" + book.title + "\" is Returned. But it seems you have return due and the fine you should pay is Rs." + this.fine)
          }
          else
            alert("Book with title " + book.title + " is Returned")
        }



      );
    }
  }

  dvdReturn(dvd: DvdCd) {
    let conf = confirm("Are you sure to return the Dvd \"" + dvd.title + "\"")
    if (conf) {
      this.service.returnDvd(this.returnDetails.userId, dvd.id, this.returnDate).subscribe(
        data => {
          this.fine = data;

          if (this.fine > 0) {
            alert("Dvd with title \"" + dvd.title + "\" is Returned. But it seems you have return due and the fine you should pay is Rs." + this.fine)
          }
          else
            alert("Book with title " + dvd.title + " is Returned")
        }



      );
    }
  }

  magReturn(mag: Magzine) {
    let conf = confirm("Are you sure to return the Magzine \"" + mag.title + "\"")
    if (conf) {
      this.service.returnMagzine(this.returnDetails.userId, mag.id, this.returnDate).subscribe(
        data => {
          this.fine = data;

          if (this.fine > 0) {
            alert("Magzine with title \"" + mag.title + "\" is Returned. But it seems you have return due and the fine you should pay is Rs." + this.fine)
          }
          else
            alert("Magzine with title " + mag.title + " is Returned")
        }



      );
    }
  }

}