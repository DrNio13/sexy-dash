import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService} from "./chat.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

type MessageType = "user-connected" | "user-disconnected" | "new-message";

export interface Message {
  type: MessageType;
  text: string;
  user: string;
  message?: string;
  connectedUsers?: number;
}

interface User {
  name: string;
}

@Component({
  selector: 'chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.scss']
})

export class ChatComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private chat$: Observable<Message>;

  public message: Message = {type: 'new-message', text: '', user: ''};
  public messages: Message[] = [];
  public isChatActive = false;
  public user: User = {name: ''};

  public connectedUsersCounter: number = 0;

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chat$ = this.chatService.getMessage();
    this.subscription = this.chat$.subscribe(
      (message: Message) => {
        console.log('received ', message);
        this.messages.push(message);
        if (message.type === 'user-connected' || message.type === 'user-disconnected') {
          this.connectedUsersCounter = message.connectedUsers;
        }
      },
      (e) => {
        console.log('Error: ', e);
      },
      () => {
        console.log('completed');
      })

  }

  sendMessage(): void {
    console.log('sent', JSON.stringify(this.message));
    this.chatService.sendMessage(this.message);
    this.message.text = '';
  }

  submit(): void {
    this.message.user = this.user.name;
    this.isChatActive = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
