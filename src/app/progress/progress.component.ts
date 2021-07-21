import { Component, OnInit } from '@angular/core';
// import { ProgressService } from '../app/shared/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [],
  styles: [`
    ::ng-deep nb-layout-column {
      justify-content: center;
      display: flex;
    }
    nb-chat {
      width: 500px;
    }
  `],
})
export class ProgressService {
  messages: any[];

  constructor(protected progressService) {
    this.messages = this.progressService.loadMessages();
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    // const botReply = this.chatShowcaseService.reply(event.message);
    // if (botReply) {
    //   setTimeout(() => { this.messages.push(botReply) }, 500);
    // }
  }
}

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


