import { log } from "../../../love/public/src/log.mjs";
import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_login(on_logged_in, on_logged_out) {
  const app = await firebase_app_initialize();
  const firebaseAuth = await import(
    "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
  );
  const auth = firebaseAuth.getAuth(app);
  function lambda(user) {
    if (user) {
      loginDiv.style.display = "none";
      appDiv.style.display = "block";
      console.log("User logged in:", user.uid);
    } else {
      loginDiv.style.display = "block";
      appDiv.style.display = "none";
      console.log("User not logged in");
    }
  }
  firebaseAuth.onAuthStateChanged(auth, lambda);
  const userCredential = await firebaseAuth.signInWithEmailAndPassword(
    auth,
    username,
    password,
  );
  marker("1");
}
