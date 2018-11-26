import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  // se establecen las variables para ser llenadas a través de la pestaña de
  // "crear nueva alarma" así siendo añadidos los nuevos valores y por ende, nuevas alarmas.
  alarma1 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };

   alarma2 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };

   alarma3 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };

   alarma4 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };

   alarma5 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };

   alarma6 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };
   alarma7 = {
    medicamento: '' ,
    hora: '' ,
    descripcion: '' ,
    intervalo: ''
   };
// se vuelve a hacer uso del constructor con Storage para poder recurrir
// a los valores añadidos a un banco de datos centralizado dentro de la aplicación
  constructor(public storage: Storage) {
  }
// Función para eliminar alarmas, se establecen los valores en blanco.
  eliminarala() {
    this.alarma1.medicamento = '';
    this.alarma1.hora = '';
    this.alarma1.descripcion = '';
    this.alarma1.intervalo = '';
  }
// Función actualizar, se busca que aplique OnInit para automatizar la acción de tener las alarmas
// en orden
actualizar() {
this.storage.get('medicamento').then((med1) => {
  this.alarma1.medicamento = med1;
});
this.storage.get('hora').then((hora1) => {
  this.alarma1.hora = hora1;
});
this.storage.get('Descripción').then((desc1) => {
  this.alarma1.descripcion = desc1;
});
this.storage.get('intervalo').then((int1) => {
  this.alarma1.intervalo = int1;
});

this.storage.get('medicamento2').then((med2) => {
  this.alarma2.medicamento = med2;
});
this.storage.get('hora2').then((hora2) => {
  this.alarma2.hora = hora2;
});
this.storage.get('Descripción2').then((desc2) => {
  this.alarma2.descripcion = desc2;
});
this.storage.get('intervalo2').then((int2) => {
  this.alarma2.intervalo = int2;
});

this.storage.get('medicamento3').then((med3) => {
  this.alarma3.medicamento = med3;
});
this.storage.get('hora3').then((hora3) => {
  this.alarma3.hora = hora3;
});
this.storage.get('Descripción3').then((desc3) => {
  this.alarma3.descripcion = desc3;
});
this.storage.get('intervalo3').then((int3) => {
  this.alarma3.intervalo = int3;
});

this.storage.get('medicamento4').then((med4) => {
  this.alarma4.medicamento = med4;
});
this.storage.get('hora4').then((hora4) => {
  this.alarma4.hora = hora4;
});
this.storage.get('Descripción4').then((desc4) => {
  this.alarma4.descripcion = desc4;
});
this.storage.get('intervalo4').then((int4) => {
  this.alarma4.intervalo = int4;
});

this.storage.get('medicamento5').then((med5) => {
  this.alarma5.medicamento = med5;
});
this.storage.get('hora5').then((hora5) => {
  this.alarma5.hora = hora5;
});
this.storage.get('Descripción5').then((desc5) => {
  this.alarma5.descripcion = desc5;
});
this.storage.get('intervalo5').then((int5) => {
  this.alarma5.intervalo = int5;
});

this.storage.get('medicamento6').then((med6) => {
  this.alarma6.medicamento = med6;
});
this.storage.get('hora6').then((hora6) => {
  this.alarma6.hora = hora6;
});
this.storage.get('Descripción6').then((desc6) => {
  this.alarma6.descripcion = desc6;
});
this.storage.get('intervalo6').then((int6) => {
  this.alarma6.intervalo = int6;
});
this.storage.get('medicamento7').then((med7) => {
  this.alarma7.medicamento = med7;
});
this.storage.get('hora7').then((hora7) => {
  this.alarma7.hora = hora7;
});
this.storage.get('Descripción7').then((desc7) => {
  this.alarma7.descripcion = desc7;
});
this.storage.get('intervalo7').then((int7) => {
  this.alarma7.intervalo = int7;
});
}


}
