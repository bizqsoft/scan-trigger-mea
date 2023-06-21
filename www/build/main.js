webpackJsonp([0],{

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UtilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(46);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UtilityService = /** @class */ (function () {
    function UtilityService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], UtilityService);
    return UtilityService;
}());

var DateFormatPipe = /** @class */ (function (_super) {
    __extends(DateFormatPipe, _super);
    function DateFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatPipe.prototype.date_start = function (value, args) {
        ///MMM/dd/yyyy 
        return _super.prototype.transform.call(this, value, "yyyy-MM-01");
    };
    DateFormatPipe.prototype.date_format = function (value, format, args) {
        ///MMM/dd/yyyy 
        return _super.prototype.transform.call(this, value, format);
    };
    DateFormatPipe.prototype.date_today = function (value, args) {
        ///MMM/dd/yyyy 
        return _super.prototype.transform.call(this, value, "yyyy-MM-dd");
    };
    return DateFormatPipe;
}(__WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */]));

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';






var HttpService = /** @class */ (function () {
    function HttpService(httpClient, storage, utility, http) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.utility = utility;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.LOAD_DATA = 416000;
        this.http = http;
        this.d = new Date(),
            this.n = this.d.getTime();
        //----------url for develop------------------
        //this.baseUrl='http://localhost:8100/api';
        //----------url for production----------------
        this.baseUrl = 'http://qrcode-yamasei.com/api/';
        this.baseUrlPost = 'http://qrcode-yamasei.com/api/';
        this.baseUrlApi = 'http://qrcode-yamasei.com/api/';
        //this.baseUrl='https://www.cocclub.net/';
        //this.baseUrlPost='https://www.cocclub.net/';
        //this.baseUrlApi='https://www.cocclub.net/';
        //----------url for develop------------------
        this.uploadUrl = 'http://qrcode-yamasei.com/api/fileUploadAnj.php';
    }
    //check if login
    HttpService.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
            //return value;
        });
    };
    ;
    // check if tutorial
    HttpService.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    //set session login
    HttpService.prototype.login = function (userId, displayname, mobile, email, permission, filling) {
        this.storage.set(this.HAS_LOGGED_IN, true);
    };
    ;
    //get session
    HttpService.prototype.getStrorageInfo = function (name) {
        return this.storage.get(name).then(function (value) {
            console.log('getStrorageInfo-' + name + ' : ', value);
            return value;
        });
    };
    ;
    //set session login
    HttpService.prototype.setSession = function (userId, email, displayname, picture) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('userId', userId);
        this.storage.set('displayname', displayname);
        this.storage.set('picture', picture);
        this.storage.set('email', email);
        console.log('set session', userId, displayname, picture, email);
    };
    ;
    HttpService.prototype.setSessionToken = function (token) {
        this.storage.set('token', token);
    };
    HttpService.prototype.delete = function (apipath, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            id: id
        };
        return this.http.post(this.baseUrl + '/' + apipath, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('postData-data : ', data);
            console.log('postData-body : ', body);
        });
    };
    HttpService.prototype.fetchHttpPostUpload = function (url, fileType, value, cb) {
        var reqOpts = {
            headers: { 'filetype': fileType }
        };
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi_ + '/' + url, value, reqOpts).subscribe(function (res) {
            return cb({ 'result': res, 'error': false });
        }, function (error) {
            return cb({ 'error': true, 'message': error });
        });
    };
    //remove session login
    HttpService.prototype.logout = function () {
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
    ;
    HttpService.prototype.getData = function (apipath) {
        console.log('url:', this.baseUrl + '/' + apipath + '&n=' + this.n);
        return this.http.get(this.baseUrl + '/' + apipath + '&n=' + this.n)
            .do(function (res) { return console.log('getData-res : ', res); })
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.api = function (apipath) {
        return this.http.get(this.baseUrlApi + '/' + apipath)
            .do(function (res) { return console.log('api : ', res); })
            .map(function (res) { return res.json(); });
        //return this.http.getJsonData(this.baseUrl+'/getJSON.php');
        //return this.http.jsonp(this.baseUrl+'/getJSON.php');
    };
    //update data
    HttpService.prototype.postUpdate = function (apipath, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '/' + apipath, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('postUpdate-data : ', data);
            console.log('postUpdate-body : ', body);
        });
    };
    HttpService.prototype.fetchget = function (url, cb) {
        this.n = Date.now();
        var req = new XMLHttpRequest();
        req.open('GET', __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].url + '/' + url + '&n=' + this.n);
        req.onload = function () {
            console.log('DONE', req.readyState); // readyState will be 4
            return [cb(JSON.parse(req.response)), req.readyState];
        };
        req.send();
        console.log("url:", __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].url + '/' + url + '&n=' + this.n);
    };
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
    HttpService.prototype.getJsonHttpGet = function (url, token) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var reqOpts = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            };
            //get request for data
            self.httpClient.get(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi_ + '/' + url, reqOpts).subscribe(function (res) {
                // console.log('url',environment.apiUrl + '/' + url,res)
                resolve({ 'error': false, 'result': res });
            }, function (error) {
                reject({ 'error': true, 'message': error });
            });
        });
    };
    HttpService.prototype.fetchgetm = function (url, cb) {
        this.n = Date.now();
        var req = new XMLHttpRequest();
        req.open('GET', __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi + '/' + url + '&n=' + this.n);
        req.onload = function () {
            console.log('DONE', req.readyState); // readyState will be 4
            return [cb(JSON.parse(req.response)), req.readyState];
        };
        req.send();
        console.log("url:", __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi + '/' + url + '&n=' + this.n);
    };
    HttpService.prototype.fetchpost = function (url, data, cb) {
        this.n = Date.now();
        console.log('postdata url', url);
        var req = new XMLHttpRequest();
        req.open('POST', __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].url + '/' + url);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.onreadystatechange = function () {
            if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                // Request finished. Do processing here.
                req.onload = function () {
                    console.log('postdata', JSON.parse(req.response));
                    return cb(JSON.parse(req.response));
                };
            }
        };
        req.send(JSON.stringify(data));
        console.log("url:", __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].url + '/' + url);
        //console.log("data:",data);
    };
    HttpService.prototype.getHttpUrlEncode = function (url, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reqOpts = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            _this.http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi_ + '/' + url, value, reqOpts).subscribe(function (res) {
                console.log('result', __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi_ + '/' + url, res);
                //this.loadingDismiss();
                resolve({ 'error': false, 'result': res });
            }, function (error) {
                reject({ 'error': true, 'message': error });
            });
        });
    };
    //set session login
    HttpService.prototype.setLocalStorageOne = function (name, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set(name, value);
            resolve("Set local storage  success.");
            reject(new Error("Set local storage failed."));
        });
    };
    ;
    HttpService.prototype.fetchpostm = function (url, data, cb) {
        this.n = Date.now();
        console.log('postdata url', url);
        var req = new XMLHttpRequest();
        req.open('POST', __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi + '/' + url);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.onreadystatechange = function () {
            if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                // Request finished. Do processing here.
                req.onload = function () {
                    console.log('postdata', JSON.parse(req.response));
                    return cb(JSON.parse(req.response));
                };
            }
        };
        req.send(JSON.stringify(data));
        console.log("url:", __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi + '/' + url);
        //console.log("data:",data);
    };
    HttpService.prototype.fetchpostm_ = function (url, data, cb) {
        this.n = Date.now();
        console.log('postdata url', url);
        var req = new XMLHttpRequest();
        req.open('POST', __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi_ + '/' + url);
        req.setRequestHeader("Content-type", "application/json");
        req.onreadystatechange = function () {
            if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                // Request finished. Do processing here.
                req.onload = function () {
                    console.log('postdata', JSON.parse(req.response));
                    return cb(JSON.parse(req.response));
                };
            }
        };
        req.send(JSON.stringify(data));
        console.log("url:", __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi + '/' + url);
        //console.log("data:",data);
    };
    HttpService.prototype.getHttpJsonPost = function (url, value, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reqOpts = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            };
            _this.http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].urlmapi_ + '/' + url, value, reqOpts).subscribe(function (res) {
                resolve({ 'error': false, 'result': res });
            }, function (error) {
                reject({ 'error': true, 'message': error });
            });
        });
    };
    //post data to database server
    HttpService.prototype.postData = function (apipath, body) {
        //this.utility.loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log('url:', this.baseUrl + '/' + apipath + '?n=' + this.n);
        return this.http.post(this.baseUrl + '/' + apipath + '?n=' + this.n, JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log('postData-data : ',data);
            //console.log('postData-body : ',body);
        });
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__utility_service__["b" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpService);
    return HttpService;
}());

