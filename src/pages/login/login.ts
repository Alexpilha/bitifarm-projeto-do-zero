import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { CadastrarPage } from '../cadastrar/cadastrar';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
  }

  goToEntrar(){
    this.navCtrl.setRoot(HomePage)
  }

  goToCadastrar(){
    this.navCtrl.setRoot(CadastrarPage)
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewDidEnter(){
    this.menu.enable(false);

  }

  ionViewWillLeave(){
    this.menu.enable(true);

  }

}
