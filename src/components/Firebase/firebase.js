import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBoJWIAtqK3ZGp2E598Loywbci451e2CKU",
    authDomain: "smart-home-pcd.firebaseapp.com",
    projectId: "smart-home-pcd",
    storageBucket: "smart-home-pcd.appspot.com",
    messagingSenderId: "765783544539",
    appId: "1:765783544539:web:91dbe93edd55963f0eb2fe",
    measurementId: "G-CHSRZPFXF1"
  };




class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth=app.auth();
    }
    //inscription
    signupUser=(email,password)=>this.auth.createUserWithEmailAndPassword(email,password);

    //connexion
    loginUser=(email,password)=>this.auth.signInWithEmailAndPassword(email,password);

    //deconnexion
    signoutUser=()=>this.auth.signOut()

    //Récuperer le mot de passe
    passwordReset=email=> this.auth.sendPasswordResetEmail(email);
}
export default Firebase;