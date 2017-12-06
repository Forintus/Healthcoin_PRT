import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../providers/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ProductsPage';
  selectedTheme: string;
  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public translateService: TranslateService, private settingsProvider: SettingsProvider ) {

    this.settingsProvider.getActiveTheme().subscribe(theme => this.selectedTheme = theme);

    // this.selectedTheme = "light-theme";

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'hc-healthcoin', component: 'HomePage' },
      { title: 'Products', icon: 'hc-store', component: 'ProductsPage' },
      // { title: 'Spaardoel', icon: 'hc-store', component: 'FavoritesPage' },
      { title: 'Cart', icon: 'hc-piggy-bank', component: 'CartPage' },
      { title: 'Settings', icon: 'hc-cog2', component: 'SettingsPage' }
    ];
  }

  initializeApp() {
    this.initTranslationService();

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslationService() {
    // Set the default language for translation strings, and the current language.
    this.translateService.setDefaultLang('en');

    if (this.translateService.getBrowserLang() !== undefined) {
      let locale = this.translateService.getBrowserLang();
      console.log(locale);
      this.translateService.use(locale);
      // this.globalVariables.setLocale(locale);
    }
    else {
      let locale = 'en';
      this.translateService.use(locale); // Set your language here
      // this.globalVariables.setLocale(locale);
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
