import { Component, OnInit } from '@angular/core';
import { wishlistsService } from '../../services/wishlists.service'; 
//hier in steken de methodes om een call te doen naar de server
import { wishList } from '../../../domain/wishList';
import { Observable } from 'rxjs/observable';
import { wishItem } from '../../../domain/WishItem';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  result : wishList;
  items : wishItem[];

  constructor(private _wishlistsService: wishlistsService) { 
    _wishlistsService.getWishlistById(1).subscribe(data =>{
      this.result = data;
    });
  }


  ngOnInit() {
  }

}
