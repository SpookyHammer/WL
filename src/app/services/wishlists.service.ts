import { HttpClient } from '@angular/common/http';

export class wishlistsService {

    private apiRoot : string = "https://wishlisht.azurewebsites.net/api";

    constructor(public http: HttpClient) {}

    public getWishlistById( id: number) {
      this.http.get(this.apiRoot + "/WishUsers/" + id)
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
    }
  }