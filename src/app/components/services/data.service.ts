import { HttpClient } from '@angular/common/http'
import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public emisor = new EventEmitter<number>();
  identificador: number;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("../../../assets/history.json")
  }

  propagarValor(valor) {
    this.emisor.emit(valor);
    this.identificador = valor;
  }


  getCompanyDetaills() {
    return this.http.get("../../../assets/history.json")
  }



}
