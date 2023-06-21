import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HttpService } from '../../app/services/http.service';
import { UtilityService } from '../../app/services/utility.service';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgotpassword/forgotpassword';
import { ModalController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { environment } from '../../environments/environment'


//add page
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { TabsUserPage } from '../tabs/tabs-user';
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {
    public displayname : string;
    public email:any;
    public password:any;
    public username:any;
    public filling:any;
    public base64Image : any;
    public picture : any;
    public mobile : string;
    public saller : any;
    public submitted : any;
    public permission : any;
    public regMode:any;
    public name:any;
    public conditionContent:string;
    public loginTab:string;regName:string;regPhone:string;regAddress:string;regEmail:string;regPassword:string;
    public id:string;code:string;position:string;
    public sysPath:String = environment.sysPath;
    public sysName:String = environment.sysName;
    public sysVersion:String = environment.sysVersion;
    public status:String;
    revScanValue: string;

    @ViewChild(Nav) nav: Nav;
    HAS_LOGGED_IN = 'hasLoggedIn';
    modal: any;
    constructor(public events:Events,public modalCtrl: ModalController, private toastCtrl: ToastController, public storage: Storage, public app: App, public utility: UtilityService, public navCtrl: NavController, private httpService: HttpService) {
        this.loginTab="login";
        
       // this.checkLogin();
        this.httpService.getStrorageInfo("userId").then(data=>{
            if(data!=null){

                this.httpService.fetchgetm('db-select-operator.php?id='+data,data=>{
                    if(data.length!=0){
                        this.displayname = data.tb98f_operator_name;
                        this.code = data.tb98f_operator_code;
                        this.position = data.position;
                        this.id = data.tb98f_id;
                        this.storage.set('uid', this.id);
                        this.events.publish('user:created', data.tb98f_operator_name,data.tb98f_operator_picture,true,data.tb98f_id,data.tb98f_operator_cod);
                        
                        setTimeout(() => {
                          let nav = this.app.getRootNav().setRoot(HomePage);
                          nav.push(HomePage);
                         }, 3000);
                          this.toastCtrl.create({message: 'กำลังนำคุณเข้าสู่ระบบ...',duration: 3000,position: 'bottom'}).present();
                    }
                   
                });

            }else{

            }
        });
    }//constructor
    login(){
        let value = "username=" + this.username + "&password=" + this.password;
        let token
        this.httpService.getHttpUrlEncode('auth/signin',value).then(res=>{
            console.log('login res',res)
            console.log('get login status',JSON.parse(res.result._body).accessToken)
            if (JSON.parse(res.result._body).accessToken) {
                token = JSON.parse(res.result._body).accessToken
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // this.httpService.setLocalStorageOne('token', token).then(res => {

                // })
                this.httpService.setSessionToken(token)
               
                setTimeout(() => {
                    let nav = this.app.getRootNav();
                    nav.push(HomePage);

                 }, 3000);
            }
        })


    }

}
