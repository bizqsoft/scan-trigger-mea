import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {UtilityService} from './utility.service';
//import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';
@Injectable()
export class HttpService{
http:any;
baseUrl:String;
baseUrlPost:string;
baseUrlApi:String;
uploadUrl:string;
HAS_LOGGED_IN = 'hasLoggedIn';
HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
public base64Image : any;
filenameUpload:any;
LOAD_DATA:any = 416000;
d:any;n:any;

constructor(private httpClient: HttpClient,public storage: Storage,private utility:UtilityService,http:Http){
  this.http=http; 
  this.d = new Date(),
  this.n = this.d.getTime();
  //----------url for develop------------------
  //this.baseUrl='http://localhost:8100/api';
  //----------url for production----------------
  this.baseUrl='http://qrcode-yamasei.com/api/';
  this.baseUrlPost='http://qrcode-yamasei.com/api/';
  this.baseUrlApi='http://qrcode-yamasei.com/api/';

  //this.baseUrl='https://www.cocclub.net/';
  //this.baseUrlPost='https://www.cocclub.net/';
  //this.baseUrlApi='https://www.cocclub.net/';

  //----------url for develop------------------
  this.uploadUrl='http://qrcode-yamasei.com/api/fileUploadAnj.php';
 
}


  //check if login
  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
      //return value;
    });
  };
 // check if tutorial
  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };

  //set session login
  login(userId:string,displayname: string,mobile:string,email:string,permission:string,filling:string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
  };
//get session
getStrorageInfo(name:string): Promise<string> {
    return this.storage.get(name).then((value) => {
      console.log('getStrorageInfo-'+name+' : ',value);
      return value;
    });
  };
  //set session login
  setSession(userId:string,email:string,displayname:string,picture:string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('userId', userId);
    this.storage.set('displayname', displayname);
    this.storage.set('picture', picture);
    this.storage.set('email',email);
    console.log('set session',userId,displayname,picture,email);
  };

  setSessionToken(token){
    this.storage.set('token',token);
  }
  

  delete(apipath,id:string){
  let headers = new Headers();
  headers.append('Content-Type','application/json');

  let body = {
    id:id
  }

  return this.http.post(this.baseUrl+'/'+apipath,JSON.stringify(body),{headers:headers})
  .map(res => res.json())
  .subscribe(data =>{
    console.log('postData-data : ',data);
    console.log('postData-body : ',body);
  });
  }

  fetchHttpPostUpload(url,fileType,value,cb){
    let reqOpts = {
      headers: {'filetype':fileType}
    };
    this.httpClient.post(environment.urlmapi_ + '/' + url, value, reqOpts).subscribe(res => {
      return cb({ 'result': res, 'error': false });
    }, (error) => {
      return cb({ 'error': true,'message':error });
    })
    }

 //remove session login
 logout(): void {
  this.storage.remove(this.HAS_LOGGED_IN);
  this.storage.remove('mobile');
  this.storage.remove('permission');
  this.storage.remove('displayname');
  this.storage.remove('userId');
  this.storage.remove('email');
   this.storage.remove('filling');
   this.storage.remove('picture');
   this.storage.remove('uid');
  console.log('logout success');
};

getData(apipath){
console.log('url:',this.baseUrl+'/'+apipath+'&n='+this.n);
return this.http.get(this.baseUrl+'/'+apipath+'&n='+this.n)
.do((res:Response)=> console.log('getData-res : ',res))
.map((res:Response)=>res.json())
}

api(apipath){
  return this.http.get(this.baseUrlApi+'/'+apipath)
  .do((res:Response)=> console.log('api : ',res))
  .map((res:Response)=>res.json())
    //return this.http.getJsonData(this.baseUrl+'/getJSON.php');
    //return this.http.jsonp(this.baseUrl+'/getJSON.php');
  }

//update data
  postUpdate(apipath:string,body:any){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post(this.baseUrl+'/'+apipath,JSON.stringify(body),{headers:headers})
  .map(res => res.json())
  .subscribe(data =>{
    console.log('postUpdate-data : ',data);
    console.log('postUpdate-body : ',body);
  });

}
fetchget(url,cb) {
  this.n = Date.now();
  const req = new XMLHttpRequest();
  req.open('GET',  environment.url+'/'+url+'&n='+this.n);
  req.onload = () => {
    console.log('DONE', req.readyState); // readyState will be 4
    return [cb(JSON.parse(req.response)),req.readyState];

  };
  req.send();
  console.log("url:",environment.url+'/'+url+'&n='+this.n);
}


