import { firebase_login_email } from "../../../love/public/src/firebase_login_email.mjs";
import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
export async function firebase_login(context, on_logged_in) {
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
      firebase_login_email(context, firebase_auth, auth);
    }
  }
  firebase_auth.onAuthStateChanged(auth, lambda);
}
