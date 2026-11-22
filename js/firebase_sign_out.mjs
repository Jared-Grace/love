import {getAuth, signOut} from "firebase/auth";
import { fn_name } from "./fn_name.mjs";
import { firebase_app_initialize } from "./firebase_app_initialize.mjs";
export async function firebase_sign_out() {
  ("Signs this browser out of the site's Firebase account, so the next ",
    fn_name("firebase_auth_ensure"),
    " asks for the email and password again.");
  let app = await firebase_app_initialize();
  let auth = getAuth(app);
  await signOut(auth);
}
