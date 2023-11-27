import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Max-Disk-Usage': '10mb', // Establece el límite de carga aquí
  }),
  timeout: 20000,
};

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private http: HttpClient) {}

  // retirar(datos: any): Observable<any> {
  //   // console.log(nuevoLibro);    
  //   const url = 'http://localhost:3000/api/movimientos/';
  //   return this.http.post<any>(url, datos);
  // }

  retirar(datos: any): Observable<any> {
    const url = 'http://127.0.0.1:3000/api/movimientos/';
    return this.http.get<any>(url);
  }  
  
}