import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SocialUser, AuthService } from 'angular4-social-login';
import { catchError } from 'rxjs/operators';
import { wishUser } from '../../domain/wishUser';
import { wishusersService } from './wishusers.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    
@Injectable()
export class fbAuthService {

  private user : wishUser;

  private apiRoot : string = "https://wishlisht.azurewebsites.net/api";
  

  constructor(public http: HttpClient, public _wishUserService : wishusersService) {}

  public checkUserExists(id : number){
      this.user = this._wishUserService.getWishUserById(id);
      if(this.user != null){
          return true;
      }else{
          return false;
      }
  }
  public createUser(user: SocialUser) {
    //nog checken als de persoon bestaat
    if(this.checkUserExists(+user.id)){
        return this.http.post(this.apiRoot + "/token", user, httpOptions);
    }
  }
}