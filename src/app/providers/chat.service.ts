import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interface/mensaje.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges()
      .map((mensajes: Mensajes[]) => {
        console.log(mensajes);
        this.chats = mensajes;
      })
  }

  // TODO falta el uid del usuario
  agregarMensaje(texto: string) {
    let mensaje: Mensaje{
      nombre:'Demo',
      mensaje: texto,
      fecha: (new Date).getTime()
    }

    return this.itemsCollection.add(mensaje);
  }

}
