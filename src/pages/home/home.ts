import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome'
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public up: UserProvider) {

  }

  openMenu(){
    this.menuCtrl.open();
  }

  signIn(){
    if(this.up.login()){
      this.navCtrl.push(WelcomePage);
    }
    else{
    }
  }

}
