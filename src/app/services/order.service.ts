import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getItems(){
    return this.http.get<Item>(`${environment.URL}/item`)
  }
  checkTable(data){
    return this.http.get<any>(`${environment.URL}/table/check/${data}`)
  }
  checkUser(data){

    return this.http.get<any>(`${environment.URL_USERS}/dni/${data}`, { headers: {'Content-Type': 'application/json'} })
  }
  createOrder(data){
    return this.http.post<any>(`${environment.URL}/decree`,{"id_table":data.id_table,"order":data.order,"id_user":data.id_user,"total":data.total})
  }


}
