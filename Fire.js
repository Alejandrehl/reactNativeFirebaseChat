import firebase from 'firebase';
class Fire {
    constructor() {
        this.init();
        this.observeAuth();
    }

    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyCCIh3YpL8NXEh-p7sqYIae1GLumblK0xw",
            authDomain: "reactnative-chatapp-c2322.firebaseapp.com",
            databaseURL: "https://reactnative-chatapp-c2322.firebaseio.com",
            projectId: "reactnative-chatapp-c2322",
            storageBucket: "reactnative-chatapp-c2322.appspot.com",
            messagingSenderId: "318133957734"
        });
}

Fire.shared = new Fire();
export default Fire;