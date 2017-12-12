import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmPage } from './confirm';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ConfirmPage
  ],
  imports: [
    IonicPageModule.forChild(ConfirmPage),
    TranslateModule.forChild(),
    ComponentsModule
  ]
})
export class ConfirmPageModule {}
