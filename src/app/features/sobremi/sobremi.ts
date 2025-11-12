import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio-service';
import { DatosPersonales } from '../../models/datos';

@Component({
  selector: 'app-sobremi',
  standalone: true, 
  imports: [CommonModule], // CommonModule nos da *ngIf
  templateUrl: './sobremi.html',
  styleUrl: './sobremi.css'
})
export class Sobremi implements OnInit { // 2. Implementamos OnInit
  
  private portfolioService = inject(PortfolioService);

  // 3. Definimos las propiedades de la clase (en lugar de signals)
  public datos: DatosPersonales | null = null;
  public cargando: boolean = true;
  public error: string | null = null;

  constructor() {
    // El constructor se mantiene ligero
  }

  // 4. Toda la lógica de carga de datos va en ngOnInit
  ngOnInit() {
    this.portfolioService.getDatosPersonales().subscribe({
      next: (data) => {
        this.datos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error en SobremiComponent:', err);
        this.error = 'No se pudo cargar la información personal.';
        this.cargando = false;
      }
    });
  }
}