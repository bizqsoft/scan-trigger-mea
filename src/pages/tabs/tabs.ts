import { Component,ViewChild ,} from '@angular/core';
import {Tabs} from "ionic-angular";
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {HttpService} from '../../app/services/http.service';

import { NavController ,NavParams} from 'ionic-angular';
import { App } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  
  tab1Root = HomePage;
  //tab1Root = HomeUserPage;
  post:boolean=false;shop:boolean=false;login:boolean=false;home:boolean=true;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public params:NavParams,public app:App,public httpService:HttpService) {
    this.post = params.get('post');
    this.shop = params.get('shop');
    this.login = params.get('login');
    this.home = params.get('home');

    if(this.shop==undefined){
        this.home = true;
    }

    console.log('tab',this.post,this.shop,this.login,this.home);
  }

  
  ionViewDidEnter() {
    this.httpService.hasLoggedIn().then(data=>{
        if(data!=true){
         
            this.tabRef.select(0);

        }else{
            console.log('post',this.post);
            if(this.post==true){
                this.tabRef.select(2);
                this.post=false;
            }else if(this.shop ==true){
                this.tabRef.select(3);
                this.shop=false;
            }else if(this.login ==true){
                this.tabRef.select(0);
                this.login =false;
            }
            else if(this.home ==true){
                this.tabRef.select(0);
                this.home =false;
            }
            else{
                this.tabRef.select(3);
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