import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';



@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {
  registerForm: FormGroup
  menu: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formbuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    ) {

      this.registerForm = this.formbuilder.group({
        name:[null, [Validators.required, Validators.minLength(5)]],
        email:[null, [Validators.required, Validators.email]],
        senha:[null, [Validators.required, Validators.minLength(6)]],
        confirmePassword:[null, [Validators.required, Validators.minLength(6)]]
      })
  }
  submitForm(){
this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
.then((response) => {
  console.log('criou usuario');
})
.catch((error) => {
  console.log('deu erro, error');
})
  }



}
