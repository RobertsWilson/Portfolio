import { Routes } from '@angular/router'; 
import { Inicio } from './features/inicio/inicio';
import { Sobremi } from './features/sobremi/sobremi';
import { Misproyectos } from './features/misproyectos/misproyectos';
import { Contacto } from './features/contacto/contacto';

export const routes: Routes = [

    {path: 'Inicio', component: Inicio},
    {path: 'SobreMi', component: Sobremi},
    {path: 'Misproyectos', component: Misproyectos},
    {path: 'Contacto', component: Contacto},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }

];
