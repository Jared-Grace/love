import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
import { html_input_email } from "./html_input_email.mjs";
import { html_input_password } from "./html_input_password.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
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
    app_replace_button(container, "Login", login);
  });
}
