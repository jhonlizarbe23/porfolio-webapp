import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/models/user.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const USER_DATA: UserModel[] = [
  {
    id: '12aas882jknza',
    usercode: 'USC10001',
    username: 'JHON',
    password: '111111',
    role: 'ROLE_ADMIN',
    enabled: true
  },
  {
    id: '10200293711',
    usercode: 'USC10002',
    username: 'HILTON',
    password: '111111',
    role: 'ROLE_PATIENT',
    enabled: true
  },
  {
    id: '121235666knza',
    usercode: 'USC10003',
    username: 'JHAN',
    password: '111111',
    role: 'ROLE_DOCTOR',
    enabled: true
  }
  ,
  {
    id: '11002992821ffa',
    usercode: 'USC10004',
    username: 'JESUS',
    password: '111111',
    role: 'ROLE_ASSISTANT',
    enabled: false
  }
]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Controller form
  formGroupAuth: FormGroup;

  constructor(
    private _router: Router
  ){
    this.formGroupAuth = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Models
  usersList: UserModel[] = [];

  ngOnInit() {

    this.usersList = USER_DATA;
    
  }

  onSubmitFormLogin(){
    const userFound = this.usersList.find(element => element.username == this.formGroupAuth.value.username && element.password == this.formGroupAuth.value.password);
    console.log(userFound);
    if(!userFound){
      console.log("Usuario o contraseña incorrectos.");
    }
    else{
      if(!userFound.enabled){
        console.log("usuario no habilitado.")
      }else{
        switch (userFound.role) {
          case 'ROLE_ADMIN': this._router.navigate(['/admin'])
            break;
          case 'ROLE_DOCTOR': this._router.navigate(['/doctor'])
            break;
          case 'ROLE_PATIENT': this._router.navigate(['/patient'])
            break;
          default:
            this._router.navigate(['/auth/login'])
            break;
        } 
      }
    }
  }

  // Getters
  get username() {
    return this.formGroupAuth.get('username');
  }
  get password() {
    return this.formGroupAuth.get('password');
  }


}
