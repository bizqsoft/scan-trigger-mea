
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class UtilityService {

  constructor(private toastCtrl: ToastController) {

  }


}
export class DateFormatPipe extends DatePipe implements PipeTransform {
  date_start(value: any, args?: any): any {
     ///MMM/dd/yyyy 
     return super.transform(value, "yyyy-MM-01");
  }
  date_format(value: any, format:string, args?: any): any {
    ///MMM/dd/yyyy 
    return super.transform(value, format);
 }

 date_today(value: any, args?: any): any {
  ///MMM/dd/yyyy 
  return super.transform(value, "yyyy-MM-dd");
}
}