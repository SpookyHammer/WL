import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { wishItem } from '../../domain/wishItem';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    
@Injectable()
export class wishitemsService {

  private apiRoot : string = "https://wishlisht.azurewebsites.net/api";
  

  constructor(public http: HttpClient) {}

  public getWishitemById(id: number) : Observable<wishItem> {
    return this.http.get<wishItem>(this.apiRoot + "/WishItems/" + id)
  }
}