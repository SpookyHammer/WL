import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInjectionService } from './services/httpInjection.service';


import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { FacebookLoginProvider } from "angular4-social-login";


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MasterComponent } from './pages/master/master.component';
import { LoginComponent } from './pages/login/login.component';
import { ListsComponent } from './pages/lists/lists.component';
import { FriendsComponent } from './pages/friends/friends.component';



let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("180033679447933")
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    HeaderComponent,
    ListsComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
