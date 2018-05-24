import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class wishlistsService {

    private apiRoot : string = "https://wishlisht.azurewebsites.net/api";

    constructor(public http: HttpClient) {}

    public getWishlistById( id: number) {
      return this.http.get(this.apiRoot + "/WishUsers/" + id)
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
    }
  }