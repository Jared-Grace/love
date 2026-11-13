import { signInWithEmailAndPassword } from "firebase/auth";
import { html_input_email } from "./html_input_email.mjs";
import { html_input_password } from "./html_input_password.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { each } from "./each.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_on_enter } from "./html_on_enter.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function firebase_login_email(container, auth) {
  "The one email and password form every page signs in with: drawn into container, and answering with the user once the sign-in goes through.";
  let r = new Promise(function lambda(resolve) {
    let input_username = html_input_email(container);
    let input_password = html_input_password(container);
    html_placeholder(input_password, "Password");
    each([input_username, input_password], app_shared_input_style);
    html_focus(input_username);
    async function login() {
      let username = html_value_get(input_username);
      let password = html_value_get(input_password);
      let v = await signInWithEmailAndPassword(auth, username, password);
      let user = property_get(v, "user");
      resolve(user);
      return v;
    }
    html_on_enter(input_password, login);
    app_shared_button_wide(container, "Login", login);
  });
  return r;
}
