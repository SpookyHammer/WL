import { Component, OnInit } from '@angular/core';
import { wishlistsService } from '../../services/wishlists.service'; 
import { wishList } from '../../../domain/wishList';
import { wishItem } from '../../../domain/WishItem';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  resultList : wishList[] = new Array<wishList>();
  items : wishItem[];

  constructor(private _wishlistsService: wishlistsService) { 
    _wishlistsService.getWishlistById(1).subscribe(data =>{
      this.resultList.push(data);
    });
  }


  ngOnInit() {
  }

}
