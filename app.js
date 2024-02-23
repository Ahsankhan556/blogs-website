

console.log("halo");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2I9uw9VlNUhLdE_NNQXGCm1y4v63IgmY",
  authDomain: "bolgwebsite1.firebaseapp.com",
  projectId: "bolgwebsite1",
  storageBucket: "bolgwebsite1.appspot.com",
  messagingSenderId: "438574142952",
  appId: "1:438574142952:web:0d3b1410264ca1f890c05d",
  measurementId: "G-C211QLS8NQ"
};

  //! Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


      //!  google sgni in start 
  const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn")
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("suss")
        window.location.href = "createpost.html"
  
      }).catch((error) => {
        console.log("erorr")
      });
  }
  loginWithGoogleBtn && loginWithGoogleBtn.addEventListener("click", signInWithGoogle)

      //!  google sgni in end
      //! sgin in start 
      const btnsignup = document.getElementById("registerButton");
      btnsignup&&btnsignup.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
        window.location.href = "createpost.html"
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    });
//! sginin end
//! login start
const SubmitDataEmaillogin = document.getElementById("SubmitDataEmaillogin");
SubmitDataEmaillogin&&SubmitDataEmaillogin.addEventListener("click", () => {
  const email = document.getElementById("emaillogin").value;
  const password = document.getElementById("passwordlogin").value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href = "createpost.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert
  });
});


  // navbar fun   start

  // navbar fun   end




  