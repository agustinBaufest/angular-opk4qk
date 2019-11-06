import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';
import {UserApiModel} from '../models/userApi.model';
import {UserApiRequest} from '../models/userApiRequest.model';


@Injectable()
export class Service {
 constructor(private restangular: Restangular) { }


 public get(parametros: UserApiRequest): Observable<UserApiModel[]>{
   return this.restangular.all('User').getList({
     dni: parametros.dni,
     name: parametros.name,
    surname: parametros.surname
  });
 }

 public getById(id: number): Observable<UserApiModel>{
   return this.restangular.one('User/GetById').get({userId: id});
 }


 public post(parametros: UserApiRequest): Observable<boolean>{
   
    return this.restangular.all('User').post({
      id: parametros.id,
      dni: parametros.dni,
      name: parametros.name,
      surname: parametros.surname
    });
  }

 public put(id: number, parametros: UserApiRequest): Observable<boolean>{
   return this.restangular.one('User').put({
     userId: id,
     id: parametros.id,
     dni: parametros.dni,
     name: parametros.name,
     surname: parametros.surname
      });
 }

  public delete(id: number): Observable<boolean>{
   return this.restangular.one('User').remove({userId: id});
 }
}