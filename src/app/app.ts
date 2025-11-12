import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Inicio } from './features/inicio/inicio';
import { Misproyectos } from './features/misproyectos/misproyectos';
import { Sobremi } from './features/sobremi/sobremi';
import { Contacto } from './features/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Header, Footer, Inicio, Misproyectos, Sobremi, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