//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var uploadPage = /** @class */ (function () {
    function uploadPage(events, storage, toastCtrl, utility, app, navCtrl, httpService, _dateFormatPipe, menuCtrl) {
        this.events = events;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.app = app;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this._dateFormatPipe = _dateFormatPipe;
        this.menuCtrl = menuCtrl;
        this.initail();
    } //end constructor
    uploadPage.prototype.initail = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format();
        this.time_selected = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format("HH:mm:ss");
        this.date_selected = date.split('T')[0];
        this.httpService.getStrorageInfo("userId").then(function (userId) {
            _this.userId = userId;
        });
    };
    uploadPage.prototype.scanPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "upload",
            mode: "upload",
            action: "upload",
            type: "upload",
            doubleScan: false,
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    uploadPage.prototype.scanCancelPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "pt-ship",
            mode: "shopplatting",
            action: "db-insert-pt-collect-cancel.php",
            type: "PT",
            doubleScan: false,
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    uploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/upload/upload.html"*/'<ion-header>\n  <ion-row>\n    <ion-col col-2 style="text-align: center;">\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-col>\n    <ion-col col-10 style="padding-top:10px;padding-bottom:10px;font-size:10px;background-color: white;">\n        <div style="border-radius: 4px;height:43px;padding-top:8px;text-align:center;color:white;font-size:18px;background-color: #f53d3d;"><strong>IBQS SCAN TRIGGER V.1.0</strong></div>\n  </ion-col>\n</ion-row>\n\n  <div style="margin-top:0px;padding-top:0px;" class="block-package">\n\n  </div>\n  </ion-header>\n\n  <ion-content>\n  \n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n                <ion-grid>\n                   \n                  <div style="margin-top:10px;"></div> \n             \n              \n                      <div class ="btn-date">\n                          <ion-item no-lines>\n                            <ion-label>วันที่</ion-label>\n                            <ion-datetime min="2016" displayFormat="DD-MM-YYYY" [(ngModel)]="date_selected">\n                            </ion-datetime>\n                          </ion-item>\n                        </div>\n                \n                \n                      <div class ="btn-date">\n                          <ion-item no-lines>\n                            <ion-label>เวลา</ion-label>\n                            <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="time_selected">\n                            </ion-datetime>\n                          </ion-item>\n                        </div>\n                 \n\n                </ion-grid>\n             \n\n  <!-- this fab is placed at bottom right -->\n  \n  </ion-content>\n  <ion-footer>\n    <div style="height:6px;background-color: red;"></div>\n    <div (click)="scanPage()" class="btn-sl">Upload</div>\n\n  </ion-footer>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/upload/upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], uploadPage);
    return uploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    //url:"http://ssj-yamasei.com/api/",
    //urlmapi:"http://ssj-yamasei.com/mapi-v1/",
    //sysName:"IBQS Trigger",
    //sysPath:"http://ssj-yamasei.com/",
    // url:"https://krao-ipc6-dip.com/api/",
    // urlmapi:"https://krao-ipc6-dip.com/mapi-v1/",
    // sysName:"IBQS Trigger",
    // sysPath:"https://krao-ipc6-dip.com/",
    url: "http://qrcode-yamasei.com/api/",
    urlmapi: "http://qrcode-yamasei.com/mapi-v1/",
    urlmapi_: "https://www.mea.ths-true.com/api",
    sysName: "IBQS Trigger",
    sysPath: "http://qrcode-yamasei.com/",
    //12.4 edit kanban reset for platting
    //12.5.1 remove sale cancel , colect cancel
    //12.5.2 fixed ,maxyear and minyear in plan process.
    //12.5.3 fixed ,maxyear and minyear in collect fg process.
    //12.5.4 fixed  - locked save function : supply part , supply rm , out st.pro if status show failed.
    //              - if user not scan supply part ,cannot scan packing.
    //              - customer qr code export scan
    //12.5.5 fixed  - Fixed TMWTA Lotsite ไม่ตรง. , Collect FG , Sale
    //              - Fixed bug , locked save function : supply part , supply rm , out st.pro if status show failed.
    //12.5.6 fixed  - Fixed bug , locked save function : supply part , supply rm , out st.pro if status show failed.
    //12.5.7 fixed  - Fixed bug success , locked save function : supply part , supply rm , out st.pro if status show failed.
    //12.5.8 fixed  - Fixed bug success , locked save function : supply part , supply rm , out st.pro if status show failed.
    //12.5.9 fixed  - Fixed bug success , locked save function : supply part , supply rm , out st.pro if status show failed.
    //12.5.10-11 fixed  - Fixed bug success , add cutomer kanban JATH 17 parts.
    //12.5.12 - Add customer QR Code kanban to part Export and IPO , (PC1 , PD / function : sales , collect , cross kanban , plan pd)
    //12.5.13 - Add customer QR Code kanban , instock / outstock crumb PT and RM (PC1 , PC2 / function : sales , collect , cross kanban  , supply material , supply part , out st.prod)
    //12.5.13.1 - Add customer QR Code kanban ,instock / outstock crumb PT and RM (PC1,PC2/ function : sales , collect , cross kanban,supply material , supply part , out st.prod)
    //12.5.13.2 - Add customer QR Code kanban ,instock (PC1/ function : sales , collect , cross kanban)
    //12.5.13.3 - Add customer QR Code kanban ,instock (PC1/ function : sales , collect , cross kanban)
    //12.5.13.4 - Add customer QR Code kanban ,instock (PC1/ function : sales , collect , cross kanban)
    //12.5.13.5 - Add customer QR Code kanban , Outstock stock RM , (PC1/PC1 function : sales , collect , cross kanban, Out St.Prod, Supply RM)
    //12.5.13.6 - Add customer QR Code kanban , (PC1 function : sales , collect , cross kanban)
    //12.5.13.7 - Add customer QR Code kanban , (PC1 function : sales , collect , cross kanban)
    //12.5.13.8 - Add customer QR Code kanban , (PC1 function : sales , collect , cross kanban)
    //12.5.13.9 - Change checking format customer kanban , lotsize and part no.(PC1 function : sales , collect , cross kanban)
    //12.5.13.10 - Kanban check status (PC1,PC2,PD)
    //12.5.13.11 - Lock stock location Packing (PC1)
    sysVersion: "12.5.13.11",
    sysVersionName: "Version 12.5.13.11",
    coppyright: "© Copyright 2021. All Rights Reserved.",
    timeLoading: "36000",
    timeLoading_5_sec: 36000,
    timeLoading_30_sec: 36000,
    timeLoading_1_minute: 72000,
    timeLoading_3_minute: 216000,
    timeLoading_realtime: 3600,
    TXT_SUM_CHECK: "กรุณาตรวจสอบความถูกต้องก่อนบันทึกค่ะ",
    TXT_SUM_WARNING: "ข้อมูลจะยังไม่ถูกส่งเข้าระบบหากไม่กดบันทึก!",
    TXT_SUM_FAILED: "บันทึกไม่สำเร็จ",
    TXT_SUM_SUCCESSED: "บันทึกสำเร็จ",
    TXT_MATLOT_NOTFOUND: "ไม่พบ Material lot",
    TXT_NO_TRACKK: "ไม่พบ TRACK ID",
    TXT_FIRST_SCAN: "แสกนคิวอาร์โค๊ดขั้นตอนก่อนหน้า",
    TXT_ID_DUPLICATED: "คิวอาร์โค๊ดซ้ำกันไม่ได้",
    TXT_KANBAN_CUSTOMER: "คิวอาร์โค๊ดลูกค้า",
    TXT_KANBAN_JIG: "คิวอาร์โค๊ด JIG",
    TXT_KANBAN_NOINCUSTOMER: "ยังไม่ส่งให้ลูกค้าหรือยังไม่ได้ขาย",
    TXT_STATUS_WRONGPARTNO: "Part no ไม่ตรงกัน",
    TXT_STATUS_WRONGLOTSIZE: "Lotsize ไม่ตรงกัน",
    TXT_STATUS_INPUT_FAILED: "ระบุข้อมูลไม่สมบูรณ์",
    TXT_STATUS_FAILED_QR: "คิวอาร์โค๊ดไม่ถูกต้อง",
    TXT_STATUS_FAILED: "ตรวจสอบคิวอาร์โค๊ดและการเชื่อมต่อเครือข่าย",
    TXT_STATUS_CHANGE_LOT_FAILED: "KANBAN ยังค้างอยู่ในสต๊อก ไม่สามาถเปลี่ยนได้",
    TXT_STATUS_NOTFOUND: "ไม่พบข้อมูล",
    TXT_STATUS_EXIST: "ไม่สามารถทำรายการซ้ำได้",
    TXT_STATUS_OUT_EXIST: "ถูกเบิกออกจากระบบแล้ว",
    TXT_STATUS_SUCCESS: "บันทึกสำเร็จ",
    TXT_STATUS_CANCEL: "ยกเลิกสำเร็จ",
    TXT_STATUS_DEFINED_LOCATION: "ระบุพื้นที่จัดเก็บสำเร็จ",
    TXT_STATUS_NOTFOUND_LOCATION: "ไม่พบข้อมูลพื้นที่จัดเก็บ",
    TXT_STATUS_DEFINED_MACHINE: "ระบุเครื่องจักรสำเร็จ",
    TXT_STATUS_NOTFOUND_MACHINE: "ไม่พบข้อมูลเครื่องจักร",
    TXT_STATUS_DEFINED_OPERATOR: "ระบุพนักงานสำเร็จ",
    TXT_STATUS_NOTFOUND_OPERATOR: "ไม่พบข้อมูลพนักงาน",
    TXT_RM_KANBAN: "[ แสกนคิวอาร์โค๊ด ]",
    TXT_PD_KANBAN: "[ แสกนคิวอาร์โค๊ด PD ]",
    TXT_PT_KANBAN: "[ แสกนคิวอาร์โค๊ด]",
    TXT_FG_KANBAN: "[ แสกนคิวอาร์โค๊ด FG ]",
    TXT_LOCATION_KANBAN: "[ แสกนคิวอาร์โค๊ดพื้นที่จัดเก็บ ]",
    TXT_MACHINE_QR: "[ แสกนคิวอาร์โค๊ดของเครื่องจักร ]",
    TXT_LINE_QR: "[ แสกนคิวอาร์โค๊ดของสายการผลิต ]",
    TXT_OPERATOR_QR: "[ แสกนคิวอาร์โค๊ดของพนักงาน ]",
    TXT_STATUS_START: "[ เริ่มตรวจจับคิวอาร์โค๊ด ]",
    TXT_STATUS_CHCEK_VALUE: "ระบุ วันที่,เวลา",
    TXT_STATUS_CHCEK_QC: "ระบุจำนวน ,สาเหตุ ,ขั้นตอนที่พบปัญหา",
    TXT_STATUS_FAILED_QTY: "ระบุจำนวนไม่ถูกต้อง",
    //scrap
    TXT_STATUS_OK_SCRAP: "เบิกเศษสำเร็จ:",
    TXT_STATUS_SALE_OK_SCRAP: "ขายเศษสำเร็จ:",
    TXT_STATUS_FAILED_SCRAP_OVER: "ทำรายการเกินจำนวน",
    TXT_STATUS_FAILED_SCRAP_LOWER: "ทำรายการไม่ครบจำนวน",
    TXT_STATUS_SCRAP_EXIST: "เบิกเศษค้างอยู่",
    TXT_STATUS_SALE_SCRAP_EXIST: "ขายเศษค้างอยู่",
    //blank kanban
    TXT_KANBAN_BLANK: "Kanban ว่าง",
    TXT_KANBAN_INSTOCK: "อยู่ในสต๊อก",
    TXT_KANBAN_ON_PROCESS: "อยู่ระหว่างการผลิต",
    TXT_KANBAN_IN_SUPPLIER: "อยู่ระหว่างส่งชุป",
    TXT_KANBAN_PACKING: "อยู่ในสถานะ Packing แล้ว",
    TXT_KANBAN_COLLECT: "อยู่ในสถานะ Collect แล้ว",
    TXT_KANBAN_SALE: "อยู่ในสถานะ Sale แล้ว",
    //login
    TXT_STATUS_LOGIN_FAILED: "ไม่พบข้อมูลพนักงาน",
    TXT_STATUS_LOGIN_SUCCESS: "เข้าสู่ระบบสำเร็จ",
    TXT_STATUS_LOGIN_QR_FAILED: "คิวอาร์โค๊ดไม่ถูกต้อง",
    //material mod
    TXT_NOT_PLAN: "ยังไม่ได้วางแผน",
    TXT_MOVE_SUCCESS: "ย้ายที่จัดเก็บสำเร็จ",
    TXT_STATUS_NOINSTOCK: "ยังไม่รับเข้าสต๊อก",
    TXT_STATUS_NOREPAIR: "ยังไม่ได้จัดเตรียม",
    TXT_STATUS_NOSHOP: "ยังไม่ถูกส่งชุป",
    TXT_STATUS_INSHOP: "อยู่ในขั้นตอนชุป",
    TXT_STATUS_NOOUTSTOCK: "ยังไม่ได้เบิกวัตถุดิบ",
    TXT_STATUS_NOPROCESS: "ยังไม่ได้รับเข้าผลิต",
    TXT_CHANGE_LOT_SUCCESS: "เปลี่ยนขนาดบรรจุสำเร็จ",
    //sale
    TXT_NO_SALE: "ยังไม่ได้ขาย จะรับเข้าสต๊อกไม่ได้",
    TXT_COLLECT_SUCCESS: "จัดเตรียมสำเร็จ",
    TXT_SALE_SUCCESS: "ขายสินค้าสำเร็จ",
    TXT_STATUS_CHECK_QR_START: "[ เริ่มตรวจจับคิวอาร์โค๊ด...]",
    TXT_STATUS_SUCCESS_EDIT_SNP: "เปลี่ยนขนาดบรรจุสำเร็จ",
    TXT_STATUS_FAILED_EDIT_SNP: "ไม่สามารถขายเศษได้",
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsUserPage = /** @class */ (function () {
    function TabsUserPage(params, app, httpService) {
        this.params = params;
        this.app = app;
        this.httpService = httpService;
        //tab1Root = HomePage;
        this.history = false;
        this.shop = false;
        this.login = false;
        this.home = false;
        this.status = false;
        this.history = params.get('history');
        this.status = params.get('status');
        this.login = params.get('login');
        this.home = params.get('home');
        console.log('tab', this.status, this.history, this.login, this.home);
    }
    TabsUserPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.httpService.hasLoggedIn().then(function (data) {
            if (data != true) {
                _this.tabRef.select(0);
            }
            else {
                console.log('post', _this.history);
                if (_this.history == true) {
                    _this.tabRef.select(1);
                    _this.history = false;
                }
                else if (_this.status == true) {
                    _this.tabRef.select(2);
                    _this.status = false;
                }
                else if (_this.login == true) {
                    _this.tabRef.select(0);
                    _this.login = false;
                }
                else if (_this.home == true) {
                    _this.tabRef.select(0);
                    _this.home = false;
                }
                else {
                    _this.tabRef.select(0);
                }
            }
        });
    };
    TabsUserPage.prototype.ionSelected = function () {
        var _this = this;
        var navCtr = this.app.getRootNav();
        this.httpService.hasLoggedIn().then(function (data) {
            if (data != true) {
                navCtr.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                _this.tabRef.select(0);
            }
            else {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tabs */])
    ], TabsUserPage.prototype, "tabRef", void 0);
    TabsUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/tabs/tabs-user.html"*/'\n<ion-tabs #myTabs tabsPlacement="bottom" color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="หน้าแรก" tabIcon="md-home" (ionSelect)="ionSelected()"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="ประวัติ" tabIcon="md-stats" (ionSelect)="ionSelected()"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="สถานะ" tabIcon="md-notifications" (ionSelect)="ionSelected()"></ion-tab>\n \n\n  </ion-tabs>\n  '/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/tabs/tabs-user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */]])
    ], TabsUserPage);
    return TabsUserPage;
}());

