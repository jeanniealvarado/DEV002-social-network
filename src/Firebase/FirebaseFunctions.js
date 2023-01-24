
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { isSignInWithEmailLink, signInWithEmailLink } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

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

export const ingresar = (email, password) => {
    signInWithEmailAndPassword (email, password)

.then((userCredential) => {
    // Signed in
    // ...
    const user = userCredential.user
    console.log('sesión iniciada');
})
.catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
});
}


// export const emailAutentication = (auth, email) => {
//     console.log('funcion autentication')
//     const actionCodeSettings = {
//         // URL you want to redirect back to. The domain (www.example.com) for this
//         // URL must be in the authorized domains list in the Firebase Console.
//         url: 'http://localhost:3000/#/?mode=action&oobCode=code',
//         //url:'https://social-network-d5de7.firebaseapp.com/__/auth/action?mode=action&oobCode=code',
//         // This must be true.
//         handleCodeInApp: true
//         // iOS: {
//         //   bundleId: 'com.example.ios'
//         // },
//         // android: {
//         //   packageName: 'com.example.android',
//         //   installApp: false,
//         //   minimumVersion: '12'
//         // },
//     };

//     console.log('fuera del objeto')
//     sendSignInLinkToEmail(auth, email, actionCodeSettings)
//         .then(() => {
//             console.log('funcion email')
//             // The link was successfully sent. Inform the user.
//             // Save the email locally so you don't need to ask the user for it again
//             // if they open the link on the same device.
//             window.localStorage.setItem('emailForSignIn', email);
//             // ...
//             alert('Correo enviado con exito');
//         })
//         .then( () => {
//             if (isSignInWithEmailLink(auth, window.location.href)) {
//                 // Additional state parameters can also be passed via URL.
//                 // This can be used to continue the user's intended action before triggering
//                 // the sign-in operation.
//                 // Get the email if available. This should be available if the user completes
//                 // the flow on the same device where they started it.
//                 let email = window.localStorage.getItem('emailForSignIn');
//                 console.log("Entramos al segundo then de if")
//                 if (!email) {
//                     // User opened the link on a different device. To prevent session fixation
//                     // attacks, ask the user to provide the associated email again. For example:
//                     email = window.prompt('Please provide your email for confirmation');
//                 }
//             }
            
//         })
    

//         .catch((error) => {
//             const errorCode = error.code;
//             alert(errorCode);
//             const errorMessage = error.message;
//             elert(errorMessage);
//             // ...
//         });
    

        // const confirmarEmail = () => {

        //     if (isSignInWithEmailLink(auth, window.location.href)) {
        //         // Additional state parameters can also be passed via URL.
        //         // This can be used to continue the user's intended action before triggering
        //         // the sign-in operation.
        //         // Get the email if available. This should be available if the user completes
        //         // the flow on the same device where they started it.
        //         let email = window.localStorage.getItem('emailForSignIn');
        //         if (!email) {
        //             // User opened the link on a different device. To prevent session fixation
        //             // attacks, ask the user to provide the associated email again. For example:
        //             email = window.prompt('Please provide your email for confirmation');
        //         }
        //         // The client SDK will parse the code from the link for you.
        //         signInWithEmailLink(auth, email, window.location.href)
        //         console.log('signInWithEmailLink')
        //             .then((result) => {
        //                 // Clear email from storage.
        //                 window.localStorage.removeItem('emailForSignIn');
        //                 // You can access the new user via result.user
        //                 // Additional user info profile not available via:
        //                 // result.additionalUserInfo.profile == null
        //                 // You can check if the user is new or existing:
        //                 // result.additionalUserInfo.isNewUser
        //             })
        //             .catch((error) => {
        //                 // Some error occurred, you can inspect the code: error.code
        //                 // Common errors could be invalid email and invalid or expired OTPs.

        //             });
        //     }
        //  return confirmarEmail;
       // }
//}


// Confirm the link is a sign-in with email link.
//const auth = getAuth();

//export 