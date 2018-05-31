import { Component, Output } from '@angular/core';
import { httpInjectionService } from './services/httpInjection.service';
import { Observable } from 'rxjs/Observable';
import { wishlistsService } from './services/wishlists.service';
import { AuthService, SocialUser, FacebookLoginProvider } from 'angular4-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'WishLisht';
  public wishlist;
   
  public user: SocialUser;
  public isLoggedIn: boolean = false;

  constructor(public authService : AuthService) { }
  
  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = (user != null);
      console.log("app.component [Is logged in] : " + this.isLoggedIn);
    });
  }
  

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut($event: any): void {
    this.authService.signOut();
  }
}
