import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  durationInSeconds: number = 5;
  title = 'Portfolio';

  constructor(private firebaseService: FirebaseService,
    private _snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit(): void {}

  onSendMessage(emailInput: HTMLInputElement, messageInput: HTMLTextAreaElement) {
    let emailUser = emailInput.value;
    let messageUser = messageInput.value;
    let emailId = this.firebaseService.firestore.genDocId();
    if(this.isNotEmpty(emailUser) && this.isNotEmpty(messageUser)) {
      this.firebaseService.firestore.create(
        {
          path: ['Contact', emailId],
          data: {
            email: emailUser,
            message: messageUser,
            timestamp: FirebaseTSApp.getFirestoreTimestamp()
          },
          onComplete: (valid) => {
            this._snackBar.open('Your message has been successfully sent', 'Close', {
              duration: this.durationInSeconds * 1000,
            });
            emailInput.value = "";
            messageInput.value = "";
          },
          onFail: (err) => {
            alert(err);
          }
        }
      );
    } else {
      this._snackBar.open('Please fill in the two fields above', 'Close', {
        duration: this.durationInSeconds * 1000,
      });
    }
  }

  isNotEmpty(text: string) {
    return text !== null && text.length > 0;
  }
}
