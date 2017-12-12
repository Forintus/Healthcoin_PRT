import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Toast } from 'ionic-angular/components/toast/toast';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ElementHandleEventFn } from '@angular/core/src/view';

/*
  Generated class for the AlertsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertsProvider {

  private _toastMsg: Toast;
  
  constructor(public http: HttpClient, private toastCtrl: ToastController, private alertCtrl: AlertController) {
    console.log('Constructing Alerts Provider');
  }

  public Toast = {
    show: (text: string, duration?, position?, closeButton?, btnText?) => {
      this._toastMsg = this.toastCtrl.create({
        message: text,
        duration: duration || closeButton ? null : 2000,
        position: position || 'top',
        showCloseButton: closeButton || false,
        closeButtonText: btnText || 'OK'
      });
      this._toastMsg.present();
    },
    hide() {
      this._toastMsg.dismiss();
    }
  }

  public Alert = {
    confirm: (title?, msg?) => {
      return new Promise((resolve, reject) => {
        let alert = this.alertCtrl.create({
          title: title || 'Confirm',
          message: msg || 'Do you want continue?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                reject(false);
              }
            },
            {
              text: 'OK',
              handler: () => {
                resolve(true);
              }
            }
          ]
        });
        alert.present();
      });

    },
    alert: (msg, title?) => {
      let alert = this.alertCtrl.create({
        title: title || 'Alert',
        subTitle: msg,
        buttons: ['Dismiss']
      });

      alert.present();
    }
  }
}