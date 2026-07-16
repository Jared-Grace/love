import { signInWithEmailAndPassword } from "firebase/auth";
import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_value_get } from "../../love/js/html_value_get.mjs";
import { app_shared_input_style } from "../../love/js/app_shared_input_style.mjs";
import { each } from "../../love/js/each.mjs";
import { html_on_enter } from "../../love/js/html_on_enter.mjs";
import { html_focus } from "../../love/js/html_focus.mjs";
import { html_placeholder } from "../../love/js/html_placeholder.mjs";
import { html_input_password } from "../../love/js/html_input_password.mjs";
import { html_input_email } from "../../love/js/html_input_email.mjs";
import { property_get } from "../../love/js/property_get.mjs";
export function firebase_login_email(context, auth) {
  let root = property_get(context, "root");
  let input_username = html_input_email(root);
  let input_password = html_input_password(root);
  html_placeholder(input_password, "Password");
  each([input_username, input_password], app_shared_input_style);
  html_focus(input_username);
  async function login() {
    let username = html_value_get(input_username);
    let password = html_value_get(input_password);
    let v = await signInWithEmailAndPassword(auth, username, password);
    return v;
  }
  html_on_enter(input_password, login);
  let component = app_shared_button_wide(root, "Login", login);
}
