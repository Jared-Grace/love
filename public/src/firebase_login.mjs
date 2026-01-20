import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_input_password } from "../../../love/public/src/html_input_password.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_input_email } from "../../../love/public/src/html_input_email.mjs";
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
      let input_username = html_input_email(root);
      let input_password = html_input_password(root);
      let mapped = list_map(list, function lambda2(item) {});
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
  }
  firebase_auth.onAuthStateChanged(auth, lambda);
}
