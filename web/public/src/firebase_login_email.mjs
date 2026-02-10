import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_placeholder } from "../../../love/public/src/html_placeholder.mjs";
import { html_input_password } from "../../../love/public/src/html_input_password.mjs";
import { html_input_email } from "../../../love/public/src/html_input_email.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
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
  let component = html_button_width_full(root, "Login", login);
}
