
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

export const registerFirebase = (auth, email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const emailAutentication = (auth, email) => {
    console.log('funcion autentication')
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000/#/?mode=action&oobCode=code',
        //url:'https://social-network-d5de7.firebaseapp.com/__/auth/action?mode=action&oobCode=code',
        // This must be true.
        handleCodeInApp: true
        // iOS: {
        //   bundleId: 'com.example.ios'
        // },
        // android: {
        //   packageName: 'com.example.android',
        //   installApp: false,
        //   minimumVersion: '12'
        // },
    };

    console.log('fuera del objeto')
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            console.log('funcion email')
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            // ...
            alert('Correo enviado con exito');
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
            const errorMessage = error.message;
            elert(errorMessage);
            // ...
        });
}