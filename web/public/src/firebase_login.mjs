import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_app_initialize } from "../../../love/public/src/firebase_app_initialize.mjs";
export async function firebase_login(on_logged_in) {
  const app = await firebase_app_initialize(context);
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
      hiwf;
    }
  }
  firebase_auth.onAuthStateChanged(auth, lambda);
  async function sign_in(username, password) {
    let v = await firebase_auth.signInWithEmailAndPassword(
      auth,
      username,
      password,
    );
    return v;
  }
}
