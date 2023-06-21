import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../app/services/http.service';
import { UtilityService } from '../../app/services/utility.service';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { environment } from '../../environments/environment';
import { DateFormatPipe } from '../../app/services/utility.service';
import { uploadPage } from '../upload/upload';
import { TabsUserPage } from '../tabs/tabs-user';
import { stopPage } from '../stop/stop';
import { startPage } from '../start/start';
import { resultPage } from '../result/result';
@Component({
  selector: 'page-home',

  templateUrl: 'home.html'
})

export class HomePage {
  items: any;
  picture:string;
  displayname:string;
  monney:string;
  member_use_monney:any;
  process:string;
  finished:string;
  money:any;
  inprocess:any;
  processes=[];
  member:string;
  general:string;
  count:any;
  member_monney:any;
  total_monney:any=0;
  timeStart:string;
  timeEnd:string;
  timeDisPlayStart:string;
  timeDisPlayStop:string;
  processestypes:any;
  processesservices:any;
  remainTimes:string;
  countTimes:string;
  d:any;
  haslogin: any;
  setId:any;
  userId:String;
  ckData:boolean=false;
  seg_mode:string='1';
  position:string;
  code:string;
  public sysPath:String = environment.sysPath;
  public sysName:String = environment.sysName;
  public sysVersion:String = environment.sysVersion;
  menus=[];

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


  segmentChangeMode(ev:any){
    let nav = this.app.getRootNav();
      nav.push(TabsUserPage,{home:true});
  }


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

  initail(){
    let self = this;
    return new Promise<any>(function(resolve,rejected){
      try{
        self.monney="0.00";
        self.finished="0";
        self.process="0";
        self.member_monney="0";
        self.timeStart =  self._dateFormatPipe.date_format(new Date(),"yyyy-MM-01");
        self.timeEnd = self._dateFormatPipe.date_today(new Date());
        self.timeDisPlayStart = self._dateFormatPipe.date_format(self.timeStart,"dd");
        self.timeDisPlayStop = self._dateFormatPipe.date_format(self.timeEnd,"dd,MMM yyyy");
        self.d = self._dateFormatPipe.date_format(Date(),"dd MMM yyyy");
        self.httpService.getStrorageInfo("userId").then(userId=>{
          self.userId = userId;
          self.getDataStart();
          self.getMenu();
          return resolve(true)
        });
      }catch(e){
        return rejected(e)

      }
    })
    //this.setId = this.intervalGetData();
  }

  getMenu(){
    this.httpService.fetchgetm('db-select-menu-group.php?to_id='+this.userId+'&type=2',data=>{
      this.menus = data;
    });
  }

  openMenu(url:any){
    let alias;
    let nav = this.app.getRootNav();
    if(url =="stopPage"){
      alias = stopPage;
    }else if(url == "startPage"){
      alias = startPage;
    }
    else if(url =="uploadPage"){
      alias = uploadPage;
    }
    else if(url =="resultPage"){
      alias = resultPage;
    }
    

    nav.push(alias);
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    //this.loadData();
    setTimeout(() => {
      console.log('Async operation has ended');
      try {
        
      } catch (e) { }
      refresher.complete();
    }, 2000);
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      //alert(this.items.length);
      try {
        
      } catch (e) {
        if (e instanceof TypeError) { }
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
