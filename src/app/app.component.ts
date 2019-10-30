import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/delay';
import {Service} from './service/service';
import {UserApiRequest} from './models/userApiRequest.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(
  private service: Service) {}
  
  ngOnInit() {

  }

  get(){
     let user = new UserApiRequest();
    //user.id = 1;
    //user.name = 'pepe';
    //user.surname = 'rr';
    //user.dni = '3745201';
  this.service.get(user).subscribe(response =>{

}, error => console.log(error));
  }

  getById(){
    this.service.getById(1).subscribe(response =>{

    }, error => console.log(error));
  }

  post(){
    let user = new UserApiRequest();
    user.id = 1;
    user.name = 'pepe';
    user.surname = 'rr';
    user.dni = '3745201';
    this.service.post(user).subscribe(response =>{

    }, error => console.log(error));
  }

  put(){
    let user = new UserApiRequest();
    user.id = 1;
    user.name = 'juan';
    user.surname = 'gz';
    user.dni = '3805081';
  this.service.put(1,user).subscribe(response =>{

    }, error => console.log(error));
  }

  delete(){
  this.service.delete(1).subscribe(response =>{

    }, error => console.log(error));
  }

}
