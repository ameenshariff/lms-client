import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Registration } from './registration';
import { DvdCd } from './model/addDvd';
import { Magzine } from './model/addMagzine';
import { Issue } from './model/issue';
import { Book } from './model/addBook';

@Injectable({
  providedIn: 'root'
})
export class LmsServiceService {
  getIssuedMagzines(userId: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getMagzinesByUserId/${userId}`);
  }
  getIssuedDvds(userId: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getDvdsByUserId/${userId}`);
  }
  findMagzinesByAuthor(search: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getMagzinesByAuthor/${search}`);
  }
  findMagzinesByTitle(search: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getMagzinesByTitle/${search}`);
  }
  findDvdsByAuthor(search: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getDvdsByAuthor/${search}`);
  }
  findDvdsByTitle(search: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getDvdsByTitle/${search}`);
  }
  findBooksByTitle(search: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getBooksByTitle/${search}`);
  }

  findBooksByAuthor(search: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getBooksByAuthor/${search}`);
  }






  returnBook(userId: string, id: number, returnDate: Date):Observable<any> {
    return this.http.get(`${this.baseUrl}/returnBook/${userId}/${id}/${returnDate}`);
  }

  returnDvd(userId: string, id: number, returnDate: Date):Observable<any> {
    return this.http.get(`${this.baseUrl}/returnDvd/${userId}/${id}/${returnDate}`);
  }

  returnMagzine(userId: string, id: number, returnDate: Date):Observable<any> {
    return this.http.get(`${this.baseUrl}/returnMagzine/${userId}/${id}/${returnDate}`);
  }
  
  getIssuedBooks(userId: string):Observable<any> {
    return this.http.get(`${this.baseUrl}/getBooksByUserId/${userId}`);
  }
  getType():string {
    return this.issue.type;
  }

  issue:Issue=new Issue();

  setIssueType(type: string) {
    this.issue.type=type;
  }


  updateMagzine(magzineToBeEdit: Magzine) {
    return this.http.put(`${this.baseUrl}/updateMagzine/`,magzineToBeEdit);
  }
  updateDvd(dvdToBeEdit: DvdCd) {
    return this.http.put(`${this.baseUrl}/updateDvdCd/`,dvdToBeEdit);
  }
  
  getIsbn(): number {
    return this.isbn;
  }
  isbn: number;
  setIsbn(isbn: number) {
    console.log("in service   "+isbn)
    this.isbn=isbn;
    
  }
  deleteDvdCd(id: any) {
    return this.http.delete(`${this.baseUrl}/deleteDvdCd/${id}`);
  }
  updateBook(bookToBeEdit: Book) {
    return this.http.put(`${this.baseUrl}/updateBook/`,bookToBeEdit);
  }
  deleteBook(isbn: any) {
    return this.http.delete(`${this.baseUrl}/deleteBook/${isbn}`);
  }

  deleteMagzine(id: any) {
    return this.http.delete(`${this.baseUrl}/deleteMagzine/${id}`);
  }
  
  

  private baseUrl = 'https://heroku-boot-lms.herokuapp.com';

  constructor(private http: HttpClient) { }


  validateUserLogin(userName: string,password:string): Observable<any> {
    // console.log(userName+"   "+password)
    return this.http.get(`${this.baseUrl}/validateUserLogin/${userName}/${password}`);
  }

  validateAdminLogin(userName: string,password:string): Observable<any> {
    console.log(userName+"   "+password)
    return this.http.get(`${this.baseUrl}/validateAdminLogin/${userName}/${password}`);
  }

  registerUser(registration:Registration) {
    console.log(registration)
    return this.http.post(`${this.baseUrl}`+`/registerUser/`,registration);
  }

  issueBook(issueDetails:Issue) {
    console.log(" in service  hdysg    "+issueDetails)
    return this.http.post(`${this.baseUrl}`+`/issueBook/`,issueDetails);
  }

  issueDvd(issueDetails:Issue) {
    console.log(" in service  hdysg    "+issueDetails)
    return this.http.post(`${this.baseUrl}`+`/issueDvdCd/`,issueDetails);
  }

  issueMagzine(issueDetails:Issue) {
    console.log(" in service  hdysg    "+issueDetails)
    return this.http.post(`${this.baseUrl}`+`/issueMagzine/`,issueDetails);
  }

  getAllBooks():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllBooks`);
    
  }

  getAllDvd():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllDvds`);
  }

  getAllMagzines():Observable<any>{
    return this.http.get(`${this.baseUrl}/getAllMagzines`);
  }

  addMagzine(magzine: Magzine) {
    console.log(magzine)
    return this.http.post(`${this.baseUrl}`+`/addMagzine/`,magzine);
  }
  addDvd(dvdCd:DvdCd) {
    console.log(dvdCd)
    return this.http.post(`${this.baseUrl}`+`/addDvd/`,dvdCd);
  }
  addBook(book: Book)  {
    console.log(book)
    return this.http.post(`${this.baseUrl}`+`/addBook/`,book);
  }


  

  
}
