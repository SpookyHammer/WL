import { Component } from '@angular/core';
import { httpInjectionService } from './services/httpInjection.service';
import { Observable } from 'rxjs/Observable';
import { wishlistsService } from './services/wishlists.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WishLisht';

  public wishlist;

  //DE SERVICE IN DE CONSTRUCTOR ZORGT VOOR EEN STATICINJECTORERROR!!! NAVRAGEN AAN FRANK!!!
  constructor(/*private _wishlistsService: wishlistsService*/) { }
  

  
  /*getWishListById(id:number){
    this._wishlistsService.getWishlistById(id);
  }*/
}
