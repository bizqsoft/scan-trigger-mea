import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//add page

import { LogoutPage } from '../pages/logout/logout';
import { LoginPage } from '../pages/login/login';
import { HomePage  } from '../pages/home/home';
//add class
import { HttpService } from './services/http.service';
import { DateFormatPipe } from './services/utility.service';
import { UtilityService } from './services/utility.service';

import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { environment } from '../environments/environment';
@Component({
  templateUrl: 'app.html',
  providers: [HttpService, UtilityService,DateFormatPipe]
})

export class MyApp {
  //rootPage: any = TabsPage;
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;
  saller: Boolean;
  permission: any;
  mobile: any;
  email: string;
  displayname: string;
  filling: string;
  haslogin: any;
  picture: string;
  id: string;
  countTimes:string;
  remainTimes:string;
  modeUse:String;
  setId:any;
  userId:String;
  admin:String;
  position:String;
  code:String;
  public sysPath:String = environment.sysPath;
  public sysName:String = environment.sysName;
  public sysVersion:String = environment.sysVersion;
  constructor(private httpService: HttpService,public events: Events, storage: Storage,  platform: Platform, statusBar: StatusBar) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      
      this.httpService.getStrorageInfo("userId").then(userId=>{
        if(userId !=null && userId!=undefined){
          this.userId = userId;
          httpService.hasLoggedIn().then(data => {
            this.haslogin = data;
            if(this.haslogin){
              this.setId = this.intervalGetData();
            }
            console.log('app userId',this.haslogin,userId);
          });//login
        }else{
          this.pageLogin();
          console.log('app userId',this.haslogin,userId);
        }
  
      });//userId





    });//stucture

    events.subscribe('user:created', (displayname, picture, haslogin, userId,mode) => {
      this.picture=picture;
      this.displayname=displayname;
      this.haslogin=haslogin;
      this.userId = userId;
      this.modeUse = mode;
      console.log('Welcome to ibqs', displayname, picture,haslogin,userId,mode);
    });

  } //end constructor

  getDataStart(){

    this.httpService.fetchgetm('db-select-operator.php?id='+this.userId,data=>{
      console.log('home',data);
      if(data.length!=0){
          this.displayname = data.tb98f_operator_name;
          this.code = data.tb98f_operator_code;
          this.position = data.position;
          this.picture = data.tb98f_operator_picture;
          this.userId = data.tb98f_id;
          this.events.publish('user:created', data.tb98f_operator_name,data.tb98f_operator_picture,true,data.tb98f_id,data.tb98f_operator_code);
          
      }
     
  });

  }

  intervalGetData(){
    var counter = 2;
    return setInterval(() => {
      if(counter === 0){
        clearInterval(this.setId);
        }
        this.getDataStart();
        counter--
      //console.log('------this.setId------',this.setId,counter,'ccc');
     }, 3600);

  }

  // troggle menu
  pageHome() {this.nav.push(HomePage,{home:true});}
  pageLogin() {this.nav.push(LoginPage,{home:true});}
  pageLogout() {
  this.nav.push(LogoutPage,{home:true});
  clearInterval(this.setId);
}

}

