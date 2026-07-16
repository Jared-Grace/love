import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebase_app_initialize } from "../../love/js/firebase_app_initialize.mjs";
import { html_input_email } from "../../love/js/html_input_email.mjs";
import { html_input_password } from "../../love/js/html_input_password.mjs";
import { html_placeholder } from "../../love/js/html_placeholder.mjs";
import { html_value_get } from "../../love/js/html_value_get.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
export async function firebase_auth_ensure(container) {
  "resolve the logged-in user; if none, render an inline email/password login into container and resolve after sign-in";
  let app = await firebase_app_initialize();
  let auth = getAuth(app);
  let user = await new Promise(function (resolve) {
    let unsubscribe = onAuthStateChanged(auth, function (u) {
      unsubscribe();
      resolve(u);
    });
  });
  if (user) {
    return user;
  }
  return new Promise(function (resolve) {
    html_clear(container);
    let email = html_input_email(container);
    let password = html_input_password(container);
    html_placeholder(email, "Email");
    html_placeholder(password, "Password");
    async function login() {
      let v = await signInWithEmailAndPassword(
        auth,
        html_value_get(email),
        html_value_get(password),
      );
      html_clear(container);
      resolve(v.user);
    }
    app_shared_button(container, "Login", login);
  });
}