//# sourceMappingURL=tabs-user.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var stopPage = /** @class */ (function () {
    function stopPage(events, storage, toastCtrl, utility, app, navCtrl, httpService, _dateFormatPipe, menuCtrl) {
        this.events = events;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.app = app;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this._dateFormatPipe = _dateFormatPipe;
        this.menuCtrl = menuCtrl;
        this.initail();
    } //end constructor
    stopPage.prototype.initail = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format();
        this.time_selected = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format("HH:mm:ss");
        this.date_selected = date.split('T')[0];
        this.maxyear = new Date().getFullYear() + 1;
        this.minyear = new Date().getFullYear() - 5;
        console.log('max,min', this.maxyear, this.minyear);
        this.httpService.getStrorageInfo("userId").then(function (userId) {
            _this.userId = userId;
        });
    };
    stopPage.prototype.scanPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "plan-rm",
            mode: "plan",
            action: "testing/finish",
            type: "RM",
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_RM_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    stopPage.prototype.scanCancelPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "plan-rm",
            mode: "plan",
            action: "testing/finish",
            type: "RM",
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_RM_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    stopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stop',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/stop/stop.html"*/'<ion-header>\n    <ion-row>\n      <ion-col col-2 style="text-align: center;">\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-col>\n      <ion-col col-10 style="padding-top:10px;padding-bottom:10px;font-size:10px;background-color: white;">\n          <div style="border-radius: 4px;height:43px;padding-top:8px;text-align:center;color:white;font-size:18px;background-color: #f53d3d;"><strong>IBQS SCAN TRIGGER V.1.0</strong></div>\n    </ion-col>\n  </ion-row>\n  \n    <div style="margin-top:0px;padding-top:0px;" class="block-package">\n  \n    </div>\n    </ion-header>\n  \n    <ion-content>\n    \n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n                  <ion-grid>\n                     \n                    <div style="margin-top:10px;"></div> \n               \n               \n                    <div class ="btn-date">\n                            <ion-item no-lines>\n                              <ion-label>วันที่</ion-label>\n                              <ion-datetime min="{{minyear}}" max="{{maxyear}}" displayFormat="DD-MM-YYYY" [(ngModel)]="date_selected">\n                              </ion-datetime>\n                            </ion-item>\n                          </div>\n                  \n                  \n                          <div class ="btn-date">\n                            <ion-item no-lines>\n                              <ion-label>เวลา</ion-label>\n                              <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="time_selected">\n                              </ion-datetime>\n                            </ion-item>\n                          </div>\n                  \n\n                  </ion-grid>\n               \n\n    <!-- this fab is placed at bottom right -->\n    \n    </ion-content>\n    <ion-footer>\n      <div style="height:6px;background-color: red;"></div>\n      <div (click)="scanPage()" class="btn-sl">STOP</div>\n    </ion-footer>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/stop/stop.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], stopPage);
    return stopPage;
}());

//# sourceMappingURL=stop.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var startPage = /** @class */ (function () {
    function startPage(events, storage, toastCtrl, utility, app, navCtrl, httpService, _dateFormatPipe, menuCtrl) {
        this.events = events;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.app = app;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this._dateFormatPipe = _dateFormatPipe;
        this.menuCtrl = menuCtrl;
        this.initail();
    } //end constructor
    startPage.prototype.initail = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format();
        this.time_selected = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format("HH:mm:ss");
        this.date_selected = date.split('T')[0];
        this.maxyear = new Date().getFullYear() + 1;
        this.minyear = new Date().getFullYear() - 5;
        this.httpService.getStrorageInfo("userId").then(function (userId) {
            _this.userId = userId;
        });
    };
    startPage.prototype.scanPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "plan-pt",
            mode: "plan",
            action: "testing/start",
            type: "PT",
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    startPage.prototype.scanCancelPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "plan-pt",
            mode: "plan",
            action: "testing/start",
            type: "PT",
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    startPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/start/start.html"*/'<ion-header>\n  <ion-row>\n    <ion-col col-2 style="text-align: center;">\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-col>\n    <ion-col col-10 style="padding-top:10px;padding-bottom:10px;font-size:10px;background-color: white;">\n        <div style="border-radius: 4px;height:43px;padding-top:8px;text-align:center;color:white;font-size:18px;background-color: #f53d3d;"><strong>IBQS SCAN TRIGGER V.1.0</strong></div>\n  </ion-col>\n</ion-row>\n\n  <div style="margin-top:0px;padding-top:0px;" class="block-package">\n\n  </div>\n  </ion-header>\n\n  <ion-content>\n  \n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n                <ion-grid>\n                   \n                  <div style="margin-top:10px;"></div> \n             \n             \n                        <div class ="btn-date">\n                          <ion-item no-lines>\n                            <ion-label>วันที่</ion-label>\n                            <ion-datetime min="{{minyear}}" max="{{maxyear}}" displayFormat="DD-MM-YYYY" [(ngModel)]="date_selected">\n                            </ion-datetime>\n                          </ion-item>\n                        </div>\n                \n                 \n                        <div class ="btn-date">\n                          <ion-item no-lines>\n                            <ion-label>เวลา</ion-label>\n                            <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="time_selected">\n                            </ion-datetime>\n                          </ion-item>\n                      </div>\n               \n\n                </ion-grid>\n             \n\n  <!-- this fab is placed at bottom right -->\n  \n  </ion-content>\n  <ion-footer>\n    <div style="height:6px;background-color: red;"></div>\n    <div (click)="scanPage()" class="btn-sl">START</div>\n  </ion-footer>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/start/start.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], startPage);
    return startPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var resultPage = /** @class */ (function () {
    function resultPage(events, storage, toastCtrl, utility, app, navCtrl, httpService, _dateFormatPipe, menuCtrl) {
        this.events = events;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.app = app;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this._dateFormatPipe = _dateFormatPipe;
        this.menuCtrl = menuCtrl;
        this.initail();
    } //end constructor
    resultPage.prototype.initail = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format();
        this.time_selected = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format("HH:mm:ss");
        this.date_selected = date.split('T')[0];
        this.httpService.getStrorageInfo("userId").then(function (userId) {
            _this.userId = userId;
        });
    };
    resultPage.prototype.scanPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "result",
            mode: "result",
            action: "result",
            type: "result",
            doubleScan: false,
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    resultPage.prototype.scanCancelPage = function () {
        var nav = this.app.getRootNav();
        var param = {
            userId: this.userId,
            date_selected: this.date_selected,
            time_selected: this.time_selected,
            location: false,
            process: "pt-ship",
            mode: "shopplatting",
            action: "db-insert-pt-collect-cancel.php",
            type: "PT",
            doubleScan: false,
            useKanban: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN
        };
        nav.push(__WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* scanPage */], param);
    };
    resultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/result/result.html"*/'<ion-header>\n    <ion-row>\n      <ion-col col-2 style="text-align: center;">\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-col>\n      <ion-col col-10 style="padding-top:10px;padding-bottom:10px;font-size:10px;background-color: white;">\n          <div style="border-radius: 4px;height:43px;padding-top:8px;text-align:center;color:white;font-size:18px;background-color: #f53d3d;"><strong>IBQS SCAN TRIGGER V.1.0</strong></div>\n    </ion-col>\n  </ion-row>\n  \n    <div style="margin-top:0px;padding-top:0px;" class="block-package">\n  \n    </div>\n    </ion-header>\n  \n    <ion-content>\n    \n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n          </ion-refresher>\n                  <ion-grid>\n                     \n                    <div style="margin-top:10px;"></div> \n               \n                \n                        <div class ="btn-date">\n                            <ion-item no-lines>\n                              <ion-label>วันที่</ion-label>\n                              <ion-datetime min="2016" displayFormat="DD-MM-YYYY" [(ngModel)]="date_selected">\n                              </ion-datetime>\n                            </ion-item>\n                          </div>\n                  \n                  \n                        <div class ="btn-date">\n                            <ion-item no-lines>\n                              <ion-label>เวลา</ion-label>\n                              <ion-datetime displayFormat="HH:mm:ss" [(ngModel)]="time_selected">\n                              </ion-datetime>\n                            </ion-item>\n                          </div>\n                   \n  \n                  </ion-grid>\n               \n  \n    <!-- this fab is placed at bottom right -->\n    \n    </ion-content>\n    <ion-footer>\n      <div style="height:6px;background-color: red;"></div>\n      <div (click)="scanPage()" class="btn-sl">Result</div>\n  \n    </ion-footer>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/result/result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], resultPage);
    return resultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LogoutPage = /** @class */ (function () {
    function LogoutPage(events, toastCtrl, storage, app, utility, navCtrl, httpService) {
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.app = app;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        var toase = this.toastCtrl.create({
            message: 'ออกจากระบบสำเร็จ...',
            duration: 3000,
            position: 'bottom'
        }).present();
        var nav = this.app.getRootNav();
        this.httpService.logout();
        nav.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        this.events.publish('user:created', "", false, false);
    } //constructor
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], LogoutPage.prototype, "nav", void 0);
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logout',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/logout/logout.html"*/'<ion-header>\n  <ion-navbar color="primary">\n \n      <ion-title>ออกจากระบบ</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" text-end>\n\n<ion-grid class="marginTop">\n  <img src="assets/img/logo.png">\n    <ion-row text center style="margin-top:60px;">\n      <ion-label text-center style="font-size:18px;">ออกจากระบบสำเร็จ</ion-label>\n    </ion-row>\n    <ion-row text center style="margin-top:0px;">\n      <ion-label text-center style="font-size:10px;">Concept Idea Co.,Ltd.</ion-label>\n    </ion-row>\n\n  </ion-grid>\n\n   \n</ion-content>\n'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/logout/logout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__app_services_utility_service__["b" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_http_service__["a" /* HttpService */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(502);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs_user__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassword_forgotpassword__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_scan_scan__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_upload_upload__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_stop_stop__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_start_start__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_keyboard__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_result_result__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//add page







