import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocialUser, AuthService } from 'angular4-social-login';
import { fbAuthService } from '../../services/fbAuth.service';
import { wishUser } from '../../../domain/wishUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private fb : fbAuthService) { }

  user: SocialUser;
  createdUser: SocialUser;
  isLoggedIn: boolean = false;
  picUrl: string;
  wuser: wishUser;

  ngOnInit() {    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = (user != null);
    }),
    this.fb.createUser(this.user).subscribe(
      result => console.log("result : " + result),
      error => console.log("error : " + error)
    ),
    console.log("header [user] : " + this.user),
    console.log("header [fb] : " + this.fb)
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
