Mi Portfolio Personal (SPA con Angular)

¡Bienvenido a mi proyecto de portfolio! Esta es una Single Page Application (SPA) construida con Angular (v17+), diseñada para ser un portfolio web interactivo y, sobre todo, fácilmente personalizable.

Toda la información que ves en las páginas (mis datos personales, la lista de proyectos y la info de contacto) se carga dinámicamente desde archivos JSON locales, simulando cómo funcionaría una API real.

Este proyecto fue desarrollado siguiendo las consignas de un desafío técnico, enfocado en las buenas prácticas de Angular.

✨ Características y Stack Tecnológico

Este no es un portfolio HTML estático. Es una aplicación de Angular que demuestra los siguientes conceptos clave:

Framework: Angular 17+

Arquitectura: Componentes Standalone (independientes).

Routing: Navegación fluida entre páginas (SPA) gestionada por Angular Router (provideRouter y routerLink).

Servicios e Inyección de Dependencias: Un único PortfolioService centraliza la lógica de datos y se inyecta (inject) en los componentes que lo necesitan.

Peticiones HTTP: Uso de HttpClient (configurado con provideHttpClient(withFetch()) en app.config.ts) para leer los archivos JSON.

Programación Reactiva: Uso de Observables (de RxJS) para manejar la carga de datos asíncrona, con manejo de errores catchError.

Renderizado Dinámico:

Directivas Estructurales: *ngIf para mostrar estados de "Cargando..." o "Error", y *ngFor para renderizar la lista de proyectos.

Binding: Interpolación ({{ }}) para mostrar texto y Property Binding ([src], [href]) para atributos dinámicos (como imágenes y enlaces).

Estilos: CSS modular y encapsulado por componente para un diseño limpio y mantenible.

🚀 Cómo Empezar

Si quieres clonar y ejecutar este proyecto, solo necesitas seguir estos pasos:

Clonar el repositorio:

git clone [https://github.com/RobertsWilson/Portfolio.git](https://github.com/RobertsWilson/Portfolio.git)
cd Portfolio


Instalar dependencias:

npm install


Ejecutar el servidor de desarrollo:

ng serve


O, si prefieres (según package.json):

npm start


Abre tu navegador en http://localhost:4200/ y verás la aplicación funcionando.

🔧 ¡Personaliza tu Propio Portfolio!

Lo mejor de este proyecto es que no necesitas tocar el código de Angular para cambiar la información.

Toda tu información personal y tus proyectos se gestionan desde dos archivos en la carpeta src/assets/:

1. Para cambiar tu información personal

Modifica el archivo src/assets/datos-personales.json:

{	
  "nombre": "Tu Nombre Aquí",
  "titulo": "Tu Título Profesional",
  "Institucion": "Tu Institución",
  "descripcion": "Una descripción genial sobre ti...",
  "foto": "[https://url-de-tu-foto.com/tu-foto.jpg](https://url-de-tu-foto.com/tu-foto.jpg)",
  "email": "tu@email.com",
  "telefono": "+12 3 4567 8900",
  "linkedin": "[https://linkedin.com/in/tu-usuario](https://linkedin.com/in/tu-usuario)",
  "github": "[https://github.com/tu-usuario](https://github.com/tu-usuario)"
}


2. Para agregar tus proyectos

Modifica el archivo src/assets/proyectos.json (puedes añadir tantos proyectos como quieras en el array):

[
  {
    "id": 1,
    "nombre": "Mi Nuevo Proyecto",
    "descripcion": "Descripción de este increíble proyecto que hice.",
    "tecnologias": ["Angular", "Firebase", "Node.js"],
    "linkRepositorio": "[https://github.com/](https://github.com/)...",
    "asignatura": "Materia Opcional",
    "docente": "Nombre Docente"
  },
  {
    "id": 2,
    "nombre": "Otro Proyecto",
    "descripcion": "...",
    "tecnologias": ["React", "CSS"],
    "linkRepositorio": "[https://github.com/](https://github.com/)...",
    "asignatura": "...",
    "docente": "..."
  }
]


Una vez que guardes los cambios en los archivos JSON, la página se recargará automáticamente y mostrará tu nueva información.