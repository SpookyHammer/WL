import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocialUser, AuthService } from 'angular4-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: SocialUser;
  isLoggedIn: boolean = false;
  picUrl: string;

  ngOnInit() {    
    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.isLoggedIn = (user != null);
  });
  }

  @Output() SendLogOut = new EventEmitter<SocialUser>();
  @Output() SendIsLoggedIn = new EventEmitter<boolean>();
  
  LogOut(){
    this.signOut();
    /*console.log(this.user);
    this.user = null
    this.SendLogOut.emit(this.user)
    this.SendIsLoggedIn.emit(false);
    console.log(this.user);*/
  }
  signOut(): void {
    this.authService.signOut();
  }
}
