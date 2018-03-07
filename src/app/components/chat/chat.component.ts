import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})

export class ChatComponent {

  mensaje = '';

  constructor(public _cs: ChatService) {

    this._cs.cargarMensajes().
      subscribe();
  }

  enviar_mensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this._cs.agregarMensaje(this.mensaje)
      .then(() => {
        console.log('Mensaje enviado');
        this.mensaje = '';
      })
      .catch ((err) => console.error('Error al enviar', err));

  }
