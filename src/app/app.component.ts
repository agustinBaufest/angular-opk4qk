import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/delay';
import {Service} from './service/service';
import {UserApiRequest} from './models/userApiRequest.model';
import { UserApiModel } from './models/userApi.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
respuestaOk: string;
msj: string = "ok";
user: UserApiModel[];
  constructor(
  private service: Service) {}
  
  ngOnInit() {

  }

  get(){
    this.limpiar();
     let user = new UserApiRequest();
     user.id = 1;
     user.name = 'pepe';
     user.surname = 'rr';
     user.dni = '3745201';
  this.service.get(user).subscribe(response =>{
      this.user = [];
      response.forEach(x => {
        this.user.push({
          id: x.id,
          dleted: x.dleted,
          name: x.name,
          surname: x.surname,
          dni: x.dni, 
        });
      })    
    }, error => console.log(error));
  }

  getById(){
    this.limpiar();
    this.service.getById(0).subscribe(response =>{
      this.user = [
        {
          id: response.id,
          dleted: response.dleted,
          name: response.name,
          surname: response.surname,
          dni: response.dni, 
        }
      ];;
    }, error => console.log(error));
  }

  post(){
    this.limpiar();
    let user = new UserApiRequest();
    user.name = 'pepe';
    user.surname = 'rr';
    user.dni = '3745201';
    this.service.post(user).subscribe(response =>{
      this.respuestaOk = response ? this.msj : "error";
    }, error => console.log(error));
  }

  put(){
    this.limpiar();
    let user = new UserApiRequest();
    user.id = 0;
    user.name = 'juan';
    user.surname = 'gz';
    user.dni = '3805081';
  this.service.put(0,user).subscribe(response =>{
     this.respuestaOk = response ? this.msj : "error";
    }, error => console.log(error));
  }

  delete(){
    this.limpiar();
  this.service.delete(1).subscribe(response =>{
    this.respuestaOk = response ? this.msj : "error";
    }, error => console.log(error));
  }

  private limpiar(){
    this.user = null;
    this.respuestaOk = null;
  }
}
