import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private selectedTheme: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private settingsProvider: SettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

    this.settingsProvider.getActiveTheme()
      .subscribe(theme => {
        this.selectedTheme = theme
      })
      .unsubscribe();
  }

  themeChanged(theme) {
    this.settingsProvider.setActiveTheme(theme);
  }
}