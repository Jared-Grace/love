import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
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
      let root = object_property_get(context, "root");
      async function login_google() {
        const provider = new firebase_auth.GoogleAuthProvider();
        const result = await firebase_auth.signInWithPopup(auth, provider);
        return result;
      }
      html_button_width_full(root, "Sign in with Google", login_google);
    }
  }
  firebase_auth.signInWithRedirect(auth, provider);
}
