import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnalisesPage } from './analises';

@NgModule({
  declarations: [
    AnalisesPage,
  ],
  imports: [
    IonicPageModule.forChild(AnalisesPage),
  ],
})
export class AnalisesPageModule {}
