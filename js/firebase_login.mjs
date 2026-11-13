import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_login_email } from "./firebase_login_email.mjs";
export async function firebase_login(context, on_logged_in) {
  let app = await firebase_app_initialize();
  ('const firebase_auth = await import(\n    "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js"\n  );');
  let auth = getAuth(app);
  async function lambda(user) {
    if (user) {
      await on_logged_in({
        user,
      });
    } else {
      let root = property_get(context, "root");
      firebase_login_email(root, auth);
    }
  }
  onAuthStateChanged(auth, lambda);
}
