import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio-service';
import { Proyecto } from '../../models/proyectos';

@Component({
  selector: 'app-misproyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './misproyectos.html',
  styleUrl: './misproyectos.css',
})
export class Misproyectos implements OnInit {
  
  private portfolioService = inject(PortfolioService);

 
  public proyectos: Proyecto[] = [];
  public cargando: boolean = true;
  public error: string | null = null;

  constructor() {}

  ngOnInit() {
    this.portfolioService.getProyectos().subscribe({
      next: (data) => {
        this.proyectos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error en MisProyectosComponent:', err);
        this.error = 'No se pudieron cargar los proyectos.';
        this.cargando = false;
      }
    });
  }
}