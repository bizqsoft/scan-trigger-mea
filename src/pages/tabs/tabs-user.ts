import { Component,ViewChild ,} from '@angular/core';
import {Tabs} from "ionic-angular";
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {HttpService} from '../../app/services/http.service';
import { NavController ,NavParams} from 'ionic-angular';
import { App } from 'ionic-angular';

@Component({
  templateUrl: 'tabs-user.html'
})

export class TabsUserPage {
  
  //tab1Root = HomePage;

  history:boolean=false;shop:boolean=false;login:boolean=false;home:boolean=false;status:boolean=false;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public params:NavParams,public app:App,public httpService:HttpService) {
    this.history = params.get('history');
    this.status = params.get('status');
    this.login = params.get('login');
    this.home = params.get('home');

    console.log('tab',this.status,this.history,this.login,this.home);
  }

  ionViewDidEnter() {
    this.httpService.hasLoggedIn().then(data=>{
        if(data!=true){
         
            this.tabRef.select(0);

        }else{
            console.log('post',this.history);
            if(this.history==true){
                this.tabRef.select(1);
                this.history=false;
            }else if(this.status ==true){
                this.tabRef.select(2);
                this.status=false;
            }else if(this.login ==true){
                this.tabRef.select(0);
                this.login =false;
            }
            else if(this.home ==true){
                this.tabRef.select(0);
                this.home =false;
            }
            else{
                this.tabRef.select(0);
            }
            
        }
        
    });
  
   }

  ionSelected(){
    let navCtr = this.app.getRootNav();
    this.httpService.hasLoggedIn().then(data=>{
        if(data!=true){
            navCtr.push(LoginPage);
            this.tabRef.select(0);
        }else{
           
        }
        
    });
}

}