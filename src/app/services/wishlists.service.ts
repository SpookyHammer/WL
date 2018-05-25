import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { wishList } from '../../domain/wishList';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class wishlistsService {

  private httpClient : HttpClient;
  public list : Observable<wishList>;

  private apiRoot : string = "https://wishlisht.azurewebsites.net/api";

  constructor(public http: HttpClient) {}

  public getWishlistById(id: number) : Observable<wishList> {
    return this.http.get<wishList>(this.apiRoot + "/WishLists/" + id)
  }
}

interface getWishlistById {
  id: number;
  name: string;
}