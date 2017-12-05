import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { ProductsPage } from '../pages/products/products';

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    public translateService: TranslateService) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: '' ,component: HomePage },
      { title: 'List', icon: '', component: ListPage },
      { title: 'Products', icon: 'hc-store', component: 'ProductsPage' },
      { title: 'Cart', icon: 'hc-cart-empty', component: 'CartPage' }
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
