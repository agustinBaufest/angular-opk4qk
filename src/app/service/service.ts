import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';
import {UserApiModel} from './models/userApi.model.ts';
import {UserApiRequest} from './models/userApiRequest.model.ts';


@Injectable()
export class Service {
 constructor(private restangular: Restangular) { }


 public get(parametros: UserApiRequest): Observable<UserApiModel[]>{
   return this.restangular.one('User').getList({userApiRequest: parametros});
 }

 public getById(id: number): Observable<UserApiModel>{
   return this.restangular.one('User').get({userId: id});
 }


 public post(parametros: UserApiRequest): Observable<any>{
   return this.restangular.one('User').post({userApiRequest: parametros});
 }

 public put(id: number, parametros: UserApiRequest): Observable<any>{
   return this.restangular.one('User').put({userId: id, userApiRequest: parametros});
 }

  public delete(id: number): Observable<any>{
   return this.restangular.one('User').remove({userId: id});
 }

}