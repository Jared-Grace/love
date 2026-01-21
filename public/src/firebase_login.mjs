import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
export async function firebase_login(context, on_logged_in) {
  const app = await firebase_app_initialize();
  const firebase_auth = await import(
    "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"
  );
  const auth = firebase_auth.getAuth(app);
  let root = object_property_get(context, "root");
  try {
    const result = await firebase_auth.getRedirectResult(auth);
    if (result && result.user) {
      on_logged_in({
        user: result.user,
      });
      return;
    }
  } catch (err) {
    console.error("Redirect result error:", err);
  }
  function lambda2(user) {
    if (user) {
      on_logged_in({
        user,
      });
    } else {
      async function lambda() {
        const provider = new firebase_auth.GoogleAuthProvider();
        await firebase_auth.signInWithRedirect(auth, provider);
      }
      html_button_width_full(root, "Sign in with Google", lambda);
    }
  }
  firebase_auth.onAuthStateChanged(auth, lambda2);
}
