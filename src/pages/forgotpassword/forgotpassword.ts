import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, ViewController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HttpService } from '../../app/services/http.service';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotPasswordPage {
  email: string;
  phone:String="";
  items: any;
  @ViewChild(Nav) nav: Nav;
  constructor(public params: NavParams, public viewCtrl: ViewController, private toastCtrl: ToastController, public app: App, public navCtrl: NavController, private httpService: HttpService) {

  }

  accept() {
    console.log('phone',this.phone);
    if(this.phone!=null && this.phone!=undefined && this.phone!=""){
      this.httpService.fetchget('getJONS_forgot_password.php?mobile='+this.phone,response=>{
        if (response['success'] == true) {
          this.toastCtrl.create({ message: 'ส่งรหัสเรียบร้อยแล้วค่ะ...', duration: 3000, position: 'bottom' }).present();
          this.viewCtrl.dismiss();
        }else{
          this.toastCtrl.create({ message: 'ไม่พบเบอร์โทรศัพท์ในระบบค่ะ...', duration: 3000, position: 'bottom' }).present();
        }
      });
    }else{
      this.toastCtrl.create({ message: 'กรุณาใส่เบอร์โทรศัพท์ค่ะ...', duration: 3000, position: 'bottom' }).present();
    }


  }
  cancel() {
    //this.toastCtrl.create({message: 'ส่งรหัสไปที่อีเมล์ของคุณเรียบร้อยแล้วค่ะ...',duration: 3000,position: 'bottom'}).present();
    this.viewCtrl.dismiss();
  }

}
