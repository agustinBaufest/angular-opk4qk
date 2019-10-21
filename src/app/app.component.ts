import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/delay';
import { Restangular } from 'ngx-restangular';
import { Cuenta } from './cuenta.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  name = 'Todos';
  cuentas: Cuenta[] = [];
  //apiUrl = 'typicode/demo/posts';
  apiUrl = 'posts';
  constructor(private restangular: Restangular) {}
  
  ngOnInit() {

  }

  OneGet() {
    const observable1 = this.restangular.one(this.apiUrl).get();
    const suscripcion1 = observable1.subscribe(data => {
        this.cuentas = data;
      });     
  }

  OneGetList() {
    const observable1 = this.restangular.one(this.apiUrl).getList();
    const suscripcion1 = observable1.subscribe(data => {
        this.cuentas = data;
      });     
  }

  AllGet1() {
    const observable1 = this.restangular.all(this.apiUrl).get(1);
    console.log(observable1);
    const suscripcion1 = observable1.subscribe(data => {
        this.cuentas = data;
      });     
  }

  AllGet2() {
    const observable1 = this.restangular.one(this.apiUrl, 2).get();
    const suscripcion1 = observable1.subscribe(data => {
        this.cuentas = [
          {id: data.id, title: data.title}
        ];
    });     
  }

  AllGet3() {
    const observable1 = this.restangular.all(this.apiUrl).get(3);
    const suscripcion1 = observable1.subscribe(data => {
        this.cuentas = [
          {id: data.id, title: data.title}
        ];
      });     
  }

  AllGetListCon() {
    const observable1 = this.restangular.all(this.apiUrl).getList();
    const suscripcion1 = observable1.subscribe(data => {
          this.cuentas = data;
      });     
  }
  
  AllGetListSin() {
    this.ClearData();
    const observable1 = this.restangular.all(this.apiUrl).getList();
    const suscripcion1 = observable1.subscribe(data => {
        data.forEach(x => {
          this.cuentas.push({id: x.id, title: x.title});
        })
      });     
  }

  ClearData() {
    this.cuentas = [];
  }


}
