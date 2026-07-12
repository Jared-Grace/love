import { html_button_wide } from "./html_button_wide.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { each } from "./each.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_input_password } from "./html_input_password.mjs";
import { html_input_email } from "./html_input_email.mjs";
import { property_get } from "./property_get.mjs";
export function firebase_login_email(context, firebase_auth, auth) {
  let root = property_get(context, "root");
  let input_username = html_input_email(root);
  let input_password = html_input_password(root);
  html_placeholder(input_password, "Password");
  each([input_username, input_password], html_width_full);
  async function login() {
    let username = html_value_get(input_username);
    let password = html_value_get(input_password);
    let v = await firebase_auth.signInWithEmailAndPassword(
      auth,
      username,
      password,
    );
    return v;
  }
  let component = html_button_wide(root, "Login", login);
}
