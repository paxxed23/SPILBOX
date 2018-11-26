import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {


  // Variables en blanco para ser llenadas desde el panel de la app como
  // un formulario en blanco.
alarma = {
 medicamento: '' ,
 hora: '' ,
 descripcion: '' ,
 intervalo: ''
};
med = 'medicamento' ;
opcion: any = '';

// se utiliz el constructor para añadir la función "Storage" donde se almacenan las variables
// de la alarma correspondiente
constructor(public storage: Storage) { }

// La función agregar alarma cumple con la función de igualar el valor de la opción tomada
// en el selector "Alarma", así obteniendo un valor en formato horario y este
// al igualarse en un 'if' se obtienen las funciones correspondientes
agregaralarm() {
if (this.opcion === '01:00' ) {

// dependiendo de la opción tomada se guardan los valores
// según la opción seleccionada.
this.opcion = 1;
this.storage.set('medicamento', this.alarma.medicamento);
this.storage.set('hora', this.alarma.hora);
this.storage.set('Descripción', this.alarma.descripcion);
this.storage.set('intervalo', this.alarma.intervalo);
} else {
  if (this.opcion === '02:00' ) {
    this.opcion = 2;
    this.storage.set('medicamento2', this.alarma.medicamento);
    this.storage.set('hora2', this.alarma.hora);
    this.storage.set('Descripción2', this.alarma.descripcion);
    this.storage.set('intervalo2', this.alarma.intervalo);
    } else {
      if (this.opcion === '03:00' ) {
        this.opcion = 3;
        this.storage.set('medicamento3', this.alarma.medicamento);
        this.storage.set('hora3', this.alarma.hora);
        this.storage.set('Descripción3', this.alarma.descripcion);
        this.storage.set('intervalo3', this.alarma.intervalo);
        } else {
          if (this.opcion === '04:00' ) {
            this.opcion = 4;
            this.storage.set('medicamento4', this.alarma.medicamento);
            this.storage.set('hora4', this.alarma.hora);
            this.storage.set('Descripción4', this.alarma.descripcion);
            this.storage.set('intervalo4', this.alarma.intervalo);
            } else {
              if (this.opcion === '05:00' ) {
                this.opcion = 5;
                this.storage.set('medicamento5', this.alarma.medicamento);
                this.storage.set('hora5', this.alarma.hora);
                this.storage.set('Descripción5', this.alarma.descripcion);
                this.storage.set('intervalo5', this.alarma.intervalo);
                } else {
                  if (this.opcion === '06:00' ) {
                    this.opcion = 6;
                    this.storage.set('medicamento6', this.alarma.medicamento);
                    this.storage.set('hora6', this.alarma.hora);
                    this.storage.set('Descripción6', this.alarma.descripcion);
                    this.storage.set('intervalo6', this.alarma.intervalo);
                    } else {
                      if (this.opcion === '07:00' ) {
                        this.opcion = 7;
                        this.storage.set('medicamento7', this.alarma.medicamento);
                        this.storage.set('hora7', this.alarma.hora);
                        this.storage.set('Descripción7', this.alarma.descripcion);
                        this.storage.set('intervalo7', this.alarma.intervalo);
                        }
                    }
                }
            }
        }
      }
}
}

}
