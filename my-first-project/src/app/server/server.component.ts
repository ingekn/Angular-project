import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created! ';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
}
