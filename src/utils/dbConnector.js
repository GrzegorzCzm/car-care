import firebase from "firebase";

export default class FirebaseConfigurator {
  constructor() {
    this.config = {
      apiKey: "AIzaSyAjtDfcFURJoSzs9G07QtcMjUzGe3x_3tU",
      authDomain: "carcare-5fb92.firebaseapp.com",
      databaseURL: "https://carcare-5fb92.firebaseio.com",
      projectId: "carcare-5fb92",
      storageBucket: "carcare-5fb92.appspot.com",
      messagingSenderId: "706928502670"
    };
    firebase.initializeApp(this.config);
  }
}
