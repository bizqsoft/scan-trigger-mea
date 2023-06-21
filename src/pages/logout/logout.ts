import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HttpService } from '../../app/services/http.service';
import { UtilityService } from '../../app/services/utility.service';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})

export class LogoutPage {
  @ViewChild(Nav) nav: Nav;
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(public events: Events, private toastCtrl: ToastController, public storage: Storage, public app: App, public utility: UtilityService, public navCtrl: NavController, private httpService: HttpService) {
    let toase = this.toastCtrl.create({
      message: 'ออกจากระบบสำเร็จ...',
      duration: 3000,
      position: 'bottom'
    }).present();

    let nav = this.app.getRootNav();
    this.httpService.logout();
    nav.push(LoginPage);
    this.events.publish('user:created', "", false, false);

  }//constructor


}
