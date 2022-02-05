import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { Subscription } from 'rxjs';
import { PageAnimation } from './animation/page-animation';;
import { AnimationService } from './service/animation.service';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [PageAnimation]
})
export class AppComponent implements OnInit, OnDestroy {
  durationInSeconds: number = 5;
  title = 'Portfolio';
  // Subscription Animation Navbar
  defaultSubNavIntro: Subscription;
  defaultSubNavPortfo: Subscription;
  defaultSubNavNext: Subscription;

  // Subscription Animation Title
  defaultSubTitleIntro: Subscription;
  defaultSubTitlePortfo: Subscription;
  defaultSubTitleNext: Subscription;

  // Value Animation Navbar
  defaultNavIntro: string = 'istatic';
  defaultNavPortfo: string = 'pstatic';
  defaultNavNext: string = 'nstatic';

  // Value Animation Title
  defaultTitleIntro: string = 'istart';
  defaultTitlePortfo: string = 'pstart';
  defaultTitleNext: string = 'nstart';

  constructor(private animationService: AnimationService,
    private firebaseService: FirebaseService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Nav
    this.defaultSubNavIntro = this.animationService.defaultNavIntro.subscribe(
      (inavbar: string) => {
        this.defaultNavIntro = inavbar;
      }
    );

    this.defaultSubNavPortfo = this.animationService.defaultNavPortfo.subscribe(
      (pnavbar: string) => {
        this.defaultNavPortfo = pnavbar;
      }
    );

    this.defaultSubNavNext = this.animationService.defaultNavNext.subscribe(
      (nnavbar: string) => {
        this.defaultNavNext = nnavbar;
      }
    );
    // Title
    this.defaultSubTitleIntro = this.animationService.defaultTitleIntro.subscribe(
      (ititle: string) => {
        this.defaultTitleIntro = ititle;
      }
    );

    this.defaultSubTitlePortfo = this.animationService.defaultTitlePortfo.subscribe(
      (ptitle: string) => {
        this.defaultTitlePortfo = ptitle;
      }
    );

    this.defaultSubTitleNext = this.animationService.defaultTitleNext.subscribe(
      (ntitle: string) => {
        this.defaultTitleNext = ntitle;
      }
    );
  }

  toIntroState() {
    this.animationService.toChangeIntro();
  }

  toPortfoState() {
    this.animationService.toChangePortfo();
  }

  toNextState() {
    this.animationService.toChangeNext();
  }

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

  ngOnDestroy(): void {
    // Nav
    this.defaultSubNavIntro.unsubscribe();
    this.defaultSubNavPortfo.unsubscribe();
    this.defaultSubNavNext.unsubscribe();

    // Title
    this.defaultSubTitleIntro.unsubscribe();
    this.defaultSubTitlePortfo.unsubscribe();
    this.defaultSubTitleNext.unsubscribe();
  }
}
