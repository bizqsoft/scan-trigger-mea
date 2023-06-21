
  import { Component, ViewChild } from '@angular/core';
  import { NavController } from 'ionic-angular';
  import { MenuController } from 'ionic-angular';
  import { App } from 'ionic-angular';
  import { Storage } from '@ionic/storage';
  import { HttpService } from '../../app/services/http.service';
  import { UtilityService } from '../../app/services/utility.service';
  import { ToastController } from 'ionic-angular';
  import { Events } from 'ionic-angular';
  import { DateFormatPipe } from '../../app/services/utility.service';
  import { scanPage } from '../scan/scan';
  import moment from 'moment';
import { environment } from '../../environments/environment';
  @Component({
    selector: 'page-start',
    templateUrl: 'start.html'
  })
  
  export class startPage {
    time_selected:any;time_roud:any;
    date_selected:any;
    userId:any;
    maxyear:any;minyear:any;
    constructor(
      public events: Events,
      public storage: Storage,
      private toastCtrl: ToastController,
      public utility: UtilityService,
      public app: App,
      public navCtrl: NavController,
      private httpService: HttpService,
      private _dateFormatPipe:DateFormatPipe,
      public menuCtrl: MenuController) {
      this.initail();
  
  
    }//end constructor
  
    initail(){
      let date = moment().format();
      this.time_selected = moment().format("HH:mm:ss");
      this.date_selected = date.split('T')[0];
      this.maxyear = new Date().getFullYear()+1;
      this.minyear = new Date().getFullYear()-5;
      this.httpService.getStrorageInfo("userId").then(userId=>{
        this.userId = userId;
      });
    }
  
    scanPage(){
      let nav = this.app.getRootNav();
      let param = {
        userId:this.userId,
        date_selected:this.date_selected,
        time_selected:this.time_selected,
        location:false,
        process:"plan-pt",
        mode:"plan",
        action:"testing/start",
        type:"PT",
        useKanban:environment.TXT_PT_KANBAN
      };
      nav.push(scanPage,param);
    }

    scanCancelPage(){
      let nav = this.app.getRootNav();
      let param = {
        userId:this.userId,
        date_selected:this.date_selected,
        time_selected:this.time_selected,
        location:false,
        process:"plan-pt",
        mode:"plan",
        action:"testing/start",
        type:"PT",
        useKanban:environment.TXT_PT_KANBAN
      };
      nav.push(scanPage,param);
    }
  
  }
  