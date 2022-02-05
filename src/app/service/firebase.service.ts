import { Injectable } from "@angular/core";
import { FirebaseTSAuth } from "firebasets/firebasetsAuth/firebaseTSAuth";
import { FirebaseTSFirestore } from "firebasets/firebasetsFirestore/firebaseTSFirestore";

@Injectable({ providedIn: 'root' })
export class FirebaseService {
    // FireBase
    firestoreAuth: FirebaseTSAuth;
    firestore: FirebaseTSFirestore;

    constructor() {
    this.firestoreAuth = new FirebaseTSAuth();
    this.firestore = new FirebaseTSFirestore();
    }
}