// getJsonHttpGet(url, value, token): Promise<any> {
//   return new Promise((resolve,reject)=>{
//     let reqOpts = {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': 'Bearer ' + token
//       }
//     };
//     this.http.get(environment.urlmapi_ + '/' + url, reqOpts).subscribe(res => {
//       console.log('getJsonHttpGet result',res)
//      resolve({'error': false, 'result': res });
//     }, (error) => {
//      reject({ 'error': true, 'message': error });
//     })
//   })
// }

getJsonHttpGet(url, token) : Promise<any> {
  let self = this;
  return new Promise((resolve,reject)=>{
    let reqOpts = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };
    //get request for data
    self.httpClient.get(environment.urlmapi_ + '/' + url, reqOpts).subscribe(res => {
     // console.log('url',environment.apiUrl + '/' + url,res)
      resolve({'error': false, 'result': res });
    }, (error) => {
      reject({ 'error': true, 'message': error });
    })
  })
}


fetchgetm(url,cb) {
  this.n = Date.now();
  const req = new XMLHttpRequest();
  req.open('GET',  environment.urlmapi+'/'+url+'&n='+this.n);
  req.onload = () => {
    console.log('DONE', req.readyState); // readyState will be 4
    return [cb(JSON.parse(req.response)),req.readyState];

  };
  req.send();
  console.log("url:",environment.urlmapi+'/'+url+'&n='+this.n);
}


fetchpost(url,data,cb) {
  this.n = Date.now();
  console.log('postdata url',url);
  const req = new XMLHttpRequest();
  req.open('POST',  environment.url+'/'+url);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.onreadystatechange = function () {//Call a function when the state changes.
      if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
        // Request finished. Do processing here.
        req.onload = () => {
          console.log('postdata',JSON.parse(req.response));
          return cb(JSON.parse(req.response));
        };
      }
    }
  req.send(JSON.stringify(data));
  console.log("url:",environment.url+'/'+url);
  //console.log("data:",data);
}



getHttpUrlEncode(url:string, value:any) : Promise<any> {
  return new Promise((resolve,reject)=>{
    let reqOpts = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
     
    };
    this.http.post(environment.urlmapi_ + '/' + url, value, reqOpts).subscribe(res => {
      console.log('result',environment.urlmapi_ + '/' + url,res)
      //this.loadingDismiss();
      resolve({'error': false, 'result': res });
    }, (error) => {
      reject({ 'error': true, 'message': error });
    })
  })

}
  //set session login
setLocalStorageOne(name: string, value: string) : Promise<any> {
    return new Promise<any>((resolve, reject)=>{
      this.storage.set(name, value);
      resolve("Set local storage  success.");
      reject(new Error("Set local storage failed."));
    });
  };
fetchpostm(url,data,cb) {
  this.n = Date.now();
  console.log('postdata url',url);
  const req = new XMLHttpRequest();
  req.open('POST',  environment.urlmapi+'/'+url);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  req.onreadystatechange = function () {//Call a function when the state changes.
      if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
        // Request finished. Do processing here.
        req.onload = () => {
          console.log('postdata',JSON.parse(req.response));
          return cb(JSON.parse(req.response));
        };
      }
    }
  req.send(JSON.stringify(data));
  console.log("url:",environment.urlmapi+'/'+url);
  //console.log("data:",data);
}

fetchpostm_(url,data,cb) {
  this.n = Date.now();
  console.log('postdata url',url);
  const req = new XMLHttpRequest();
  req.open('POST',  environment.urlmapi_+'/'+url);
  req.setRequestHeader("Content-type", "application/json");
  
  req.onreadystatechange = function () {//Call a function when the state changes.
      if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
        // Request finished. Do processing here.
        req.onload = () => {
          console.log('postdata',JSON.parse(req.response));
          return cb(JSON.parse(req.response));
        };
      }
    }
  req.send(JSON.stringify(data));
  console.log("url:",environment.urlmapi+'/'+url);
  //console.log("data:",data);
}

getHttpJsonPost(url, value, token): Promise<any> {
  return new Promise((resolve,reject)=>{
    let reqOpts = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };
    this.http.post(environment.urlmapi_ + '/' + url, value, reqOpts).subscribe(res => {
     resolve({'error': false, 'result': res });
    }, (error) => {
     reject({ 'error': true, 'message': error });
    })
  })
}




//post data to database server
postData(apipath,body:any){
  //this.utility.loading.present();
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  console.log('url:',this.baseUrl+'/'+apipath+'?n='+this.n);
  return this.http.post(this.baseUrl+'/'+apipath+'?n='+this.n,JSON.stringify(body),{headers:headers})
  .map(res => res.json())
  .subscribe(data =>{
    //console.log('postData-data : ',data);
    //console.log('postData-body : ',body);
  });

}







}
