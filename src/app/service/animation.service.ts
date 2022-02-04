import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AnimationService {
    // Animation Navbar & Title
    defaultNavIntro = new BehaviorSubject<string>('istatic');
    defaultTitleIntro = new BehaviorSubject<string>('istart');

    defaultNavPortfo = new BehaviorSubject<string>('pstatic');
    defaultTitlePortfo = new BehaviorSubject<string>('pstart');

    defaultNavNext = new BehaviorSubject<string>('nstatic');
    defaultTitleNext = new BehaviorSubject<string>('nstart');


    toChangeIntro() {
        this.defaultNavIntro.next('itransition');
        this.defaultTitleIntro.next('iend');
        this.defaultNavPortfo.next('pstatic');
        this.defaultTitlePortfo.next('pstart');
        this.defaultNavNext.next('nstatic');
        this.defaultTitleNext.next('nstart');
    }

    toChangePortfo() {
        this.defaultNavIntro.next('istatic');
        this.defaultTitleIntro.next('istart');
        this.defaultNavPortfo.next('ptransition');
        this.defaultTitlePortfo.next('pend');
        this.defaultNavNext.next('nstatic');
        this.defaultTitleNext.next('nstart');
    }

    toChangeNext() {
        this.defaultNavIntro.next('istatic');
        this.defaultTitleIntro.next('istart');
        this.defaultNavPortfo.next('pstatic');
        this.defaultTitlePortfo.next('pstart');
        this.defaultNavNext.next('ntransition');
        this.defaultTitleNext.next('nend');
    }

}