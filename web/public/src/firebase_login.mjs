import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_login(on_logged_in, on_logged_out) {
  const app = await firebase_app_initialize();
  const firebase_auth = await import(
    "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
  );
  const auth = firebase_auth.getAuth(app);
  function lambda(user) {
    if (user) {
      on_logged_in({
        user,
      });
    } else {
      on_logged_out({});
    }
  }
  firebase_auth.onAuthStateChanged(auth, lambda);
  const userCredential = await firebase_auth.signInWithEmailAndPassword(
    auth,
    username,
    password,
  );
  marker("1");
}
