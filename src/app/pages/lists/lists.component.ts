import { Component, OnInit } from '@angular/core';
import { wishlistsService } from '../../services/wishlists.service'; //hier in steken de methodes om een call te doen naar de server

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
