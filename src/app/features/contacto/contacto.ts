import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio-service';
import { DatosPersonales } from '../../models/datos';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit { 
  
  private portfolioService = inject(PortfolioService);


  public datos: DatosPersonales | null = null;
  public cargando: boolean = true;
  public error: string | null = null;

  constructor() {}

  ngOnInit() {
    this.portfolioService.getDatosPersonales().subscribe({
      next: (data) => {
        this.datos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error en ContactoComponent:', err);
        this.error = 'No se pudo cargar la información de contacto.';
        this.cargando = false;
      }
    });
  }
}