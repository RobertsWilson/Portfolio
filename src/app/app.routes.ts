import { Routes } from '@angular/router'; 
import { Inicio } from './features/inicio/inicio';
import { Sobremi } from './features/sobremi/sobremi';
import { Misproyectos } from './features/misproyectos/misproyectos';
import { Contacto } from './features/contacto/contacto';

export const routes: Routes = [

    {path: 'inicio', component: Inicio},
    {path: 'sobremi', component: Sobremi},
    {path: 'misproyectos', component: Misproyectos},
    {path: 'contacto', component: Contacto},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }

];
