import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { DatosPersonales } from '../models/datos';
import { Proyecto } from '../models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  private http = inject(HttpClient);

  constructor() {}

  public getDatosPersonales(): Observable<DatosPersonales> {
    return this.http.get<DatosPersonales>(environment.datosPersonalesUrl)
    .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }

  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(environment.proyectosUrl);
  }
  
}
