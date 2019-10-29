import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {Service} from './service/service.ts';

export function RestangularConfigFactory (RestangularProvider) {
  //RestangularProvider.setBaseUrl('https://my-json-server.typicode.com');
  RestangularProvider.setBaseUrl('https://jsonplaceholder.typicode.com');
}

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RestangularModule.forRoot(RestangularConfigFactory), ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Service]
})
export class AppModule { }
