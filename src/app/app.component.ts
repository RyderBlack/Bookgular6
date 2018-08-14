import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyA0sbwQDSzrep0Buic-u0Iw-6cRC-xAZ3U",
      authDomain: "bookgular6.firebaseapp.com",
      databaseURL: "https://bookgular6.firebaseio.com",
      projectId: "bookgular6",
      storageBucket: "bookgular6.appspot.com",
      messagingSenderId: "883586689322"
    };
    firebase.initializeApp(config);
  }
}
