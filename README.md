# SPILBOX

La spilbox Alpha:
-La app cuenta actualmente con un sistema de ingreso y salida de datos, actualmente falta la integración de un servicio que reciba la hora actual y funcione de fondo con el fin de procesar cada una de las 7 alarmas programables y reproducir una alarma.

FRAMEWORKS UTILIZADOS:
- Angular 6
- Ionic 4 (Con rutas, formato de Tabs)
- Ionic/Storage (Para tratamiento de variables).

Lenguajes: 
-HTML (Maquetado)
-SCSS (Diseño)
- Javascript (Node.js)
- Typescript.

Las rutas son:

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

Componente Tabs => Funciona como footer para navegación entre 3 secciones (Home => Inicio, About => Nueva y Contact => Medicamentos)

