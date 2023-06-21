import { Component, HostBinding, ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../app/services/http.service';
import { UtilityService } from '../../app/services/utility.service';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DateFormatPipe } from '../../app/services/utility.service';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import moment, { RFC_2822 } from 'moment';
import { environment } from '../../environments/environment'
import { ModalController, ViewController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})

export class scanPage {
  setId: any;
  tmpItem = [];
  itemSearch = [];
  scanItems = [];
  failedItems = [];
  failedTotal: any = 0;
  successItems = [];
  successTotal: any = 0;
  successQty: any = 0;
  failedQty: any = 0;
  time_selected: any;
  date_selected: any;
  time_round: any;
  date_in_po: any;
  userId: any;
  ckOutstock = [];
  partno: String = "N/A";
  qty: any = 0;
  scanQty: any = 0;
  unit: String = "N/A";
  kanbanId: String = "N/A";

  status: String = "N/A";
  guide: String = "N/A";

  scanId: String;
  revScanValue: any;
  process: String;
  location: boolean = false;
  storeLocation: String = "";
  storeName: String = "";
  mode: String;
  ckSearch: boolean = false;
  ckStatus: boolean = true;
  ckScan: boolean = true;
  ckSave: boolean = false;
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  ckeckFailedSave: boolean = false;
  packing: boolean = false;
  collected: boolean = false;
  sale: boolean = false;
  pt:boolean=false;
  pd:boolean=false;
  rm:boolean=false;
  warningBeforeSave: String = "";
  failedSave: String = environment.TXT_SUM_FAILED;
  successedSave: String = environment.TXT_SUM_SUCCESSED;
  ckLoad: boolean = false;
  action: String;
  type: String;
  useKanban: String;
  doNo: String;
  poNo: String;
  invNo: String;
  date_in_inv: String;
  round: String;
  scanItemsInpd = [];
  ckInPd: boolean = false;
  notInStock: String = "";
  ckInstock: boolean = true;
  ckBtnStatus: boolean = true;
  doubleScan: boolean = false;
  countScan: number = 0;
  ckPart: String;
  ckIdExist: String;
  trackId: String;
  previousId: String;
  scanMonitorShow: boolean = true;
  name1: String = "n/a";
  name2: String = "n/a";
  value1: String = "n/a";
  value2: String = "n/a";
  cusKb: String = "";
  cusLotsize:number=0;
  keySearch: string = "";
  remain: String = "";
  mcCk: String = "";
  mcId: String = "";
  lCk: String = "";
  lId: String = "";
  testItems=[]
  showHide: boolean = false;
  checkSave: boolean = false;
  presale:String;
  date_delivery_selected: any;
  arrCk = [];
  testItemSelected:any
  testItemNameSelected:string="";
  picture_profiles=[];
  loading:boolean=false;loadingCover:boolean=false;
  urls = [];
  isLoading:boolean=false;
  job_no="";
  sample_no="";
  tinyMCEConfiguration;
  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public events: Events,
    public storage: Storage,
    private keyboard: Keyboard,
    private toastCtrl: ToastController,
    public utility: UtilityService,
    public app: App,
    public params: NavParams,
    public navCtrl: NavController,
    private httpService: HttpService,
    private _dateFormatPipe: DateFormatPipe,
    public menuCtrl: MenuController) {
    this.scanMonitorShow = true;
    console.log('time',params.get('time_selected'));
    this.time_selected = params.get('time_selected');
    this.date_selected = params.get('date_selected');
    this.time_round = params.get('time_round');
    this.mode = params.get('mode');
    this.process = params.get('process');
    this.location = params.get('location');
    this.presale = params.get('presale');
    this.type = params.get('type');
    this.action = params.get('action');
    this.doNo = params.get('dono');
    this.invNo = params.get('invNo');
    this.poNo = params.get('poNo');
    this.pt = params.get('pt');
    this.rm = params.get('rm');
    this.pd = params.get('pd');
    this.useKanban = params.get('useKanban');
    this.date_in_po = params.get('date_in_po');
    this.date_in_inv = params.get('date_in_inv');
    this.round = params.get('round');
    this.doubleScan = params.get('doubleScan');
    this.date_delivery_selected = params.get('date_delivery_selected');
    this.packing = params.get('packing');
    this.collected = params.get('collected');
    this.sale = params.get('sale');

    this.initail();
    this.setTxtStatus(this.mode);



  }//end constructor
  openGallery(index:any){
    let start = 0;
    let photos = [];
    for(let i = 0;i<this.picture_profiles.length;i++){
      //photos.push({url:this.sysPath+"/uploads/profile/"+this.picture_profiles[i].tb14_picture_1,title:this.displayname});
    }
 
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: photos,
      closeIcon: "close",
      initialSlide: index
    });
    modal.present();
  }


  async onSelectFile(event) {
    let filelist=[]
    this.isLoading = true;
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        let i=0;
        
        filelist = event.target.files
        for await(let item of filelist){
          console.log('onSelectFile',item)
          await this.onUpload(item).then(res=>{
            console.log('path',res,this.testItemSelected)
            i++
          })
        }

        if(filesAmount==i){
          this.isLoading = false;
          console.log('file amount',filesAmount,i)
        }

       
       
    }
  }

  onUpload(img: File): Promise<any> {
		let self = this;
		return new Promise<any>((resolve, reject) => {
			try {
				let formData = new FormData();
				formData.append('file', img, img.name);
				this.httpService.fetchHttpPostUpload('upload', 'job/'+this.job_no+'/'+this.testItemNameSelected+'/'+this.sample_no, formData, (res) => {
					return resolve(res);
				});
			} catch (e) {
				return reject;
			}
		});
	}

  handleChange(event){
    console.log('event',event,this.testItemSelected)
    this.httpService.getStrorageInfo("token").then(token=>{
      this.httpService.getJsonHttpGet('test-catalog/'+this.testItemSelected,token).then(res=>{
        this.testItemNameSelected = res.result.data[0].name
        console.log('test item name ',res,res.result.data[0].name)
      })
    })
  }
  showHideSearch() {
    if (this.showHide == true) {
      this.showHide = false;
    } else {
      this.showHide = true;
    }

    console.log('showhide', this.showHide);

  }
  scan(ev: any) {

    try {
      let cusIdValue = this.revScanValue;
      let tagIdString = this.revScanValue.split(";");
      let id = tagIdString[0];
      let partno = tagIdString[1];
      let location = tagIdString[2];
      //let lotsize = tagIdString[3];
      let lotsize = 0;
      let kanban = tagIdString[4];
      let ckLocation = tagIdString[1];
      let ckExist = [];
      this.keySearch = partno;
      console.log("part-no", this.keySearch, partno);
      let self = this;
      //get lotsize
      //this.getLotsize(id, this.type).then(data => {
      lotsize = parseInt(tagIdString[3]);

      if (this.step1 == true) {
        if (id && id.trim() != '' && !isNaN(+id)) {
            this.checkExits(id).then(data => {
              if (data.length > 0) {
                this.ckStatus = false;
                this.status = environment.TXT_STATUS_EXIST;
              } else {
                  this.scanItems.push({
                    scanId: id,
                    partId: '',
                    partno: partno,
                    kanban: kanban,
                    lotsize: lotsize,
                    packing: this.packing,
                    collected: this.collected,
                    sale: this.sale,
                    pt:this.pt,
                    location: location,
                    trackId: this.trackId,
                    previousId: this.previousId,
                    date_selected: this.date_selected,
                    time_selected: this.time_selected,
                    status: true,
                    txtStatus: "",
                    items: []
                  });
                this.ckStatus = true;
                if (!isNaN(+id)) {
                  this.qty += lotsize;
                }
                this.kanbanId = kanban;
                this.scanQty = this.scanItems.length;
                this.partno = partno;
                this.status = environment.TXT_SUM_SUCCESSED;

                console.log('test item',this.scanItems)

                self.httpService.getStrorageInfo("token").then(token=>{
                  console.log('test item token',token)
                this.httpService.getJsonHttpGet('test-plan/test-time-plan/'+lotsize,token).then(res=>{
                  console.log('test item ',res.result.data)
                  this.job_no = res.result.data[0].job_no
                  this.sample_no = id
                  this.testItems =[]
                  for (let item of res.result.data){
                    if(item.sample_no==id){
                      this.testItems.push({id:item.testCatalogId,name:item.test_item})
                    }
                  }
                  console.log('test item',this.testItems,this.job_no)
                })
              })

              }
            }) //end check exist

        } else {
          this.ckStatus = false;
          this.status = environment.TXT_STATUS_FAILED_QR;
        }

      } //end step 1 ----------------------------------------------------------------------------end step 1

      else if (this.step2 == true) {
        if (ckLocation == "L") {
          this.ckStatus = true;
        } else {
          this.ckStatus = false;
          this.status = environment.TXT_STATUS_NOTFOUND_LOCATION;
        }

      } //end step 2 ----------------------------------------------------------------------------end step 2
      else if (this.step3 == true) {
        this.ckScan = false;
      } //end step 3 ----------------------------------------------------------------------------end step 3
      //});//get lotsize
      this.revScanValue = "";
    } catch (e) {
    }
  }


  setTxtStatus(mode: any) {
    this.setScanMode(mode).then(data => {
      console.log('data mode', data);
      this.status = data.status;
      this.guide = data.guide;
    })
  }

  setTxtGuild(process: any) {
    if (process == "pd-jig" || process == "pd-qg1") {
      this.guide = environment.TXT_OPERATOR_QR;
    } else if (process == "fg-cross" || process == "fg-sale" || process == "fg-outstock" || process == "pd-plan" || process == "fg-plan" || process == "pd-final" || process == "pd-qg") {
      this.guide = environment.TXT_FG_KANBAN;
    } else if (process == "pt-ship" || process == "pt-shop") {
      this.guide = environment.TXT_PT_KANBAN;
    } else if (process == "out-rm") {
      this.guide = environment.TXT_RM_KANBAN;
    } else {
      this.guide = environment.TXT_PD_KANBAN;
    }
  }

  setSaveStatus(status: any) {
    if (status == "OK") {
      return environment.TXT_STATUS_SUCCESS;
    } else if (status == "EXIST") {
      return environment.TXT_STATUS_EXIST;
    } else if (status == "FAILED") {
      return environment.TXT_STATUS_FAILED;
    } else if (status == "NOTINSHOP") {
      return environment.TXT_STATUS_NOSHOP;
    } else if (status == "NOPLAN") {
      return environment.TXT_NOT_PLAN;
    } else if (status == "NOINSTOCK") {
      return environment.TXT_STATUS_NOINSTOCK;
    } else if (status == "FAILED_SCRAP_OVER") {
      return environment.TXT_STATUS_FAILED_SCRAP_OVER;
    } else if (status == "NOTRACK") {
      return environment.TXT_NO_TRACKK;
    } else if (status == "TXT_STATUS_NOREPAIR") {
      return environment.TXT_STATUS_NOREPAIR;
    } else if (status == "NOSALE") {
      return environment.TXT_NO_SALE;
    } else if (status == "NOREPAIR") {
      return environment.TXT_STATUS_NOREPAIR;
    } else if (status == "NOINCUSTOMER") {
      return environment.TXT_KANBAN_NOINCUSTOMER;
    } else if (status == "NOTFOUND") {
      return environment.TXT_STATUS_NOTFOUND;
    } else if (status == "NOPROCESS") {
      return environment.TXT_STATUS_NOPROCESS;
    } else if (status == "NOOUTSTOCK") {
      return environment.TXT_STATUS_NOOUTSTOCK;
    } else if (status == "OK_SCRAP") {
      return environment.TXT_STATUS_OK_SCRAP;
    }else if(status == "KB_BLANK"){
      return environment.TXT_KANBAN_BLANK;
    }else if(status == "KB_IN_PROCESS"){
      return environment.TXT_KANBAN_ON_PROCESS;
    }else if(status == "KB_IN_STOCK"){
      return environment.TXT_KANBAN_INSTOCK;
    }else if(status == "KB_IN_SUPPLIER"){
      return environment.TXT_KANBAN_IN_SUPPLIER;
    }else if(status == "KB_PACKING"){
      return environment.TXT_KANBAN_PACKING;
    }else if(status == "KB_COLLECT"){
      return environment.TXT_KANBAN_COLLECT;
    }else if(status == "KB_SALE"){
      return environment.TXT_KANBAN_SALE;
    }
    else {
      return environment.TXT_STATUS_FAILED;
    }
  }

  setScanMode(mode: String) {
    let self = this;
    return new Promise<any>(function (resolve, reject) {
      try {
        let txtGuild;
        // console.log('location 3',self.location,self.mode,self.step2);
        if (self.location == true && self.step2 == true) {
          txtGuild = { guide: environment.TXT_LOCATION_KANBAN, status: environment.TXT_STATUS_START + ' [' + self.process + ']' }
          return resolve(txtGuild);
        } else {
          if (self.process == "pd-jig") {
            self.scanMonitorShow = false;
            self.name1 = "JIG"
            self.name2 = "Operator";
          } else if (self.process == "pd-qg1") {
            self.scanMonitorShow = false;
            self.name1 = "LINE"
            self.name2 = "Operator";
          }
          else {
            self.scanMonitorShow = true;
          }
          txtGuild = { guide: self.useKanban, status: environment.TXT_STATUS_START + ' [' + self.process + ']' }
          return resolve(txtGuild);
        }
      } catch (e) {
        return reject(e)
      }
    });
  }

  showPromptFailed(id: string, index: any) {
    const prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'การลบรายการนี้',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'ยืนยัน',
          handler: data => {

            this.deleteItemFailed(id, index);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptSucess(id: string, index: any) {
    const prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'การลบรายการนี้',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'ยืนยัน',
          handler: data => {

            this.deleteItemSuccess(id, index);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  showPrompt(id: string, index: any){
    const prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'การลบรายการนี้',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'ยืนยัน',
          handler: data => {

            this.deleteItem(id, index);
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  getDataScanSplit(str) {
    return new Promise<any>(function(resolve,reject){
      const array = str.split(";");
      return resolve(array);
    })
    
  }

  resetPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'การลบรายการทั้งหมดนี้',

      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {

            this.clear();
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  savePrompt() {
    const prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: 'การสงข้อมูลเข้าสูระบบ',

      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {

            this.save();
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  alertPrompt(msg: string) {
    const prompt = this.alertCtrl.create({
      title: 'แจ้งสถานะระบบ',
      message: msg,
      buttons: [
        {
          text: 'ปิด',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  getItems(ev: any) {
    this.ckSearch = true;
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.tmpItem = this.scanItems.filter((item) => {
        return (item.kanban.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.itemSearch = this.tmpItem;
    } else {
      this.itemSearch = [];
      this.ckSearch = false;
    }
    console.log('itemSearch', this.itemSearch.length, this.itemSearch);
  }

  onCancel($event) {
    this.itemSearch = [];
    this.ckSearch = false;
  }

  home() {
    this.step2 = false;
    let nav = this.app.getRootNav();
    nav.push(HomePage);
    this.ckScan = true;
  }

  back() {
    console.log('ckSave', this.ckSave);
    this.stepCheckBack().then(data => {
      if (data.step1 == true) {
        this.ckStatus = true;
        console.log('step 1')
        this.setScanMode(this.mode).then(data => {
          this.status = data.status;
          this.guide = data.guide
          this.ckScan = true;
          this.ckSave = false;
        });
      } else if (data.step2 == true) {
        this.ckStatus = true;
        console.log('step 2')
        if (this.location != true) {
          this.back();
        } else {
          this.setScanMode(this.mode).then(data => {
            this.status = data.status;
            this.guide = data.guide
            this.ckScan = true;
            this.ckSave = false;
          });
        }

        console.log('step 2')
      } else if (data.step3 == true) {
        this.ckStatus = true;
        this.setScanMode(this.mode).then(data => {
          this.status = environment.TXT_SUM_CHECK;
          this.warningBeforeSave = environment.TXT_SUM_WARNING;
          this.ckScan = false;
          this.ckSave = false;
        });
        console.log('step 3')
      }
    });
  }

  next() {
    console.log('ckSave', this.ckSave);
    this.stepCheckNext().then(data => {
      if (data.step1 == true) {
        this.ckStatus = true;
        console.log('step 1')
        this.setScanMode(this.mode).then(data => {
          this.status = data.status;
          this.guide = data.guide
          this.ckScan = true;
          this.ckSave = false;
        });
      } else if (data.step2 == true) {
        this.ckStatus = true;
        this.next();
        console.log('step 2')
      } else if (data.step3 == true) {
        this.ckStatus = true;
        let final = "0";
        this.setScanMode(this.mode).then(data => {
          this.status = environment.TXT_SUM_CHECK;
          this.warningBeforeSave = environment.TXT_SUM_WARNING;
          this.ckScan = false;
          this.ckSave = false;
        });

        console.log('step 3', this.checkSave)

        this.checkSaveStatus();

      }
    });

  }


  checkSaveStatus() {
    let self = this;
    this.arrCk = [];
      let status;
      for (let c = 0; c < self.scanItems.length; c++) {
        for (let b = 0; b < self.scanItems[c].items.length; b++) {
          if (self.scanItems[c].items[b].status == false || self.scanItems[c].items[b].status == undefined) {
            console.log("checkSaveStatus",c,b,self.scanItems[c].items[b].status);
            this.arrCk.push({status:false});
          }
          
         // return resolve(status);
         
        }
      }
  }

  checkExist(id: any) {
    let self = this;
    return new Promise<any>(function (resolve, reject) {
      try {
        self.httpService.fetchgetm('db-select-check-pd-in.php?id=' + id, res => {
          return resolve(res);
        })
      } catch (e) {
        return reject(e)
      }
    })
  }

  stepCheckNext() {
    let self = this; let step = [];
    return new Promise<any>(function (resolve, reject) {

      try {
        console.log('step 0', self.step1, self.step2, self.step3)
        if (self.step1 == true) {
          self.step1 = false;
          self.step2 = true;
          self.step3 = false;


        } else if (self.step2 == true) {
          self.step1 = false;
          self.step2 = false;
          self.step3 = true;

        } else if (self.step3 == true) {
          //self.step3 = false;
          self.step2 = false;
          self.step1 = false;

        }

        return resolve({ step1: self.step1, step2: self.step2, step3: self.step3 });
      } catch (e) {
        return reject(true);
      }
    })
  }

  stepCheckBack() {
    let self = this; let step = [];
    return new Promise<any>(function (resolve, reject) {

      try {
        console.log('step 0', self.step1, self.step2, self.step3)
        if (self.step1 == true) {
          self.step2 = false;
          self.step3 = false;


        } else if (self.step2 == true) {
          self.step1 = true;
          self.step2 = false;
          self.step3 = false;

        } else if (self.step3 == true) {
          self.step3 = false;
          self.step2 = true;
          self.step1 = false;

        }

        return resolve({ step1: self.step1, step2: self.step2, step3: self.step3 });
      } catch (e) {
        return reject(true);
      }
    })
  }


  clear() {
    this.scanItems = [];
    this.failedItems = [];
    this.successItems = [];
    this.qty = 0;
    this.kanbanId = "N/A";
    this.scanQty = 0;
    this.partno = "N/A";
    this.itemSearch = [];
    this.step3 = false;
    this.step2 = false;
    this.step1 = true;
    this.ckScan = true;
    this.ckSave = false;
    this.storeName = "";
    this.ckSearch = false;
    this.revScanValue = "";
    this.setTxtStatus(this.mode);
  }

  save() {
    this.ckSave = true;
    this.ckLoad = true;
    this.failedItems = [];
    this.successItems = [];
    this.successTotal = 0;
    this.failedTotal = 0;
    console.log('process', this.process);
      console.log('scanId', this.scanItems);
      this.loopSave('').then(cb => {
        this.ckLoad = false;
        this.ckStatus = true;
        this.status = environment.TXT_SUM_SUCCESSED;
      })
  }

  loopSave(matlot: String) {
    console.log('xxx');
    let self = this; let matlotId; let lotValue;
    return new Promise<any>(function (resolve, reject) {
      try {
        for (let i = 0; i < self.scanItems.length; i++) {

          self.saveData(self.scanItems, i, matlot).then(cb => {

          //  let items = cb.result;
     
            if (1) {

              self.pushSuccess(self.scanItems, i, self.setSaveStatus("OK"), []).then(ckstatuss => {

                 // self.successTotal += parseInt(self.scanItems[cb.i].lotsize);
                  //self.successQty = self.successItems.length;
              
              })
            } else {

              self.pushFaile(self.scanItems, i, self.setSaveStatus(cb.status), cb.result).then(ckstatusf => {
                //self.failedItems[i].remain = remain;
                //console.log('fail คงเหลือ', remain,self.failedItems);
                self.failedTotal += parseInt(self.scanItems[i].lotsize);
                self.failedQty = self.failedItems.length;
              })


            }

            if (i == self.scanItems.length - 1) {
              return resolve(i);
            }
          })
        }
      } catch (e) {
        return reject(true);
      }
    })
  }

  pushSuccess(arrValue: any, i: any, txtStatus: String, items: any) {
    let self = this;

    return new Promise<any>(function (resolve, reject) {
      try {
        if (self.process == "out-pd" || self.process == "out-rm" || self.process == "pd-prod") {
          items = [];
        }
        self.successItems.push({
          scanId: arrValue[i].scanId,
          partno: arrValue[i].partno,
          kanban: arrValue[i].kanban,
          lotsize: arrValue[i].lotsize,
          location: arrValue[i].location,
          remain: "",
          date_selected: arrValue[i].date_selected,
          time_selected: arrValue[i].time_selected,
          status: false,
          txtStatus: txtStatus,
          items: items
        });
        return resolve(true);
      } catch (e) {
        return reject(false);
      }
    })
  }

  pushFaile(arrValue: any, i: any, txtStatus: String, items: any) {
    let self = this;
    return new Promise<any>(function (resolve, reject) {
      try {
        if (self.process == "out-pd" || self.process == "out-rm" || self.process == "pd-prod") {
          items = [];
        }
        self.failedItems.push({
          scanId: arrValue[i].scanId,
          partno: arrValue[i].partno,
          kanban: arrValue[i].kanban,
          lotsize: arrValue[i].lotsize,
          location: arrValue[i].location,
          date_selected: arrValue[i].date_selected,
          time_selected: arrValue[i].time_selected,
          remain: "",
          status: false,
          txtStatus: txtStatus,
          items: items
        });
        return resolve(true);
      } catch (e) {
        return reject(false);
      }
    })
  }

  saveData(arrValue: any, i, matlot) {
    let self = this;
    console.log('scanId 1', arrValue);
    return new Promise<any>(function (resolve, reject) {
      try {
        let value = {
          "id": 0,
          "sample": {"id":parseInt(arrValue[i].scanId)},
          "test_request": {"id":parseInt(arrValue[i].lotsize)},
          "test_catalog": {"id":parseInt(arrValue[i].kanban)},
          "test_item":this.testItemSelected
        }
        console.log('value', arrValue[i],value);
        self.httpService.getStrorageInfo("token").then(token=>{
          self.httpService.getHttpJsonPost(self.action,value,token).then(res=>{
            let response = JSON.parse(res.result._body)
            console.log('response', response);
            resolve(response)
          })
        })

      } catch (e) {
        return reject(true);
      }
    })
  }

  checkExits(id: any) {
    console.log('checkExits', id);
    let self = this;
    return new Promise<any>(function (resolve, reject) {
      try {
        let ckExist = self.scanItems.filter((item) => {
          return (item.scanId.toLowerCase().indexOf(id.toLowerCase()) > -1);
        })
        resolve(ckExist);
      } catch (e) {
        reject(e);
      }
    });
  }



  strValidate(str: any) {
    console.log('cus scan id', str);
    return new Promise<any>(function (resolve, reject) {
      try {
        let re = /\-|\/|\:|\.|\ |[.*+?^${}()|[\]\\]/gi;
        let result = str.replace(re, "").toLowerCase();
        console.log('cus scan id', str, '-', result);
        return resolve(result);
      } catch (e) {
        return reject(e);
      }
    })
  }


  deleteItemFailed(id: string, index: any) {
    this.failedItems.splice(index, 1);//remove element from array
  }

  deleteItemSuccess(id: string, index: any) {
    this.successItems.splice(index, 1);//remove element from array
  }

  deleteItem(id: string, index: any) {
    this.arrCk = [];
    if (this.itemSearch.length > 0) {

      this.itemSearch.splice(index, 1);

    }
    this.scanQty -= 1;
    this.qty -= parseInt(this.scanItems[index].lotsize);
    this.scanItems.splice(index, 1);//remove element from array

    if (this.scanQty == 0) {
      this.clear();
    }

    this.checkSaveStatus();


  }

  initail() {

    this.ckStatus = true;
    let date = moment().format();
    //this.time_selected = moment().format("HH:mm:ss");
    //this.date_selected = date.split('T')[0];
    this.httpService.getStrorageInfo("userId").then(userId => {
      this.userId = userId;
    });

    this.tinyMCEConfiguration ={
      base_url: '/tinymce', 
      suffix: '.min'       
    }
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    //this.loadData();
    setTimeout(() => {
      console.log('Async operation has ended');
      try {
        // this.getDataSummary();
      } catch (e) { }
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      //alert(this.items.length);
      try {
        //this.getDataSummary();
      } catch (e) {
        if (e instanceof TypeError) { }
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}


