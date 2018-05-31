import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { wishUser } from '../../domain/wishUser';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
@Injectable()
export class wishusersService {

  public user : wishUser;

  private apiRoot : string = "https://wishlisht.azurewebsites.net/api";

  constructor(public http: HttpClient) {}

  public getWishUserById(id: number) : wishUser {
    this.http.get<wishUser>(this.apiRoot + "/WishUsers/" + id).mapTo(this.user);
    return this.user;
  }
}