import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
import { html_clear } from "./html_clear.mjs";
import { firebase_login_email } from "./firebase_login_email.mjs";
export async function firebase_auth_ensure(container) {
  "resolve the logged-in user; if none, render an inline email/password login into container and resolve after sign-in";
  let app = await firebase_app_initialize();
  let auth = getAuth(app);
  let user = await new Promise(function lambda2(resolve) {
    function lambda(u) {
      unsubscribe();
      resolve(u);
    }
    let unsubscribe = onAuthStateChanged(auth, lambda);
  });
  if (user) {
    return user;
  }
  html_clear(container);
  let signed_in = await firebase_login_email(container, auth);
  html_clear(container);
  return signed_in;
}
