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
      apiKey: "AIzaSyDz_gJDqUN1n2pRd9gdAcxeCKIstQbpt7o",
      authDomain: "bookgular6-3f963.firebaseapp.com",
      databaseURL: "https://bookgular6-3f963.firebaseio.com",
      projectId: "bookgular6-3f963",
      storageBucket: "bookgular6-3f963.appspot.com",
      messagingSenderId: "896174649423"
    };
    firebase.initializeApp(config);
  }
}