//add new module














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs_user__["a" /* TabsUserPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassword_forgotpassword__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_upload_upload__["a" /* uploadPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_stop_stop__["a" /* stopPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_start_start__["a" /* startPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_result_result__["a" /* resultPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_scan_scan__["a" /* scanPage */],
                __WEBPACK_IMPORTED_MODULE_17__services_utility_service__["a" /* DateFormatPipe */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs_user__["a" /* TabsUserPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_scan_scan__["a" /* scanPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_upload_upload__["a" /* uploadPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_result_result__["a" /* resultPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_start_start__["a" /* startPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_stop_stop__["a" /* stopPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_forgotpassword_forgotpassword__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logout_logout__["a" /* LogoutPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_16__services_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_17__services_utility_service__["a" /* DateFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_17__services_utility_service__["b" /* UtilityService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_upload__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs_user__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stop_stop__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__start_start__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__result_result__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HomePage = /** @class */ (function () {
    function HomePage(events, storage, toastCtrl, utility, app, navCtrl, httpService, _dateFormatPipe, menuCtrl) {
        this.events = events;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.app = app;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this._dateFormatPipe = _dateFormatPipe;
        this.menuCtrl = menuCtrl;
        this.processes = [];
        this.total_monney = 0;
        this.ckData = false;
        this.seg_mode = '1';
        this.sysPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sysPath;
        this.sysName = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sysName;
        this.sysVersion = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sysVersion;
        this.menus = [];
        this.initail();
    } //end constructor
    HomePage.prototype.segmentChangeMode = function (ev) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs_user__["a" /* TabsUserPage */], { home: true });
    };
    HomePage.prototype.getDataStart = function () {
        var _this = this;
        this.httpService.fetchgetm('db-select-operator.php?id=' + this.userId, function (data) {
            console.log('home', data);
            if (data.length != 0) {
                _this.displayname = data.tb98f_operator_name;
                _this.code = data.tb98f_operator_code;
                _this.position = data.position;
                _this.picture = data.tb98f_operator_picture;
                _this.userId = data.tb98f_id;
                _this.events.publish('user:created', data.tb98f_operator_name, data.tb98f_operator_picture, true, data.tb98f_id, data.tb98f_operator_code);
            }
        });
    };
    HomePage.prototype.initail = function () {
        var self = this;
        return new Promise(function (resolve, rejected) {
            try {
                self.monney = "0.00";
                self.finished = "0";
                self.process = "0";
                self.member_monney = "0";
                self.timeStart = self._dateFormatPipe.date_format(new Date(), "yyyy-MM-01");
                self.timeEnd = self._dateFormatPipe.date_today(new Date());
                self.timeDisPlayStart = self._dateFormatPipe.date_format(self.timeStart, "dd");
                self.timeDisPlayStop = self._dateFormatPipe.date_format(self.timeEnd, "dd,MMM yyyy");
                self.d = self._dateFormatPipe.date_format(Date(), "dd MMM yyyy");
                self.httpService.getStrorageInfo("userId").then(function (userId) {
                    self.userId = userId;
                    self.getDataStart();
                    self.getMenu();
                    return resolve(true);
                });
            }
            catch (e) {
                return rejected(e);
            }
        });
        //this.setId = this.intervalGetData();
    };
    HomePage.prototype.getMenu = function () {
        var _this = this;
        this.httpService.fetchgetm('db-select-menu-group.php?to_id=' + this.userId + '&type=2', function (data) {
            _this.menus = data;
        });
    };
    HomePage.prototype.openMenu = function (url) {
        var alias;
        var nav = this.app.getRootNav();
        if (url == "stopPage") {
            alias = __WEBPACK_IMPORTED_MODULE_8__stop_stop__["a" /* stopPage */];
        }
        else if (url == "startPage") {
            alias = __WEBPACK_IMPORTED_MODULE_9__start_start__["a" /* startPage */];
        }
        else if (url == "uploadPage") {
            alias = __WEBPACK_IMPORTED_MODULE_6__upload_upload__["a" /* uploadPage */];
        }
        else if (url == "resultPage") {
            alias = __WEBPACK_IMPORTED_MODULE_10__result_result__["a" /* resultPage */];
        }
        nav.push(alias);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        //this.loadData();
        setTimeout(function () {
            console.log('Async operation has ended');
            try {
            }
            catch (e) { }
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(function () {
            //alert(this.items.length);
            try {
            }
            catch (e) {
                if (e instanceof TypeError) { }
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/home/home.html"*/'<ion-header>\n  <ion-row>\n    <ion-col col-2 style="text-align: center;">\n      <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    </ion-col>\n    <ion-col col-10 style="padding-top:10px;padding-bottom:10px;font-size:10px;background-color: white;">\n        <div style="border-radius: 4px;height:43px;padding-top:8px;text-align:center;color:white;font-size:18px;background-color: #f2782edb;"><strong>{{sysName}} {{sysVersion}}</strong></div>\n  </ion-col>\n</ion-row>\n\n                <div class="top-header-home">\n                  <ion-row>\n                    <ion-col col-3>\n                           <div class="center-cropped">\n                            <img src="assets/img/logo.png">\n                           </div>\n                    </ion-col>\n                    <ion-col col-9>\n                        <div class="card-title">การไฟฟ้านครหลวง</div>\n                        <div class="card-subtitle">ระบบติดตามสถานะการทดสอบและสอบเทียบ</div>\n                        <div class="card-subtitle" style="margin-top:20px;">{{d}}</div>\n                      </ion-col>\n                    </ion-row>\n                </div>  \n\n\n  <div style="margin-top:0px;padding-top:0px;" class="block-package">\n\n  </div>\n  </ion-header>\n\n  <ion-content>\n  \n      <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n        <div style="margin-top: 20px;">\n          <ion-grid>\n            <ion-row>\n              <ion-col (click)="openMenu(\'startPage\')" col-12>\n                <div class="block-menu">\n                  <div class="home-icon" >\n                    <ion-icon name="timer-outline"></ion-icon>\n                  </div>\n                  <div class="home-text-icon">Start</div>\n                </div>\n              </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col (click)="openMenu(\'stopPage\')" col-12>\n                  <div class="block-menu">\n                    <div class="home-icon">\n                      <ion-icon name="stopwatch-outline"></ion-icon>\n                    </div>\n                    <div class="home-text-icon">Stop</div>\n                  </div>\n                </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col (click)="openMenu(\'uploadPage\')" col-12>\n                    <div class="block-menu">\n                      <div class="home-icon">\n                        <ion-icon name="cloud-upload-outline"></ion-icon>\n                      </div>\n                      <div class="home-text-icon">Upload</div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col (click)="openMenu(\'resultPage\')" col-12>\n                    <div class="block-menu">\n                      <div class="home-icon">\n                        <ion-icon name="clipboard-outline"></ion-icon>\n                      </div>\n                      <div class="home-text-icon">Test result</div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n          <div style="margin-top:10px;"></div>\n        </ion-grid>\n        </div>\n\n             \n        \n  <!-- this fab is placed at bottom right -->\n  \n  </ion-content>\n  <ion-footer>\n    <div style="height:6px;background-color: red;"></div>\n  </ion-footer>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_gallery_modal__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

















var scanPage = /** @class */ (function () {
    function scanPage(modalCtrl, alertCtrl, events, storage, keyboard, toastCtrl, utility, app, params, navCtrl, httpService, _dateFormatPipe, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.storage = storage;
        this.keyboard = keyboard;
        this.toastCtrl = toastCtrl;
        this.utility = utility;
        this.app = app;
        this.params = params;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this._dateFormatPipe = _dateFormatPipe;
        this.menuCtrl = menuCtrl;
        this.tmpItem = [];
        this.itemSearch = [];
        this.scanItems = [];
        this.failedItems = [];
        this.failedTotal = 0;
        this.successItems = [];
        this.successTotal = 0;
        this.successQty = 0;
        this.failedQty = 0;
        this.ckOutstock = [];
        this.partno = "N/A";
        this.qty = 0;
        this.scanQty = 0;
        this.unit = "N/A";
        this.kanbanId = "N/A";
        this.status = "N/A";
        this.guide = "N/A";
        this.location = false;
        this.storeLocation = "";
        this.storeName = "";
        this.ckSearch = false;
        this.ckStatus = true;
        this.ckScan = true;
        this.ckSave = false;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.ckeckFailedSave = false;
        this.packing = false;
        this.collected = false;
        this.sale = false;
        this.pt = false;
        this.pd = false;
        this.rm = false;
        this.warningBeforeSave = "";
        this.failedSave = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_FAILED;
        this.successedSave = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_SUCCESSED;
        this.ckLoad = false;
        this.scanItemsInpd = [];
        this.ckInPd = false;
        this.notInStock = "";
        this.ckInstock = true;
        this.ckBtnStatus = true;
        this.doubleScan = false;
        this.countScan = 0;
        this.scanMonitorShow = true;
        this.name1 = "n/a";
        this.name2 = "n/a";
        this.value1 = "n/a";
        this.value2 = "n/a";
        this.cusKb = "";
        this.cusLotsize = 0;
        this.keySearch = "";
        this.remain = "";
        this.mcCk = "";
        this.mcId = "";
        this.lCk = "";
        this.lId = "";
        this.testItems = [];
        this.showHide = false;
        this.checkSave = false;
        this.arrCk = [];
        this.testItemNameSelected = "";
        this.picture_profiles = [];
        this.loading = false;
        this.loadingCover = false;
        this.urls = [];
        this.isLoading = false;
        this.job_no = "";
        this.sample_no = "";
        this.scanMonitorShow = true;
        console.log('time', params.get('time_selected'));
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
    } //end constructor
    scanPage.prototype.openGallery = function (index) {
        var start = 0;
        var photos = [];
        for (var i = 0; i < this.picture_profiles.length; i++) {
            //photos.push({url:this.sysPath+"/uploads/profile/"+this.picture_profiles[i].tb14_picture_1,title:this.displayname});
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9_ionic_gallery_modal__["a" /* GalleryModal */], {
            photos: photos,
            closeIcon: "close",
            initialSlide: index
        });
        modal.present();
    };
    scanPage.prototype.onSelectFile = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var filelist, filesAmount, i_1, filelist_1, filelist_1_1, item, e_1_1, e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        filelist = [];
                        this.isLoading = true;
                        if (!(event.target.files && event.target.files[0])) return [3 /*break*/, 15];
                        filesAmount = event.target.files.length;
                        i_1 = 0;
                        filelist = event.target.files;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        filelist_1 = __asyncValues(filelist);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, filelist_1.next()];
                    case 3:
                        if (!(filelist_1_1 = _b.sent(), !filelist_1_1.done)) return [3 /*break*/, 7];
                        return [4 /*yield*/, filelist_1_1.value];
                    case 4:
                        item = _b.sent();
                        console.log('onSelectFile', item);
                        return [4 /*yield*/, this.onUpload(item).then(function (res) {
                                console.log('path', res, _this.testItemSelected);
                                i_1++;
                            })];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(filelist_1_1 && !filelist_1_1.done && (_a = filelist_1.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, _a.call(filelist_1)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14:
                        if (filesAmount == i_1) {
                            this.isLoading = false;
                            console.log('file amount', filesAmount, i_1);
                        }
                        _b.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    scanPage.prototype.onUpload = function (img) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve, reject) {
            try {
                var formData = new FormData();
                formData.append('file', img, img.name);
                _this.httpService.fetchHttpPostUpload('upload', 'job/' + _this.job_no + '/' + _this.testItemNameSelected + '/' + _this.sample_no, formData, function (res) {
                    return resolve(res);
                });
            }
            catch (e) {
                return reject;
            }
        });
    };
    scanPage.prototype.handleChange = function (event) {
        var _this = this;
        console.log('event', event, this.testItemSelected);
        this.httpService.getStrorageInfo("token").then(function (token) {
            _this.httpService.getJsonHttpGet('test-catalog/' + _this.testItemSelected, token).then(function (res) {
                _this.testItemNameSelected = res.result.data[0].name;
                console.log('test item name ', res, res.result.data[0].name);
            });
        });
    };
    scanPage.prototype.showHideSearch = function () {
        if (this.showHide == true) {
            this.showHide = false;
        }
        else {
            this.showHide = true;
        }
        console.log('showhide', this.showHide);
    };
    scanPage.prototype.scan = function (ev) {
        var _this = this;
        try {
            var cusIdValue = this.revScanValue;
            var tagIdString = this.revScanValue.split(";");
            var id_1 = tagIdString[0];
            var partno_1 = tagIdString[1];
            var location_1 = tagIdString[2];
            //let lotsize = tagIdString[3];
            var lotsize_1 = 0;
            var kanban_1 = tagIdString[4];
            var ckLocation = tagIdString[1];
            var ckExist = [];
            this.keySearch = partno_1;
            console.log("part-no", this.keySearch, partno_1);
            var self_1 = this;
            //get lotsize
            //this.getLotsize(id, this.type).then(data => {
            lotsize_1 = parseInt(tagIdString[3]);
            if (this.step1 == true) {
                if (id_1 && id_1.trim() != '' && !isNaN(+id_1)) {
                    this.checkExits(id_1).then(function (data) {
                        if (data.length > 0) {
                            _this.ckStatus = false;
                            _this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_EXIST;
                        }
                        else {
                            _this.scanItems.push({
                                scanId: id_1,
                                partId: '',
                                partno: partno_1,
                                kanban: kanban_1,
                                lotsize: lotsize_1,
                                packing: _this.packing,
                                collected: _this.collected,
                                sale: _this.sale,
                                pt: _this.pt,
                                location: location_1,
                                trackId: _this.trackId,
                                previousId: _this.previousId,
                                date_selected: _this.date_selected,
                                time_selected: _this.time_selected,
                                status: true,
                                txtStatus: "",
                                items: []
                            });
                            _this.ckStatus = true;
                            if (!isNaN(+id_1)) {
                                _this.qty += lotsize_1;
                            }
                            _this.kanbanId = kanban_1;
                            _this.scanQty = _this.scanItems.length;
                            _this.partno = partno_1;
                            _this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_SUCCESSED;
                            console.log('test item', _this.scanItems);
                            self_1.httpService.getStrorageInfo("token").then(function (token) {
                                console.log('test item token', token);
                                _this.httpService.getJsonHttpGet('test-plan/test-time-plan/' + lotsize_1, token).then(function (res) {
                                    console.log('test item ', res.result.data);
                                    _this.job_no = res.result.data[0].job_no;
                                    _this.sample_no = id_1;
                                    _this.testItems = [];
                                    for (var _i = 0, _a = res.result.data; _i < _a.length; _i++) {
                                        var item = _a[_i];
                                        if (item.sample_no == id_1) {
                                            _this.testItems.push({ id: item.testCatalogId, name: item.test_item });
                                        }
                                    }
                                    console.log('test item', _this.testItems, _this.job_no);
                                });
                            });
                        }
                    }); //end check exist
                }
                else {
                    this.ckStatus = false;
                    this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_FAILED_QR;
                }
            } //end step 1 ----------------------------------------------------------------------------end step 1
            else if (this.step2 == true) {
                if (ckLocation == "L") {
                    this.ckStatus = true;
                }
                else {
                    this.ckStatus = false;
                    this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOTFOUND_LOCATION;
                }
            } //end step 2 ----------------------------------------------------------------------------end step 2
            else if (this.step3 == true) {
                this.ckScan = false;
            } //end step 3 ----------------------------------------------------------------------------end step 3
            //});//get lotsize
            this.revScanValue = "";
        }
        catch (e) {
        }
    };
    scanPage.prototype.setTxtStatus = function (mode) {
        var _this = this;
        this.setScanMode(mode).then(function (data) {
            console.log('data mode', data);
            _this.status = data.status;
            _this.guide = data.guide;
        });
    };
    scanPage.prototype.setTxtGuild = function (process) {
        if (process == "pd-jig" || process == "pd-qg1") {
            this.guide = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_OPERATOR_QR;
        }
        else if (process == "fg-cross" || process == "fg-sale" || process == "fg-outstock" || process == "pd-plan" || process == "fg-plan" || process == "pd-final" || process == "pd-qg") {
            this.guide = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_FG_KANBAN;
        }
        else if (process == "pt-ship" || process == "pt-shop") {
            this.guide = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PT_KANBAN;
        }
        else if (process == "out-rm") {
            this.guide = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_RM_KANBAN;
        }
        else {
            this.guide = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_PD_KANBAN;
        }
    };
    scanPage.prototype.setSaveStatus = function (status) {
        if (status == "OK") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_SUCCESS;
        }
        else if (status == "EXIST") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_EXIST;
        }
        else if (status == "FAILED") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_FAILED;
        }
        else if (status == "NOTINSHOP") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOSHOP;
        }
        else if (status == "NOPLAN") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_NOT_PLAN;
        }
        else if (status == "NOINSTOCK") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOINSTOCK;
        }
        else if (status == "FAILED_SCRAP_OVER") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_FAILED_SCRAP_OVER;
        }
        else if (status == "NOTRACK") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_NO_TRACKK;
        }
        else if (status == "TXT_STATUS_NOREPAIR") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOREPAIR;
        }
        else if (status == "NOSALE") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_NO_SALE;
        }
        else if (status == "NOREPAIR") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOREPAIR;
        }
        else if (status == "NOINCUSTOMER") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_NOINCUSTOMER;
        }
        else if (status == "NOTFOUND") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOTFOUND;
        }
        else if (status == "NOPROCESS") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOPROCESS;
        }
        else if (status == "NOOUTSTOCK") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_NOOUTSTOCK;
        }
        else if (status == "OK_SCRAP") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_OK_SCRAP;
        }
        else if (status == "KB_BLANK") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_BLANK;
        }
        else if (status == "KB_IN_PROCESS") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_ON_PROCESS;
        }
        else if (status == "KB_IN_STOCK") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_INSTOCK;
        }
        else if (status == "KB_IN_SUPPLIER") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_IN_SUPPLIER;
        }
        else if (status == "KB_PACKING") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_PACKING;
        }
        else if (status == "KB_COLLECT") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_COLLECT;
        }
        else if (status == "KB_SALE") {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_KANBAN_SALE;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_FAILED;
        }
    };
    scanPage.prototype.setScanMode = function (mode) {
        var self = this;
        return new Promise(function (resolve, reject) {
            try {
                var txtGuild = void 0;
                // console.log('location 3',self.location,self.mode,self.step2);
                if (self.location == true && self.step2 == true) {
                    txtGuild = { guide: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_LOCATION_KANBAN, status: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_START + ' [' + self.process + ']' };
                    return resolve(txtGuild);
                }
                else {
                    if (self.process == "pd-jig") {
                        self.scanMonitorShow = false;
                        self.name1 = "JIG";
                        self.name2 = "Operator";
                    }
                    else if (self.process == "pd-qg1") {
                        self.scanMonitorShow = false;
                        self.name1 = "LINE";
                        self.name2 = "Operator";
                    }
                    else {
                        self.scanMonitorShow = true;
                    }
                    txtGuild = { guide: self.useKanban, status: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_STATUS_START + ' [' + self.process + ']' };
                    return resolve(txtGuild);
                }
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    scanPage.prototype.showPromptFailed = function (id, index) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ยืนยัน',
            message: 'การลบรายการนี้',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        _this.deleteItemFailed(id, index);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    scanPage.prototype.showPromptSucess = function (id, index) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ยืนยัน',
            message: 'การลบรายการนี้',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        _this.deleteItemSuccess(id, index);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    scanPage.prototype.showPrompt = function (id, index) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ยืนยัน',
            message: 'การลบรายการนี้',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        _this.deleteItem(id, index);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    scanPage.prototype.getDataScanSplit = function (str) {
        return new Promise(function (resolve, reject) {
            var array = str.split(";");
            return resolve(array);
        });
    };
    scanPage.prototype.resetPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ยืนยัน',
            message: 'การลบรายการทั้งหมดนี้',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        _this.clear();
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    scanPage.prototype.savePrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'ยืนยัน',
            message: 'การสงข้อมูลเข้าสูระบบ',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        _this.save();
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    scanPage.prototype.alertPrompt = function (msg) {
        var prompt = this.alertCtrl.create({
            title: 'แจ้งสถานะระบบ',
            message: msg,
            buttons: [
                {
                    text: 'ปิด',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    scanPage.prototype.getItems = function (ev) {
        this.ckSearch = true;
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.tmpItem = this.scanItems.filter(function (item) {
                return (item.kanban.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            this.itemSearch = this.tmpItem;
        }
        else {
            this.itemSearch = [];
            this.ckSearch = false;
        }
        console.log('itemSearch', this.itemSearch.length, this.itemSearch);
    };
    scanPage.prototype.onCancel = function ($event) {
        this.itemSearch = [];
        this.ckSearch = false;
    };
    scanPage.prototype.home = function () {
        this.step2 = false;
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        this.ckScan = true;
    };
    scanPage.prototype.back = function () {
        var _this = this;
        console.log('ckSave', this.ckSave);
        this.stepCheckBack().then(function (data) {
            if (data.step1 == true) {
                _this.ckStatus = true;
                console.log('step 1');
                _this.setScanMode(_this.mode).then(function (data) {
                    _this.status = data.status;
                    _this.guide = data.guide;
                    _this.ckScan = true;
                    _this.ckSave = false;
                });
            }
            else if (data.step2 == true) {
                _this.ckStatus = true;
                console.log('step 2');
                if (_this.location != true) {
                    _this.back();
                }
                else {
                    _this.setScanMode(_this.mode).then(function (data) {
                        _this.status = data.status;
                        _this.guide = data.guide;
                        _this.ckScan = true;
                        _this.ckSave = false;
                    });
                }
                console.log('step 2');
            }
            else if (data.step3 == true) {
                _this.ckStatus = true;
                _this.setScanMode(_this.mode).then(function (data) {
                    _this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_CHECK;
                    _this.warningBeforeSave = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_WARNING;
                    _this.ckScan = false;
                    _this.ckSave = false;
                });
                console.log('step 3');
            }
        });
    };
    scanPage.prototype.next = function () {
        var _this = this;
        console.log('ckSave', this.ckSave);
        this.stepCheckNext().then(function (data) {
            if (data.step1 == true) {
                _this.ckStatus = true;
                console.log('step 1');
                _this.setScanMode(_this.mode).then(function (data) {
                    _this.status = data.status;
                    _this.guide = data.guide;
                    _this.ckScan = true;
                    _this.ckSave = false;
                });
            }
            else if (data.step2 == true) {
                _this.ckStatus = true;
                _this.next();
                console.log('step 2');
            }
            else if (data.step3 == true) {
                _this.ckStatus = true;
                var final = "0";
                _this.setScanMode(_this.mode).then(function (data) {
                    _this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_CHECK;
                    _this.warningBeforeSave = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_WARNING;
                    _this.ckScan = false;
                    _this.ckSave = false;
                });
                console.log('step 3', _this.checkSave);
                _this.checkSaveStatus();
            }
        });
    };
    scanPage.prototype.checkSaveStatus = function () {
        var self = this;
        this.arrCk = [];
        var status;
        for (var c = 0; c < self.scanItems.length; c++) {
            for (var b = 0; b < self.scanItems[c].items.length; b++) {
                if (self.scanItems[c].items[b].status == false || self.scanItems[c].items[b].status == undefined) {
                    console.log("checkSaveStatus", c, b, self.scanItems[c].items[b].status);
                    this.arrCk.push({ status: false });
                }
                // return resolve(status);
            }
        }
    };
    scanPage.prototype.checkExist = function (id) {
        var self = this;
        return new Promise(function (resolve, reject) {
            try {
                self.httpService.fetchgetm('db-select-check-pd-in.php?id=' + id, function (res) {
                    return resolve(res);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    scanPage.prototype.stepCheckNext = function () {
        var self = this;
        var step = [];
        return new Promise(function (resolve, reject) {
            try {
                console.log('step 0', self.step1, self.step2, self.step3);
                if (self.step1 == true) {
                    self.step1 = false;
                    self.step2 = true;
                    self.step3 = false;
                }
                else if (self.step2 == true) {
                    self.step1 = false;
                    self.step2 = false;
                    self.step3 = true;
                }
                else if (self.step3 == true) {
                    //self.step3 = false;
                    self.step2 = false;
                    self.step1 = false;
                }
                return resolve({ step1: self.step1, step2: self.step2, step3: self.step3 });
            }
            catch (e) {
                return reject(true);
            }
        });
    };
    scanPage.prototype.stepCheckBack = function () {
        var self = this;
        var step = [];
        return new Promise(function (resolve, reject) {
            try {
                console.log('step 0', self.step1, self.step2, self.step3);
                if (self.step1 == true) {
                    self.step2 = false;
                    self.step3 = false;
                }
                else if (self.step2 == true) {
                    self.step1 = true;
                    self.step2 = false;
                    self.step3 = false;
                }
                else if (self.step3 == true) {
                    self.step3 = false;
                    self.step2 = true;
                    self.step1 = false;
                }
                return resolve({ step1: self.step1, step2: self.step2, step3: self.step3 });
            }
            catch (e) {
                return reject(true);
            }
        });
    };
    scanPage.prototype.clear = function () {
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
    };
    scanPage.prototype.save = function () {
        var _this = this;
        this.ckSave = true;
        this.ckLoad = true;
        this.failedItems = [];
        this.successItems = [];
        this.successTotal = 0;
        this.failedTotal = 0;
        console.log('process', this.process);
        console.log('scanId', this.scanItems);
        this.loopSave('').then(function (cb) {
            _this.ckLoad = false;
            _this.ckStatus = true;
            _this.status = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].TXT_SUM_SUCCESSED;
        });
    };
    scanPage.prototype.loopSave = function (matlot) {
        console.log('xxx');
        var self = this;
        var matlotId;
        var lotValue;
        return new Promise(function (resolve, reject) {
            try {
                var _loop_1 = function (i) {
                    self.saveData(self.scanItems, i, matlot).then(function (cb) {
                        //  let items = cb.result;
                        if (1) {
                            self.pushSuccess(self.scanItems, i, self.setSaveStatus("OK"), []).then(function (ckstatuss) {
                                // self.successTotal += parseInt(self.scanItems[cb.i].lotsize);
                                //self.successQty = self.successItems.length;
                            });
                        }
                        else {
                            self.pushFaile(self.scanItems, i, self.setSaveStatus(cb.status), cb.result).then(function (ckstatusf) {
                                //self.failedItems[i].remain = remain;
                                //console.log('fail คงเหลือ', remain,self.failedItems);
                                self.failedTotal += parseInt(self.scanItems[i].lotsize);
                                self.failedQty = self.failedItems.length;
                            });
                        }
                        if (i == self.scanItems.length - 1) {
                            return resolve(i);
                        }
                    });
                };
                for (var i = 0; i < self.scanItems.length; i++) {
                    _loop_1(i);
                }
            }
            catch (e) {
                return reject(true);
            }
        });
    };
    scanPage.prototype.pushSuccess = function (arrValue, i, txtStatus, items) {
        var self = this;
        return new Promise(function (resolve, reject) {
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
            }
            catch (e) {
                return reject(false);
            }
        });
    };
    scanPage.prototype.pushFaile = function (arrValue, i, txtStatus, items) {
        var self = this;
        return new Promise(function (resolve, reject) {
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
            }
            catch (e) {
                return reject(false);
            }
        });
    };
    scanPage.prototype.saveData = function (arrValue, i, matlot) {
        var self = this;
        console.log('scanId 1', arrValue);
        return new Promise(function (resolve, reject) {
            try {
                var value_1 = {
                    "id": 0,
                    "sample": { "id": parseInt(arrValue[i].scanId) },
                    "test_request": { "id": parseInt(arrValue[i].lotsize) },
                    "test_catalog": { "id": parseInt(arrValue[i].kanban) },
                    "test_item": this.testItemSelected
                };
                console.log('value', arrValue[i], value_1);
                self.httpService.getStrorageInfo("token").then(function (token) {
                    self.httpService.getHttpJsonPost(self.action, value_1, token).then(function (res) {
                        var response = JSON.parse(res.result._body);
                        console.log('response', response);
                        resolve(response);
                    });
                });
            }
            catch (e) {
                return reject(true);
            }
        });
    };
    scanPage.prototype.checkExits = function (id) {
        console.log('checkExits', id);
        var self = this;
        return new Promise(function (resolve, reject) {
            try {
                var ckExist = self.scanItems.filter(function (item) {
                    return (item.scanId.toLowerCase().indexOf(id.toLowerCase()) > -1);
                });
                resolve(ckExist);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    scanPage.prototype.strValidate = function (str) {
        console.log('cus scan id', str);
        return new Promise(function (resolve, reject) {
            try {
                var re = /\-|\/|\:|\.|\ |[.*+?^${}()|[\]\\]/gi;
                var result = str.replace(re, "").toLowerCase();
                console.log('cus scan id', str, '-', result);
                return resolve(result);
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    scanPage.prototype.deleteItemFailed = function (id, index) {
        this.failedItems.splice(index, 1); //remove element from array
    };
    scanPage.prototype.deleteItemSuccess = function (id, index) {
        this.successItems.splice(index, 1); //remove element from array
    };
    scanPage.prototype.deleteItem = function (id, index) {
        this.arrCk = [];
        if (this.itemSearch.length > 0) {
            this.itemSearch.splice(index, 1);
        }
        this.scanQty -= 1;
        this.qty -= parseInt(this.scanItems[index].lotsize);
        this.scanItems.splice(index, 1); //remove element from array
        if (this.scanQty == 0) {
            this.clear();
        }
        this.checkSaveStatus();
    };
    scanPage.prototype.initail = function () {
        var _this = this;
        this.ckStatus = true;
        var date = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format();
        //this.time_selected = moment().format("HH:mm:ss");
        //this.date_selected = date.split('T')[0];
        this.httpService.getStrorageInfo("userId").then(function (userId) {
            _this.userId = userId;
        });
        this.tinyMCEConfiguration = {
            base_url: '/tinymce',
            suffix: '.min'
        };
    };
    scanPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        //this.loadData();
        setTimeout(function () {
            console.log('Async operation has ended');
            try {
                // this.getDataSummary();
            }
            catch (e) { }
            refresher.complete();
        }, 2000);
    };
    scanPage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        setTimeout(function () {
            //alert(this.items.length);
            try {
                //this.getDataSummary();
            }
            catch (e) {
                if (e instanceof TypeError) { }
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    scanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/scan/scan.html"*/'<ion-content>\n    <div style="height:8px;background-color:#b8db32"></div>\n    <div *ngIf="ckScan==true">\n        <ion-item class="pd-0">\n            <ion-input autofocus="true" [(ngModel)]="revScanValue" (keyup.enter)="scan($event)" class="scan-input"\n                type="text" placeholder="{{guide}}"></ion-input>\n        </ion-item>\n    </div>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div *ngIf="ckSave!=true && step3==true" class="warning-box">{{warningBeforeSave}} <ion-icon name="send"></ion-icon>\n    </div>\n    <div *ngIf="ckSave==true" class="failed-box">ส่งข้อมูลสำเร็จ</div>\n    <ion-grid>\n        <div style="margin-top:10px;"></div>\n        <div style="text-align: center;" class="col-md-12" *ngIf="ckLoad==true">\n            <img style="width: 50%;" src="assets/img/custom-icons/loader-5.gif">\n            <p><label>กำลังดำเนินการ...</label></p>\n        </div>\n        <div *ngIf="ckSave==true">\n            <div *ngFor="let item of successItems;let i=index;">\n                <div class="success-box-list">\n                    <div class="col-md-12">\n                        <div class="row">\n                            <ion-col col-11>\n                                <div class="list-box-success">\n                                    <div class="title"><span>{{item.partno}}</span></div>\n                                    <div class="sub-title"><span>{{item.kanban}} {{item.remain}}| {{item.txtStatus}}\n                                        </span></div>\n                                </div>\n                            </ion-col>\n                            <ion-col col-1 (click)="showPromptSucess(item.scanId,i)">\n                                <div class="btn-box-in-list-failed">\n                                    <ion-icon name="md-close"></ion-icon>\n                                </div>\n                            </ion-col>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf="scanItems.length>0 && ckSave!=true">\n                <div class="col-md-12" *ngFor="let item of scanItems;let i=index;">\n                    <div class="row">\n                        <ion-col col-10>\n                            <div class="list-box">\n                                <div class="title"><span>{{item.partno}}</span></div>\n                                <div class="sub-title" *ngIf="scanMonitorShow==true && process!=\'pd-final\'">\n                                    <span>Serial no / {{item.location}}</span></div>\n                                <div class="sub-title-failed"><span>{{item.txtStatus}}</span></div>\n                            </div>\n                        </ion-col>\n                        <ion-col col-2>\n                            <div class="row">\n                                <div class="btn-circle" (click)="showPrompt(item.scanId,i)">\n                                    <ion-icon name="md-close"></ion-icon>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </div>\n                </div>\n        </div>\n    </ion-grid>\n    <div>\n        <ion-list>\n            <ion-item>\n              <ion-label>เลือกหัวข้อทดสอบ</ion-label>\n              <ion-select (ionChange)="handleChange($event)" [(ngModel)]="testItemSelected">\n                <ion-option *ngFor="let item of testItems" value="{{item.id}}">{{item.name}}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n    </div>\n    <div>\n        <ion-grid>\n            <ion-row>\n                <ion-col size="2">\n                    <div class="box-img" *ngIf="isLoading">\n                        <div class="box-loading">\n                            <img src="./assets/img/loading.gif">\n                        </div>\n                    </div>\n                    <div class="box-img" *ngIf="!isLoading">\n                        <label for="file-input">\n                            <img src="./assets/img/custom-icons/ea-add-1.png"/>\n                        </label>\n                        <input style="padding-left: 20px;display: none;" id="file-input" type="file" (change)="onSelectFile($event)" multiple/>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                   \n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <!---result-->\n    <div>\n\n    </div>\n    <!-- this fab is placed at bottom right -->\n</ion-content>\n\n<ion-footer>\n    <div style="height:6px;background-color: red;"></div>\n    <div class="footer-scan">\n        <div class="row">\n            <div class="circle" (click)="home()"><ion-icon name="logo-windows"></ion-icon></div>\n            <div class="circle" (click)="back()"><ion-icon name="arrow-back"></ion-icon></div>\n            <div *ngIf="step3!=true" class="circle" (click)="next()"><ion-icon name="arrow-forward"></ion-icon></div>\n            <div *ngIf="step3==true" class="circle"><ion-icon name="arrow-forward"></ion-icon></div>\n            <div class="circle" (click)="resetPrompt()"><ion-icon name="refresh"></ion-icon></div>\n            <div *ngIf="step3==true && arrCk.length == 0" class="circle" (click)="savePrompt()">\n                <ion-icon\n                    name="send"></ion-icon>\n\n            </div>\n        </div>\n\n    </div>\n</ion-footer>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/scan/scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["b" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_4__app_services_utility_service__["a" /* DateFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], scanPage);
    return scanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = /** @class */ (function () {
    function LoginPage(events, modalCtrl, toastCtrl, storage, app, utility, navCtrl, httpService) {
        var _this = this;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.app = app;
        this.utility = utility;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.sysPath = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sysPath;
        this.sysName = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sysName;
        this.sysVersion = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].sysVersion;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.loginTab = "login";
        // this.checkLogin();
        this.httpService.getStrorageInfo("userId").then(function (data) {
            if (data != null) {
                _this.httpService.fetchgetm('db-select-operator.php?id=' + data, function (data) {
                    if (data.length != 0) {
                        _this.displayname = data.tb98f_operator_name;
                        _this.code = data.tb98f_operator_code;
                        _this.position = data.position;
                        _this.id = data.tb98f_id;
                        _this.storage.set('uid', _this.id);
                        _this.events.publish('user:created', data.tb98f_operator_name, data.tb98f_operator_picture, true, data.tb98f_id, data.tb98f_operator_cod);
                        setTimeout(function () {
                            var nav = _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                            nav.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                        }, 3000);
                        _this.toastCtrl.create({ message: 'กำลังนำคุณเข้าสู่ระบบ...', duration: 3000, position: 'bottom' }).present();
                    }
                });
            }
            else {
            }
        });
    } //constructor
    LoginPage.prototype.login = function () {
        var _this = this;
        var value = "username=" + this.username + "&password=" + this.password;
        var token;
        this.httpService.getHttpUrlEncode('auth/signin', value).then(function (res) {
            console.log('login res', res);
            console.log('get login status', JSON.parse(res.result._body).accessToken);
            if (JSON.parse(res.result._body).accessToken) {
                token = JSON.parse(res.result._body).accessToken;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // this.httpService.setLocalStorageOne('token', token).then(res => {
                // })
                _this.httpService.setSessionToken(token);
                setTimeout(function () {
                    var nav = _this.app.getRootNav();
                    nav.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }, 3000);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/login/login.html"*/'<ion-header>\n\n</ion-header>\n<ion-content class="card-background-page" text-end>\n  <div padding style="margin-top:140px;">\n\n      <div [ngSwitch]="loginTab">\n          <ion-list >\n      <ion-card>\n        <ion-item>\n          <div>\n            <img style="margin:auto;width: 120px;" src="assets/img/logo.png">\n          </div>\n          \n        </ion-item>\n        <ion-card-header>\n          เข้าสู่ระบบ\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <ion-input [(ngModel)]="username"  type="text" placeholder="ชื่อผู้ใช้งาน"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input [(ngModel)]="password"  type="password" placeholder="รหัสผ่าน"></ion-input>\n            </ion-item>\n            <div><button ion-button (click)="login()">เข้าสู่ระบบ</button></div>\n            <div style="font-size: 12px;color:red;">{{status}}</div>\n            <div style="margin-top:20px;" class="text-top">{{sysName}} {{sysVersion}} By <a href="https://ssj.co.th">SSJ TECHNOLOGY CO.,LTD.</a></div>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n    </div>\n    \n  </div>\n</ion-content>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__app_services_utility_service__["b" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_http_service__["a" /* HttpService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 356,
	"./af.js": 356,
	"./ar": 357,
	"./ar-dz": 358,
	"./ar-dz.js": 358,
	"./ar-kw": 359,
	"./ar-kw.js": 359,
	"./ar-ly": 360,
	"./ar-ly.js": 360,
	"./ar-ma": 361,
	"./ar-ma.js": 361,
	"./ar-sa": 362,
	"./ar-sa.js": 362,
	"./ar-tn": 363,
	"./ar-tn.js": 363,
	"./ar.js": 357,
	"./az": 364,
	"./az.js": 364,
	"./be": 365,
	"./be.js": 365,
	"./bg": 366,
	"./bg.js": 366,
	"./bm": 367,
	"./bm.js": 367,
	"./bn": 368,
	"./bn-bd": 369,
	"./bn-bd.js": 369,
	"./bn.js": 368,
	"./bo": 370,
	"./bo.js": 370,
	"./br": 371,
	"./br.js": 371,
	"./bs": 372,
	"./bs.js": 372,
	"./ca": 373,
	"./ca.js": 373,
	"./cs": 374,
	"./cs.js": 374,
	"./cv": 375,
	"./cv.js": 375,
	"./cy": 376,
	"./cy.js": 376,
	"./da": 377,
	"./da.js": 377,
	"./de": 378,
	"./de-at": 379,
	"./de-at.js": 379,
	"./de-ch": 380,
	"./de-ch.js": 380,
	"./de.js": 378,
	"./dv": 381,
	"./dv.js": 381,
	"./el": 382,
	"./el.js": 382,
	"./en-au": 383,
	"./en-au.js": 383,
	"./en-ca": 384,
	"./en-ca.js": 384,
	"./en-gb": 385,
	"./en-gb.js": 385,
	"./en-ie": 386,
	"./en-ie.js": 386,
	"./en-il": 387,
	"./en-il.js": 387,
	"./en-in": 388,
	"./en-in.js": 388,
	"./en-nz": 389,
	"./en-nz.js": 389,
	"./en-sg": 390,
	"./en-sg.js": 390,
	"./eo": 391,
	"./eo.js": 391,
	"./es": 392,
	"./es-do": 393,
	"./es-do.js": 393,
	"./es-mx": 394,
	"./es-mx.js": 394,
	"./es-us": 395,
	"./es-us.js": 395,
	"./es.js": 392,
	"./et": 396,
	"./et.js": 396,
	"./eu": 397,
	"./eu.js": 397,
	"./fa": 398,
	"./fa.js": 398,
	"./fi": 399,
	"./fi.js": 399,
	"./fil": 400,
	"./fil.js": 400,
	"./fo": 401,
	"./fo.js": 401,
	"./fr": 402,
	"./fr-ca": 403,
	"./fr-ca.js": 403,
	"./fr-ch": 404,
	"./fr-ch.js": 404,
	"./fr.js": 402,
	"./fy": 405,
	"./fy.js": 405,
	"./ga": 406,
	"./ga.js": 406,
	"./gd": 407,
	"./gd.js": 407,
	"./gl": 408,
	"./gl.js": 408,
	"./gom-deva": 409,
	"./gom-deva.js": 409,
	"./gom-latn": 410,
	"./gom-latn.js": 410,
	"./gu": 411,
	"./gu.js": 411,
	"./he": 412,
	"./he.js": 412,
	"./hi": 413,
	"./hi.js": 413,
	"./hr": 414,
	"./hr.js": 414,
	"./hu": 415,
	"./hu.js": 415,
	"./hy-am": 416,
	"./hy-am.js": 416,
	"./id": 417,
	"./id.js": 417,
	"./is": 418,
	"./is.js": 418,
	"./it": 419,
	"./it-ch": 420,
	"./it-ch.js": 420,
	"./it.js": 419,
	"./ja": 421,
	"./ja.js": 421,
	"./jv": 422,
	"./jv.js": 422,
	"./ka": 423,
	"./ka.js": 423,
	"./kk": 424,
	"./kk.js": 424,
	"./km": 425,
	"./km.js": 425,
	"./kn": 426,
	"./kn.js": 426,
	"./ko": 427,
	"./ko.js": 427,
	"./ku": 428,
	"./ku.js": 428,
	"./ky": 429,
	"./ky.js": 429,
	"./lb": 430,
	"./lb.js": 430,
	"./lo": 431,
	"./lo.js": 431,
	"./lt": 432,
	"./lt.js": 432,
	"./lv": 433,
	"./lv.js": 433,
	"./me": 434,
	"./me.js": 434,
	"./mi": 435,
	"./mi.js": 435,
	"./mk": 436,
	"./mk.js": 436,
	"./ml": 437,
	"./ml.js": 437,
	"./mn": 438,
	"./mn.js": 438,
	"./mr": 439,
	"./mr.js": 439,
	"./ms": 440,
	"./ms-my": 441,
	"./ms-my.js": 441,
	"./ms.js": 440,
	"./mt": 442,
	"./mt.js": 442,
	"./my": 443,
	"./my.js": 443,
	"./nb": 444,
	"./nb.js": 444,
	"./ne": 445,
	"./ne.js": 445,
	"./nl": 446,
	"./nl-be": 447,
	"./nl-be.js": 447,
	"./nl.js": 446,
	"./nn": 448,
	"./nn.js": 448,
	"./oc-lnc": 449,
	"./oc-lnc.js": 449,
	"./pa-in": 450,
	"./pa-in.js": 450,
	"./pl": 451,
	"./pl.js": 451,
	"./pt": 452,
	"./pt-br": 453,
	"./pt-br.js": 453,
	"./pt.js": 452,
	"./ro": 454,
	"./ro.js": 454,
	"./ru": 455,
	"./ru.js": 455,
	"./sd": 456,
	"./sd.js": 456,
	"./se": 457,
	"./se.js": 457,
	"./si": 458,
	"./si.js": 458,
	"./sk": 459,
	"./sk.js": 459,
	"./sl": 460,
	"./sl.js": 460,
	"./sq": 461,
	"./sq.js": 461,
	"./sr": 462,
	"./sr-cyrl": 463,
	"./sr-cyrl.js": 463,
	"./sr.js": 462,
	"./ss": 464,
	"./ss.js": 464,
	"./sv": 465,
	"./sv.js": 465,
	"./sw": 466,
	"./sw.js": 466,
	"./ta": 467,
	"./ta.js": 467,
	"./te": 468,
	"./te.js": 468,
	"./tet": 469,
	"./tet.js": 469,
	"./tg": 470,
	"./tg.js": 470,
	"./th": 471,
	"./th.js": 471,
	"./tk": 472,
	"./tk.js": 472,
	"./tl-ph": 473,
	"./tl-ph.js": 473,
	"./tlh": 474,
	"./tlh.js": 474,
	"./tr": 475,
	"./tr.js": 475,
	"./tzl": 476,
	"./tzl.js": 476,
	"./tzm": 477,
	"./tzm-latn": 478,
	"./tzm-latn.js": 478,
	"./tzm.js": 477,
	"./ug-cn": 479,
	"./ug-cn.js": 479,
	"./uk": 480,
	"./uk.js": 480,
	"./ur": 481,
	"./ur.js": 481,
	"./uz": 482,
	"./uz-latn": 483,
	"./uz-latn.js": 483,
	"./uz.js": 482,
	"./vi": 484,
	"./vi.js": 484,
	"./x-pseudo": 485,
	"./x-pseudo.js": 485,
	"./yo": 486,
	"./yo.js": 486,
	"./zh-cn": 487,
	"./zh-cn.js": 487,
	"./zh-hk": 488,
	"./zh-hk.js": 488,
	"./zh-mo": 489,
	"./zh-mo.js": 489,
	"./zh-tw": 490,
	"./zh-tw.js": 490
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 823;

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_http_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(params, app, httpService) {
        this.params = params;
        this.app = app;
        this.httpService = httpService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        //tab1Root = HomeUserPage;
        this.post = false;
        this.shop = false;
        this.login = false;
        this.home = true;
        this.post = params.get('post');
        this.shop = params.get('shop');
        this.login = params.get('login');
        this.home = params.get('home');
        if (this.shop == undefined) {
            this.home = true;
        }
        console.log('tab', this.post, this.shop, this.login, this.home);
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.httpService.hasLoggedIn().then(function (data) {
            if (data != true) {
                _this.tabRef.select(0);
            }
            else {
                console.log('post', _this.post);
                if (_this.post == true) {
                    _this.tabRef.select(2);
                    _this.post = false;
                }
                else if (_this.shop == true) {
                    _this.tabRef.select(3);
                    _this.shop = false;
                }
                else if (_this.login == true) {
                    _this.tabRef.select(0);
                    _this.login = false;
                }
                else if (_this.home == true) {
                    _this.tabRef.select(0);
                    _this.home = false;
                }
                else {
                    _this.tabRef.select(3);
                }
            }
        });
    };
    TabsPage.prototype.ionSelected = function () {
        var _this = this;
        var navCtr = this.app.getRootNav();
        this.httpService.hasLoggedIn().then(function (data) {
            if (data != true) {
                navCtr.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                _this.tabRef.select(0);
            }
            else {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/tabs/tabs.html"*/'\n<ion-tabs #myTabs tabsPlacement="bottom" color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="หน้าแรก" tabIcon="md-home" (ionSelect)="ionSelected()"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="รับรถยนต์" tabIcon="md-add-circle" (ionSelect)="ionSelected()"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="สถานะบริการ" tabIcon="md-notifications" (ionSelect)="ionSelected()"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__app_services_http_service__["a" /* HttpService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_http_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(params, viewCtrl, toastCtrl, app, navCtrl, httpService) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.phone = "";
    }
    ForgotPasswordPage.prototype.accept = function () {
        var _this = this;
        console.log('phone', this.phone);
        if (this.phone != null && this.phone != undefined && this.phone != "") {
            this.httpService.fetchget('getJONS_forgot_password.php?mobile=' + this.phone, function (response) {
                if (response['success'] == true) {
                    _this.toastCtrl.create({ message: 'ส่งรหัสเรียบร้อยแล้วค่ะ...', duration: 3000, position: 'bottom' }).present();
                    _this.viewCtrl.dismiss();
                }
                else {
                    _this.toastCtrl.create({ message: 'ไม่พบเบอร์โทรศัพท์ในระบบค่ะ...', duration: 3000, position: 'bottom' }).present();
                }
            });
        }
        else {
            this.toastCtrl.create({ message: 'กรุณาใส่เบอร์โทรศัพท์ค่ะ...', duration: 3000, position: 'bottom' }).present();
        }
    };
    ForgotPasswordPage.prototype.cancel = function () {
        //this.toastCtrl.create({message: 'ส่งรหัสไปที่อีเมล์ของคุณเรียบร้อยแล้วค่ะ...',duration: 3000,position: 'bottom'}).present();
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ForgotPasswordPage.prototype, "nav", void 0);
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/forgotpassword/forgotpassword.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>ฟอร์มขอรับรหัสผ่าน</ion-title>\n    </ion-navbar>\n    <ion-nav [root]="rootPage"></ion-nav>\n  </ion-header>\n  \n  <ion-content >\n  \n        <ion-card>\n                \n                  <ion-card-header>\n                    ใส่เบอร์โทรศัพท์ที่ลงทะเบียน\n                  </ion-card-header>\n                \n                  <ion-card-content>\n                      <ion-list>\n                          <ion-item>\n                            <ion-label floating>เบอร์โทรศัพท์</ion-label>\n                            <ion-input [(ngModel)]="phone" type="number"></ion-input>\n                          </ion-item>\n                        \n                       \n                          <ion-row align-items-baseline>\n                              <button ion-button full round (click)="accept()">ขอรับรหัสผ่าน</button>\n                          </ion-row>\n                          <ion-row align-items-baseline>\n                                <button ion-button full round (click)="cancel()">ยกเลิก</button>\n                            </ion-row>\n                         \n                        </ion-list>\n                        \n                  </ion-card-content>\n                \n                </ion-card>\n  </ion-content>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/pages/forgotpassword/forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__app_services_http_service__["a" /* HttpService */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_logout_logout__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_utility_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//add page



//add class






var MyApp = /** @class */ (function () {
    function MyApp(httpService, events, storage, platform, statusBar) {
        var _this = this;
        this.httpService = httpService;
        this.events = events;
        //rootPage: any = TabsPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.sysPath = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].sysPath;
        this.sysName = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].sysName;
        this.sysVersion = __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].sysVersion;
        platform.ready().then(function () {
            statusBar.styleDefault();
            _this.httpService.getStrorageInfo("userId").then(function (userId) {
                if (userId != null && userId != undefined) {
                    _this.userId = userId;
                    httpService.hasLoggedIn().then(function (data) {
                        _this.haslogin = data;
                        if (_this.haslogin) {
                            _this.setId = _this.intervalGetData();
                        }
                        console.log('app userId', _this.haslogin, userId);
                    }); //login
                }
                else {
                    _this.pageLogin();
                    console.log('app userId', _this.haslogin, userId);
                }
            }); //userId
        }); //stucture
        events.subscribe('user:created', function (displayname, picture, haslogin, userId, mode) {
            _this.picture = picture;
            _this.displayname = displayname;
            _this.haslogin = haslogin;
            _this.userId = userId;
            _this.modeUse = mode;
            console.log('Welcome to ibqs', displayname, picture, haslogin, userId, mode);
        });
    } //end constructor
    MyApp.prototype.getDataStart = function () {
        var _this = this;
        this.httpService.fetchgetm('db-select-operator.php?id=' + this.userId, function (data) {
            console.log('home', data);
            if (data.length != 0) {
                _this.displayname = data.tb98f_operator_name;
                _this.code = data.tb98f_operator_code;
                _this.position = data.position;
                _this.picture = data.tb98f_operator_picture;
                _this.userId = data.tb98f_id;
                _this.events.publish('user:created', data.tb98f_operator_name, data.tb98f_operator_picture, true, data.tb98f_id, data.tb98f_operator_code);
            }
        });
    };
    MyApp.prototype.intervalGetData = function () {
        var _this = this;
        var counter = 2;
        return setInterval(function () {
            if (counter === 0) {
                clearInterval(_this.setId);
            }
            _this.getDataStart();
            counter--;
            //console.log('------this.setId------',this.setId,counter,'ccc');
        }, 3600);
    };
    // troggle menu
    MyApp.prototype.pageHome = function () { this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], { home: true }); };
    MyApp.prototype.pageLogin = function () { this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], { home: true }); };
    MyApp.prototype.pageLogout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_logout_logout__["a" /* LogoutPage */], { home: true });
        clearInterval(this.setId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n        <ion-item *ngIf="picture">\n            <ion-avatar item-start>\n                <img src="{{sysPath}}/picture/operator/{{picture}}">\n            </ion-avatar>\n            <h2 (click)="openPageProfile()">{{displayname}}</h2>\n            <p>รหัส {{code}} ตำแหน่ง {{position}}</p>\n          </ion-item> \n          <button ion-item (click)="pageHome()" *ngIf="haslogin">\n            <ion-icon name="home"></ion-icon> หน้าหลัก\n          </button>\n      <button ion-item (click)="pageLogin()" *ngIf="!haslogin">\n        <ion-icon name="lock"></ion-icon> เข้าสู่ระบบ\n      </button>\n      <button ion-item (click)="pageLogout()" *ngIf="haslogin">\n        <ion-icon name="log-out"></ion-icon> ออกจากระบบ\n      </button>\n      <button ion-item menuClose>\n        <ion-icon name="close"></ion-icon> ปิดเมนู</button>\n        <div style="padding:4px;font-size:12px; text-align:right;">\n          {{sysName}} {{sysVersion}}\n        </div>\n    \n    </ion-list>\n   \n\n  </ion-content>\n</ion-menu>\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/bizqsoft/Documents/project/ionic/scan-trigger-mea/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7__services_utility_service__["b" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_7__services_utility_service__["a" /* DateFormatPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[497]);
//# sourceMappingURL=main.js.map