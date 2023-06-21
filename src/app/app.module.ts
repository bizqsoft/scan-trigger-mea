import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//add page
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsUserPage } from '../pages/tabs/tabs-user';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { ForgotPasswordPage } from '../pages/forgotpassword/forgotpassword';
import { scanPage } from '../pages/scan/scan';
//add new module
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { MyApp } from './app.component';
import {HttpService} from './services/http.service';
import { DateFormatPipe } from './services/utility.service';
import {UtilityService} from './services/utility.service';
import { DatePicker } from '@ionic-native/date-picker';
import { uploadPage } from '../pages/upload/upload';
import { stopPage } from '../pages/stop/stop';
import { startPage } from '../pages/start/start';
import { Keyboard } from '@ionic-native/keyboard';
import { resultPage } from '../pages/result/result';

@NgModule({
  declarations: [ //add page
    MyApp,
    TabsPage,
    TabsUserPage,
    LoginPage,
    LogoutPage,
    ForgotPasswordPage,
    uploadPage,
    HomePage,
    stopPage,
    startPage,
    resultPage,
    scanPage,
    DateFormatPipe
  ],
  entryComponents: [ //add page
    MyApp,
    TabsPage,
    TabsUserPage,
    LoginPage,
    scanPage,
    uploadPage,
    resultPage,
    startPage,
    stopPage,
    ForgotPasswordPage,
    LogoutPage,
    HomePage
  ],
  imports: [ //add module
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
 
    
  ],
  bootstrap: [IonicApp],
  
   providers: [ //add plunin
    StatusBar,
    IonicStorageModule,
    Toast,
    HttpService,
    DatePicker,
    Keyboard,
    DateFormatPipe,
    UtilityService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
