import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPage } from './confirm';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmPage
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPage),
    TranslateModule.forChild()
  ]
})
export class ConfirmPageModule {}
