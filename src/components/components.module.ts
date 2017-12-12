import { NgModule } from '@angular/core';
import { EmptyListComponent } from './empty-list/empty-list';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
	declarations: [
		EmptyListComponent
	],
	imports: [
		IonicModule,
		TranslateModule.forChild()	
	],
	exports: [
		EmptyListComponent
	]
})
export class ComponentsModule {}