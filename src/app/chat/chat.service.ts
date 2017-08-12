import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from "socket.io-client";
import {Message} from "./chat.component";

@Injectable()
export class ChatService {

  private url = 'http://localhost:3000';
  private socket;

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  getMessage(): Observable<Message> {
    let observable = new Observable((observer)=>{
      this.socket = io(this.url);

      this.socket.on('new message', (message)=>{
          observer.next(message);
      });

      this.socket.on('user-disconnected', (message)=>{
        observer.next(message);
      });

      return ()=>{
        this.socket.disconnect();
      };
    });

    return observable;
  }
}
